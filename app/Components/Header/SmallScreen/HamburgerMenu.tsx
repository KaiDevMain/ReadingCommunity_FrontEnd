import Link from 'next/link';
import { useState, useEffect } from 'react'
import { auth } from '@/firebase';
import { installChat } from '@/Redux/Slice/chatSlice'
import { useAppSelector, useAppDispatch } from '@/Redux/hooks';
import axios from 'axios';
import socket from '@/Components/Utils/Socket'

interface HamburgerMenuProps {
  menuOpen:boolean;
  toggleMenu: () => void;
  toggleIcon: () => void;
  currentPage: string;
}

interface ChannelData {
  _id: string
  channelName: string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuOpen, toggleMenu, toggleIcon, currentPage }) => {

  const [channels, setChannels] = useState<ChannelData[]>([])
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const addChannel = async () => {
    let channelName = prompt("新しい本について話す");
    if(channelName) {
      try {
        const response = await axios.post('http://localhost:5000/channels', {
          channelName,
          timeStamp: new Date()
        });
        dispatch(installChat({
        channelId: response.data._id,  
        channelName:channelName
      }));
      } catch (error) {
        console.log("チャンネルの作成に失敗しました。", error);
      }}
    }

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/channels`);
        setChannels(response.data);
      } catch (error) {
        console.error(' チャンネルの取得に失敗しました:', error);
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
    
  },[])

  return (
    <>
    {currentPage === '' ? (
      <nav className={`fixed top-9 left-0 w-full h-screen bg-lime-400 text-black transition-transform duration-1000 z-20 opacity-90 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className='h-full flex flex-col text-center justify-around' onClick={() =>{ toggleMenu(); toggleIcon() }}>
          <li><a href="#Top" className='transition-transform duration-300 transform active:scale-50'>ホーム</a></li>
          <li><a href="#About">このサイトについて</a></li>
          <li><a href="#AttentionBooksSection">注目の本</a></li>
          <li><a href="#ChatSection">チャットルーム</a></li>
        </ul>
      </nav>
    ) : (
      <div className={`fixed top-9 left-0 w-full h-screen bg-lime-400 text-black text-center transition-all duration-1000 z-20 opacity-90 ${menuOpen ? ' translate-x-0' : 'translate-x-full'}`} onClick={() =>{ toggleMenu(); toggleIcon() }}>
        <Link href={"/"} className='text-xl cursor-pointer'>ホームへ戻る</Link>
        <div className='mt-20 flex flex-col justify-around'>
          <h1 className='cursor-pointer text-lg' onClick={() => addChannel()}>新規本の追加</h1>
            <div className='mt-3 overflow-y-auto flex flex-col'>
              {channels.map((channeldata) => (
                <div
                  key={channeldata._id}
                  className='mt-2 cursor-pointer' 
                  onClick={()=>dispatch(
                    installChat({
                      channelId: channeldata._id,
                      channelName: channeldata.channelName,
                    })
                    )}
                  >
                  <h1 className='text-base lg:text-lg duration-1000' >{channeldata.channelName}</h1>
                </div>
              ))}
            </div>
        </div>
      </div>
    )}
    </>
  )
}

export default HamburgerMenu

