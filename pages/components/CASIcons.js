function CASIcons({c,a,s}){
    return(
      <div className='flex ml-5'>
        
        {c ? <div className='h-12 w-12 rounded-full bg-green-400 flex items-center justify-center text-white font-bold text-2xl mr-2 hover:scale-105 transition-transform duration-200 ease-out' >C</div> : <div></div>}
        
        {a ?<div className='h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-2xl mr-2 hover:scale-105 transition-transform duration-200 ease-out'>A</div> : <div></div>}
        {s ? <div className='h-12 w-12 rounded-full bg-red-400 flex items-center justify-center text-white font-bold text-2xl hover:scale-105 transition-transform duration-200 ease-out'>S</div> : <div></div>}
      </div>
    )
  }

export default CASIcons
