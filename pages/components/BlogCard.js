import data from '../data.json';
import CASIcons from './CASIcons';
import CustomImage from './CustomImage';
import {useRouter } from "next/dist/client/router";
function BlogCard({id, titulo, descripcion, c,a,s, images, blogImage}) {
    
  /*const imagesList = images.map(({link}) => {return < CustomImage
    
    image={link}
    />
  
  })*/
  const router = useRouter();
  
  const laID = id
  const more = () => {
    console.log(id)
    console.log(data.items[id])
    router.push({
        pathname:'/experiencePage',
        query: {
          id: laID,
        }
    });
}
  return (
      <div className=''>
            <h2 className=' text-myBlue text-3xl font-bold mb-5'>{titulo}</h2>
            <CASIcons c={c} a={a} s={s} />
            <div className='flex flex-col lg:flex-row'>
              
              <div className='w-full lg:w-1/2'>
              <p className='text-black mx-5 mb-5 font-light mt-2 '>{descripcion}</p>
              <div 
              onClick={more}
              className='bg-myBlue h-10 w-24 rounded-full flex items-center justify-center cursor-pointer mr-5 ml-5 mb-10 hover:scale-105 transition-transform duration-200 ease-out'>
                <h2 className='text-white text-lg'>Ver más</h2>
              </div>
              </div>
              <div className='flex items-center flex-col w-full lg:w-1/2'>
              {/*/imagesList*/}
              <CustomImage image={blogImage}/>
            </div>
            </div>
            
            <div className='h-px bg-myBlue mb-10'></div>
      </div>
    )
  }
  /*
  <div className='relative h-96 w-96 rounded-3xl mx-5 my-5 flex items-end'>
            <Image 
            src={data.imagenFondoInicio}
            
            layout="fill"
            objectFit="cover"
            className='rounded-3xl'
            />
        <div className='absolute bg-myBlue bg-opacity-40 hover:bg-opacity-60 transition duration-200 ease-out h-96 w-96 rounded-3xl flex items-end'>
        <div className='w-full mb-5'>
          <h2 className='text-white font-bold text-3xl ml-6 mb-2'>{titulo}</h2>
          <p className='text-white mx-5 mb-5 font-light'>{descripcioncard}</p>
          <div className='flex items-center'>
            <CASIcons c={c} a={a} s={s}/>
            <div className='flex-grow justify-end flex'>
            <div className='bg-white h-10 w-24 rounded-full flex items-center justify-center cursor-pointer mr-5 ml-2 hover:scale-105 transition-transform duration-200 ease-out'>
              <h2 className='text-myBlue text-lg'>Ver más</h2>
            </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
  */

export default BlogCard
