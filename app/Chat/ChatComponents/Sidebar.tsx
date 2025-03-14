import React, { useEffect, useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { auth } from '@/firebase';
import { installChat } from '../../Redux/Slice/chatSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import api from '@/Components/Utils/api'; 
import socket from '@/Components/Utils/Socket';

interface ChannelData {
  _id: string
  channelName: string
}

const Sidebar = () => {
  const [channels, setChannels] = useState<{_id: string; channelName: string;}[]>([]);
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const addChannel = async () => {
    let channelName = prompt("新規部屋を作る");
    if(channelName) {
      try {
        const response = await api.post('/api/channels', {
          channelName,
          timestamp: new Date()
        });
        dispatch(installChat({
          channelId: response.data.id,
          channelName:channelName
        }));
      } catch (error) {
        console.error('チャンネルの作成に失敗しました:', error);
      }
    }
  }
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await api.get('/api/channels');
        setChannels(response.data.map((channel: { _id: string; channelName: string }) => ({
          _id: channel._id, 
          channelName: channel.channelName
        })));
      } catch (error) {
        console.error('チャンネルの取得に失敗しました:', error);
      }
    };
    fetchChannels();

    const handleNewChannel = (newChannel: ChannelData) => {
      setChannels((prevChannel) => [...prevChannel, newChannel]);
    };

    socket.on('channelAdded_socket', handleNewChannel);
  
    return () => {
      socket.off('channelAdded_socket', handleNewChannel);
    };

  }, []);
  
  return (
    <div className='bg-lime-200 p-2 basis-64 lg:basis-80 flex-col justify-between h-full overflow-y-auto hidden md:flex'>
      <div>
        <div className='flex items-center justify-around flex-shrink-0 w-40 cursor-pointer hover:text-gray-400 duration-700' onClick={() => addChannel()}>
          <h1 className='text-base lg:text-lg font-bold '>チャットの追加</h1>
          <AddCircleOutlineIcon/>
        </div>
        
        <div className='mt-3 overflow-y-auto'>
          {channels.map((channeldata) => 
          {
            return (
            <div 
            key={channeldata._id}
            className='bg-slate-100 mt-2 rounded-3xl p-2 inline-block cursor-pointer hover:bg-gray-400 duration-500 w-full' 
            onClick={()=>dispatch(
              installChat({
                channelId:channeldata._id,
                channelName:channeldata.channelName})
              )}
              >
              <h1 className='text-base lg:text-lg hover:text-slate-100 duration-700' >{channeldata.channelName}</h1>
          </div>
          )})}
        </div>
      </div>
      <div className='flex items-center'>        
        <img src={user?.photo} alt="photo" className='w-11 lg:w-16 h-11 lg:h-16 rounded-full' onClick={() => auth.signOut()}/>
        <h1 className='ml-4 text-base lg:text-xl'>{user?.name}</h1>

      </div>
    </div>
  )
}

export default Sidebar

