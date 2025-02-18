"use client";
import React, { useEffect } from 'react';
import Sidebar from './ChatComponents/Sidebar';
import Chat from './ChatComponents/Chat';
import Link from 'next/link';
import Login from './ChatComponents/Login';
import { auth } from '@/firebase';
import { login, logout } from '@/Redux/Slice/authSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';

const page = () => {
  const userAuth = useAppSelector(state => state.auth.user); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch(
          login({
            id: user.uid,
            photo: user.photoURL,
            email: user.email,
            name: user.displayName,
          })
        )
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);
  
  return (    
    <div className='w-full'>
      {userAuth ? 
          <div className='flex w-full h-[calc(100vh-36px)] overflow-auto'>
            <Sidebar/>
            <Chat/>
          </div>
        :
        <div>
          <Login />
        </div>
      }
    </div>    
  )
}

export default page


