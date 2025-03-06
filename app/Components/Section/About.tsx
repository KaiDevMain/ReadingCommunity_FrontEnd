import { _NotoSerifJP, _YuseiMagic } from '@/font'

const About = () => {
  return (
    <div className="my-8 sm:my-10 md:my-12 lg:my-16 w-80 sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto p-2">
      <div className="bg-green-600 text-zinc-100 p-1 md:p-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:font-bold text-green-300 text-center ">BooksLoungeについて</h1>
      </div> 

      <div className='bg-gradient-to-r from-lime-300 via-slate-200 p-4'>
        <div className='p-1 sm:p-3 md:p-7 lg:p-9 '>
          <p className={`text-sm sm:text-base md:text-lg lg:text-2xl text-center ${_YuseiMagic.className}`}>
          BooksLoungeは本を通じて繋がりを増やし<br />もっと読書を楽しくするコミュニティです。
          </p>
          <p className={`mt-4 text-xs sm:text-sm md:text-base lg:text-xl text-center ${_NotoSerifJP.className}`}>
          「読んだ本の感想を共有したい」<br/>「自分のお気に入りの本を紹介したい」<br/>と思った事がある方<br />是非あなたの一推し本を紹介してください
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

