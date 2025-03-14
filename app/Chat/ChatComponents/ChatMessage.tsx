import React from 'react';
import { Avatar } from '@mui/material'

interface User {
  email: string;
  id: string;                         
  name: string;
  photo: string;
}

interface MessageProps {
  message: string;
  user: User;
  createdAt: Date;
}


const ChatMessage:React.FC<MessageProps> = (props) => {
const {message, user, createdAt } = props;
  return (
    <div className='p-2'>
      <div className='flex items-center'>
        <Avatar src={user.photo}/>
        <div className='p-1'>
          <h2>
            {user.name}
            <span className='ml-2'>{createdAt ? createdAt.toLocaleString() : '時間情報がありません'}</span>
          </h2>
        </div>
      </div>
        <p className='mt-1 text-left w-full break-words'>{message}</p>
    </div>
  )
}

export default ChatMessage