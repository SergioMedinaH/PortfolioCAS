import Head from 'next/head'
import { Link } from 'react-scroll'
import Image from "next/image";
import data from './data.json';
import PortfolioCard from './components/PortfolioCard';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";*/
import NavBar from './components/NavBar';
import PortfolioPage from './PortfolioPage';





export default function Home() {
  return(
    <div>
    <PortfolioPage/>
    
    </div>
  );
  
}
/*

<div className='h-96 bg-myBlue'>
            <Image 
            src="https://drive.google.com/file/d/1U0lSGaZaIfz5b3tUJAlxKPXDTwwfKwfL/view" 
            layout="fill"
            objectFit="cover"
            />
            
            <NavBar isPortfolio={true}/>
            <div className='flex items-center w-full flex-col mt-10'>
              <h1 className='text-white text-6xl font-bold'>Portfolio CAS</h1>
              <h2 className='mt-5 text-white text-lg font-light'>Sergio Medina</h2>
              <Link to='portfolio' smooth={true}>
              <div className= 'border rounded-full h-10 w-48 mt-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 ease-out'>
                <h2 className=' text-white text-lg font-bold'>Ver portfolio</h2>
              </div>
              </Link>
              
            </div>
          </div>
*/