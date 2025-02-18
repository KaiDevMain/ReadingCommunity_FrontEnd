import { _NotoSerifJP, _YuseiMagic } from '@/layout'
import Link from 'next/link'
const ChatSection = () => {
  return (
    <div className="my-8 sm:my-10 md:my-12 lg:my-16 w-80 sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto p-2">
      <div className="bg-orange-400 text-zinc-100 p-1 md:p-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:font-bold text-lime-200 text-center">本で繋がる</h1>
      </div>

      <div className='bg-gradient-to-r from-slate-200  via-orange-200 p-4'>
        <div className='p-1 sm:p-3 md:p-7 lg:p-9 '>
          <p className={`text-sm sm:text-base md:text-lg lg:text-2xl text-center ${_YuseiMagic.className}`}>
          「好きな本について自由に話し合えるコミュニティスペースです。読書体験を共有し、意見を交わしましょう、
          </p>
          <p className={`mt-4 text-xs sm:text-sm md:text-base lg:text-xl text-center ${_NotoSerifJP.className}`}>
          【チャットの使い方】
          </p>
          <p className={`mt-2 text-xs sm:text-sm md:text-base lg:text-xl ${_NotoSerifJP.className}`}>
            ・他者の意見を尊重し、丁寧なやりとりを心がけましょう。
          </p>
          <p className={`mt-2 text-xs sm:text-sm md:text-base lg:text-xl ${_NotoSerifJP.className}`}>
          ・本チャットではネタバレに関する制限は設けておりません。<br />
          必要に応じて閲覧時にご注意ください。
          </p>
          <p className={`mt-2 text-xs sm:text-sm md:text-base lg:text-xl ${_NotoSerifJP.className}`}>
          ・チャット内容が本サイトの趣旨とかけ離れている場合や、不適切と判断される場合には、運営の判断で削除することがあります。ご了承ください。
          </p>
        </div>
        <button className="block relative group rounded-full border-2 border-green-500  p-2 overflow-hidden my-2 mx-auto">
          <Link href="/Chat">
            <p className="relative z-10 sm:text-base md:text-lg lg:text-2xl text-green-500 duration-500 group-hover:text-white">
              好きな本について語る
            </p>
          </Link>
          <span className="absolute inset-0 bg-yellow-400 skew-y-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-leftt"></span>
        </button>

      </div>
    </div>
  )
}

export default ChatSection