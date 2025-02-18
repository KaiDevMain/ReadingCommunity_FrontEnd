import React from 'react';
import { Timestamp } from 'firebase/firestore';
import { Avatar } from '@mui/material'

interface User {
  email: string;
  id: string;
  name: string;
  photo: string;
}

interface MessageProps {
  message: string;
  timestamp: Timestamp;
  user: User;
}

const ChatMessage:React.FC<MessageProps> = (props) => {
const {message, timestamp, user} = props;
const userName = user ? user.name : 'Unknown User';
const date = timestamp && timestamp.toDate ? timestamp.toDate() : null;

  return (
    <div className='p-2'>
      <div className='flex items-center'>
        <Avatar src={user.photo}/>
        <div className='p-1'>
          <h2>
            {userName}            
            <span className=''>{date ? date.toLocaleString() : 'No timestamp'}</span>
          </h2>
        </div>
      </div>
        <p className='mt-1 text-left w-80 break-words'>{message}</p>
    </div>
  )
}

export default ChatMessage