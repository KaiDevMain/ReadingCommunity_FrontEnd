import React, { use, useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '@/Redux/hooks';
import axios from 'axios';
import socket from '@/Components/Utils/Socket';

  const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<{ createdAt: Date; message: string; user: User }[]>([]);
  const bookTitle = useAppSelector((state) => state.chat.channelName);
  const channelId = useAppSelector((state) => state.chat.channelId);
  const user = useAppSelector((state) => state.auth.user)

  interface User {
    email: string;
    id: string;
    name: string;
    photo: string;
  }

  interface FetchMessagesData {
    channelId: string;
    messages: {
      message: string;
      user: { id: string; name: string; email: string; photo: string };
      createdAt: Date;
    }[];
    message: {
      message: string;
      user: { id: string; name: string; email: string; photo: string };
      createdAt: string;
    };
  }
  
  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);
  
  if (loading === null) return null; 


  useEffect(() => {
    if (!channelId) return;
    const fetchMessages = async () => {
      try {
        const response = await axios.get<FetchMessagesData>(`http://localhost:5000/channels/${channelId}/messages`);
        setMessages(response.data.messages.map(msg => ({
          ...msg,
          createdAt: new Date(msg.createdAt)
        })) || []);  
      } catch (error) {
        console.error('メッセージの取得に失敗しました:', error);
        setMessages([]);
      }
    };

    fetchMessages();

    const handleNewMessage = (data: FetchMessagesData) => {
      if (data.channelId === channelId && data.message) {
        setMessages((prevMessages) => [
          {
            message: data.message.message || "",
            user: data.message.user || { id: "", name: "Unknown", email: "", photo: "" },
            createdAt: new Date(data.message.createdAt)
          },
          ...prevMessages
        ]);
      }
    };
    
    

    socket.on('newMessage_socket', handleNewMessage);
    
    return () => {
      socket.off('newMessage_socket', handleNewMessage);
    }
  },[channelId])

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      message: inputText,
      user: user,
    };

    try {
      const response = await axios.post(`http://localhost:5000/channels/${channelId}/messages`, newMessage)
      setInputText("");
    } catch (error) {
      console.error('メッセージの送信に失敗しました:', error);
    }
  }
  return (
    <div className='bg-lime-300 text-center p-2 flex flex-col justify-between flex-grow h-full'>
      {!channelId ? (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-lg font-bold md:hidden">メニューから本を選んでください</h1>
          <h1 className="text-lg font-bold hidden md:block">サイドバーから本を選んでください</h1>
        </div>
      ) : (
        <>
          <div className='overflow-y-auto'>
            <h1 className='text-sm sm:text-base lg:text-lg font-bold'>{bookTitle}</h1>
            <div className='flex-grow overflow-y-auto px-2' style={{maxHeight: 'calc(100vh - 130px)'}}>
            {messages.map((message, index) => {
              return (
                <ChatMessage
                  key={index}
                  message={message.message}
                  user={message.user}
                  createdAt={message.createdAt}
                />
              )
            })} 
            </div>
          </div>
          <form className="flex items-cente mx-auto mb-2" 
                style={{position: 'sticky', bottom: 0, zIndex: 10,}}
                >
            <input type="text" placeholder='メッセージを入力' className=' text-sm sm:text-base lg:text-lg font-bold bg-transparent border-2 border-neutral-400 rounded-lg p-2 w-72' onChange={(e) => setInputText(e.target.value)} value={inputText}/>
            <button
              type='submit'
              className='bg-neutral-400 text-white m-1 p-1 rounded-md'
              onClick={(e) => sendMessage(e)}
              >送信
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Chat

