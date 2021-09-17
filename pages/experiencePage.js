import Head from 'next/head'
import { Link } from 'react-scroll'
import Image from "next/image";
import data from './data.json';
import BlogCard from './components/BlogCard';
import { useRouter } from "next/dist/client/router";
import CASIcons from './components/CASIcons';
import CustomImageLarge from './components/CustomImageLarge';
import CustomImage from './components/CustomImage';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";*/
import NavBar from './components/NavBar';

function experiencePage() {
    
    
    const laID = 0;
    const router = useRouter();
    const {id} = router.query;
    console.log (`la id: ${id}`)
    
    laID = parseInt(id);
    console.log (`la laid: ${ typeof laID}`)

    /*if (typeof data.items[laID].images !== "undefined") {
      const imagesList = data.items[laID].images.map(({link}) => {return < CustomImageLarge
    
        image={link}
        />
      
      })
      
  }*/
    
    return (
        <div className="min-h-screen">
        <Head>
            <title>Portfolio CAS | Sergio Medina</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full">
        
            <header className=' w-full'>
            <div className='relative h-72 '>
                <Image 
                src={data.imagenFondoInicio}
                
                layout="fill"
                objectFit="cover"
                />
                <div className="absolute w-full text-center bg-myBlue h-72 bg-opacity-80">
                <NavBar isPortfolio={false} isBlog={false}/>
                <div className='flex items-center w-full flex-col mt-10'>
                <h1 className='text-white text-6xl font-bold'>{data.items[laID].titulo}</h1>
                <h2 className='mt-5 text-white text-lg font-light'>Sergio Medina</h2>
                
                
                </div>
                </div>
                
            </div>
            
            </header>

            {typeof laID !== "undefined" ?
              <section  className=' p-10 flex flex-col'>
              
            
              <CASIcons c={data.items[laID].c} a={data.items[laID].a} s={data.items[laID].s} />
              <div className='flex flex-col lg:flex-row'>
                
                <div className='w-full lg:w-1/2'>
                <p className='text-black mx-5 mb-5 font-light mt-2 '>{data.items[laID].descripcion}</p>
                
                </div>
                <div className='flex items-center flex-col w-full lg:w-1/2'>
                
                <CustomImage image={data.items[laID].blogImage}/>
              </div>
              
              </div>
              <div className='flex flex-col items-center'>
              { /*imagesList*/}
                  
              </div>
              
              
              
              
              </section>
            
            :
            <div></div>
            }
            
            
        </main>

        
    </div>
  )
}

export default experiencePage
