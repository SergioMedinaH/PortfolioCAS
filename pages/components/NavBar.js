import Head from 'next/head'
import { Link } from 'react-scroll'
import Image from "next/image";
import data from '../data.json';
import {useRouter } from "next/dist/client/router";

function NavButton({ isInPortfolio, isPortfolio, isBlog}){
    
  const router = useRouter();

  const blog = () => {
    router.push({
        pathname:'/blogPage',
    });
}
  return(
      <div onClick={() => {}} className='' >
        
        {isPortfolio ?
          isInPortfolio ?
            <Link to='portfolio' smooth={true}>
              <h2 
              className={'font-regular text-lg cursor-pointer text-white hover:scale-105 transition-transform duration-200 ease-out'}>Portfolio</h2>
            </Link>
          :
          <h2 onClick={() => router.push('/')}
            className={'font-light text-lg cursor-pointer text-white hover:scale-105 transition-transform duration-200 ease-out'}>Portfolio</h2>
          
        :
         isInPortfolio ?
         <h2 onClick={blog}
          className={'font-light text-lg cursor-pointer text-white hover:scale-105 transition-transform duration-200 ease-out'}>Blog</h2>
         :
         <h2 onClick={blog}
          className={isBlog ? 'font-regular text-lg cursor-pointer text-white hover:scale-105 transition-transform duration-200 ease-out'
        :
        'font-light text-lg cursor-pointer text-white hover:scale-105 transition-transform duration-200 ease-out'
        }>Blog</h2>

        
        
      }
        
      </div>
    )
  }

function NavBar({isPortfolio}) {
    return(
      <div className = 'h-20 flex justify-end'>
                <div className = 'flex items-center space-x-5 sm:space-x-8 mr-5 ml-1 sm:mr-10'>
                  <NavButton isInPortfolio={isPortfolio} isPortfolio={true}/>
                  <NavButton isInPortfolio={isPortfolio} isPortfolio={false} isBlog={!isPortfolio} />
                  <a href="https://sergiomedinaher.editorx.io/cas-portfolio">
                  
                  <div className= 'border rounded-full h-8 w-44 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 ease-out'>
                    <h2 className=' text-white text-lg font-light'>Portfolio secundario</h2>
                  </div>
                  
                  </a>
                </div>
              </div>
    )
  }
export default NavBar
