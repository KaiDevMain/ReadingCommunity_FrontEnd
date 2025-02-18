import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp} from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { installChat } from '@/Redux/Slice/chatSlice'
import { useAppSelector, useAppDispatch } from '@/Redux/hooks';

interface HamburgerMenuProps {
  menuOpen:boolean;
  toggleMenu: () => void;
  toggleIcon: () => void;
  currentPage: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({menuOpen, toggleMenu, toggleIcon, currentPage}) => {

    const [channels, setChannels] = useState<{ id: string; channelName: { channel: string } }[]>([]);
    const user = useAppSelector(state => state.auth.user);
    const q = query(collection(db, "Channels"),orderBy("timestamp", "desc"));
    const dispatch = useAppDispatch();

  const addChannel = async () => {
    let channelName = prompt("新しい本について話す");

    if(channelName) {
      const docRef = await addDoc(collection(db, "Channels"),{
        channel:channelName,
        timestamp: serverTimestamp()
      });

      dispatch(installChat({
        channelId: docRef.id,
        channelName:channelName
      }))
    }
  }

    useEffect(() => {
      onSnapshot(q,(querySnapshot) => {
        const channelsResults: { id: string; channelName: { channel: string } }[] = [];
        querySnapshot.docs.forEach((doc) => {
          channelsResults.push({
            id: doc.id,
            channelName: doc.data() as { channel: string},
          })
        })
        setChannels(channelsResults);
      })
    }, [])
  
  return (
    <>
    {currentPage === '' ? (
      <nav className={`fixed top-9 left-0 w-full h-screen bg-lime-400 text-black transition-transform duration-1000 z-20 opacity-90 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className='h-full flex flex-col text-center justify-around' onClick={() =>{ toggleMenu(); toggleIcon() }}>
          <li><a href="#Top" className='className="transition-transform duration-300 transform active:scale-50"'>ホーム</a></li>
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
                  key={channeldata.id}
                  className='mt-2 cursor-pointer' 
                  onClick={()=>dispatch(
                    installChat({
                      channelId:channeldata.id,
                      channelName:channeldata.channelName.channel})
                    )}
                  >
                  <h1 className='text-base lg:text-lg duration-1000' >{channeldata.channelName.channel}</h1>
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