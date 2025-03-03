import React from 'react'
import { auth, provider } from '@/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { login, logout } from '@/Redux/Slice/authSlice';

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="bg-[url(/LoginBG.jpg)] bg-cover bg-center  h-[calc(100vh-40px)]">
      <div className='flex justify-center items-center h-full'>
        <button onClick={signIn} className='bg-lime-400 text-gray-500 px-4 py-2 rounded-md '>ログインしてください</button>
      </div>
    </div>
  )
}

export default Login
