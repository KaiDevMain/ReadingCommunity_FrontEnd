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
    <div className=''>
      <button onClick={signIn}>ログインしてください</button>
    </div>
  )
}

export default Login