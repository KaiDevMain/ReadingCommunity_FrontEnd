const Title = () => {
  return (
    <div className=''> 
      <h1 className="text-7xl md:text-8xl  font-bold mt-4 ml-2 md:text-center md:-rotate-12" 
      style={{textShadow: "10px 5px 10px #00CC00"}}>Books
      </h1>
      
      <h1 className="text-7xl md:text-8xl font-bold ml-2 md:text-center md:-rotate-12" 
      style={{textShadow: "10px 5px 10px #00CC00"}}>Lounge
      </h1>

      <h1 className="mb-5 text-xl sm:text-3xl sm:font-bold md:text-4xl text-blue-500 -rotate-12 ml-12 md:mx-auto md:text-center sm:mb-52 md:mb-60 mt-36" 
      style={{ whiteSpace: 'nowrap' }} >
        読書を<br className="md:hidden" />もっと楽しく<br className="md:hidden" />もっとつながりを
      </h1>
    </div>
  )
}

export default Title