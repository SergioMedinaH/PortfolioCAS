import Head from 'next/head'
import { Link } from 'react-scroll'
import Image from "next/image";
import data from './data.json';
import PortfolioCard from './components/PortfolioCard';
import Footer from './components/Footer';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";*/
import NavBar from './components/NavBar';

function PortfolioPage() {
    console.log(data.items)
    const cards = data.items.map(({id, titulo, descripcioncard, c,a,s}) => {return <PortfolioCard 
    id={id}
    titulo={titulo}
    descripcioncard={descripcioncard}
    c={c}
    a={a}
    s={s}
    />})
    
    return (
        <div className="min-h-screen">
        <Head>
            <title>Portfolio CAS | Sergio Medina</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full">
        
            <header className=' w-full'>
            <div className='relative h-96 '>
                <Image 
                src={data.imagenFondoInicio}
                alt={data.textoImagenAlternativa}
                layout="fill"
                objectFit="cover"
                priority
                />
                <div className="absolute w-full text-center bg-myBlue h-96 bg-opacity-80">
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
                
            </div>
            
            </header>
            <section id='portfolio' name='portfolio' className='portfolio p-10  flex flex-wrap items-center justify-center'>
            {cards}
            
            
            </section>
            <Footer/>
            
        </main>

        
    </div>
  )
}

export default PortfolioPage
