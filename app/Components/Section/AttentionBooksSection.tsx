import { _NotoSerifJP, _YuseiMagic } from '@/layout'

const AttentionBooksSection = () => {
  return (
    <div className="my-8 sm:my-10 md:my-12 lg:my-16 w-80 sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto p-2">
      <div className="bg-blue-400  p-1 md:p-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:font-bold text-yellow-400 text-center">注目の本！</h1>
      </div>

      <div className='bg-gradient-to-r from-orange-200 via-green-300'>
        <div className="flex p-1 sm:p-3 md:p-7 lg:p-9">
          <img src="/AttentionBooksImages/AttentionBooks1.jpg" alt="image" className='w-32 sm:w-40 md:w-44 lg:w-52'/>
          <div className='p-1 sm:p-3 md:p-7 lg:p-9'>
            <p className={`text-sm sm:text-base md:text-lg lg:text-2xl text-center ${_YuseiMagic.className}`}>その前途、<br />誰にも予測不能！</p>
            <p className={`mt-4 text-xs sm:text-sm md:text-base lg:text-xl ${_NotoSerifJP.className}`}>『成瀬は天下を取りにいく』に続く待望の第2作。<br />
            幼馴染の島崎が故郷に帰ると、成瀬が書置きを残し失踪しており・・・！？
            </p>
          </div>
        </div>

        <div className="flex p-1 sm:p-3 md:p-7 lg:p-9">
          <div className='p-1 sm:p-3 md:p-7 lg:p-9'>
            <p className={`text-sm sm:text-base md:text-lg lg:text-2xl text-center ${_YuseiMagic.className}`}>５分で読めて、あっと驚き、わっと泣ける。</p>
            <p className={`mt-4 text-xs sm:text-sm md:text-base lg:text-xl ${_NotoSerifJP.className}`}>「生まれはここ湘南なのですが、父の仕事の都合で三歳からおとぎ話の世界に住んでいました」<br />おとぎ話の世界からやってきたと語る転校生、その正体とは？</p>
          </div>
          <img src="/AttentionBooksImages/AttentionBooks2.jpg" alt="image" className='w-32 sm:w-40 md:w-44 lg:w-52'/>
        </div>

        <div className="flex p-1 sm:p-3 md:p-7 lg:p-9">
          <img src="/AttentionBooksImages/AttentionBooks3.jpg" alt="image" className='w-32 sm:w-40 md:w-44 lg:w-52'/>
          <div className='p-1 sm:p-3 md:p-7 lg:p-9'>
            <p className={`text-sm sm:text-base md:text-lg lg:text-2xl text-center ${_YuseiMagic.className}`}>読まないまま終わる人生もあったと思うと怖いってぐらい凄かった</p>
            <p className={`mt-4 text-xs sm:text-sm md:text-base lg:text-xl ${_NotoSerifJP.className}`}>「32歳になっても幼児の知能しかないチャーリイ・ゴードン。<br className='hidden sm:block'/>
          そんな彼に、夢のような話が舞いこんだ。偉い先生が頭をよくしてくれるというのだ。<br className='hidden sm:block'/>やがて手術により、チャーリイは天才に変貌したが...</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AttentionBooksSection