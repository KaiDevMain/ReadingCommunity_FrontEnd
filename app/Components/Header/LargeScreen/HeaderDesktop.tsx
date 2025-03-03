import React from 'react'
import Link from 'next/link';
import { handleScroll } from '@/Components/Utils/scroll';
const HeaderDesktop = ({ currentPage}: { currentPage: string } ) => {

  return (
    <>
    {currentPage === '' ? (
      <nav>
        <ul className='flex justify-around max-w-3xl mx-auto'>
          <li><a href="#Top" className='text-gray-700 hover:text-green-600 transition-all duration-300'>ホーム</a></li>
          <li><a href="#About" className='text-gray-700 hover:text-green-600 transition-all duration-300'>このサイトについて</a></li>
          <li><a href="#AttentionBooksSection" className='text-gray-700 hover:text-green-600 transition-all duration-300'>注目の本</a></li>
          <li><a href="#ChatSection" className='text-gray-700 hover:text-green-600 transition-all duration-300'>チャットルーム</a></li>
        </ul>
      </nav> 
    ) : (
      <div><Link href={"/"}><p className='font-black hover:text-green-600 transition-all duration-300'>ホームへ戻る</p></Link></div>
    )
  }
    </>
    
  )
}

export default HeaderDesktop