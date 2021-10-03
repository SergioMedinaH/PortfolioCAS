import data from '../data.json';
import CASIcons from './CASIcons';
import Image from "next/image";
import {useRouter } from "next/dist/client/router";

function PortfolioCard({id, titulo, descripcioncard, c,a,s}) {
    
  
  
  
  var laID = 0;
  var theID = 0;

  console.log(`init laID: ${laID}`)
  console.log(`init theID: ${theID}`)
  console.log(`init laID type: ${typeof laID}`)
  console.log(`init theID type: ${typeof theID}`)

  const router = useRouter();
  
  
  console.log(`router query id: ${ id}`)
  console.log(`router query id type: ${typeof id}`)

  if(typeof id === "undefined"){
    theID = 0;
  } else{
    theID = parseInt(id);
  }
  
  console.log (`theid typeof: ${typeof theID}`)

  if(typeof theID === "number") {
    laID = theID;
  }

  
  console.log (`theid: ${ theID}`)

  console.log (`laid typeof: ${laID}`)
  console.log (`laid typeof: ${typeof laID}`)

  console.log (data.items)
  console.log (data.items[laID])
  console.log (data.items[laID].images)
  console.log(laID)
  const more = () => {
    
    router.push({
        pathname:'/experiencePage',
        query: {
          id: laID,
        }
    });
}
  return (
      <div className='relative  sm:h-96 sm:w-96 h-64 w-64 rounded-3xl mx-5 my-5 flex items-end'>
            
            <Image 
            alt={data.textoImagenAlternativa}
            src={data.items[laID].cardimage}
            priority
            layout="fill"
            objectFit="cover"
            className='rounded-3xl'
            />
        <div className='absolute bg-myBlue bg-opacity-50 hover:bg-opacity-70 transition duration-200 ease-out sm:h-96 sm:w-96 h-64 w-64 rounded-3xl flex items-end'>
        <div className='w-full mb-5'>
          <h2 className='text-white font-bold mr-2 text-2xl sm:text-3xl ml-6 mb-2'>{titulo}</h2>
          <p className='text-white mx-5 mb-5 font-light'>{descripcioncard}</p>
          <div className='sm:flex items-center'>
            <CASIcons c={c} a={a} s={s}/>
            <div className='flex-grow justify-end flex'>
            <div 
            onClick={more}
            className='bg-white h:8 sm:h-10 w-20 sm:w-24 rounded-full flex items-center justify-center cursor-pointer mr-5 ml-2 hover:scale-105 transition-transform duration-200 ease-out'>
              <h2 className='text-myBlue text-md sm:text-lg'>Ver más</h2>
            </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    )
  }

export default PortfolioCard
