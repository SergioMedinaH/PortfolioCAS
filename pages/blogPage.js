import Head from 'next/head'
import { Link } from 'react-scroll'
import Image from "next/image";
import data from './data.json';
import BlogCard from './components/BlogCard';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";*/
import NavBar from './components/NavBar';

function blogPage() {
    console.log(data.items)
    const cards = data.items.map(({id, titulo, descripcion, c,a,s, images, blogImage, descripcioncorta}) => {return <BlogCard 
    
    id={id}
    titulo={titulo}
    descripcion={descripcion}
    c={c}
    a={a}
    s={s}
    images={images}
    blogImage = {blogImage}
    descripcioncorta={descripcioncorta}
    />})
    
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
                alt={data.textoImagenAlternativa}
                layout="fill"
                objectFit="cover"
                />
                <div className="absolute w-full text-center bg-myBlue h-72 bg-opacity-80">
                <NavBar isPortfolio={false}/>
                <div className='flex items-center w-full flex-col mt-10'>
                <h1 className='text-white text-6xl font-bold'>Blog CAS</h1>
                <h2 className='mt-5 text-white text-lg font-light'>Sergio Medina</h2>
                
                
                </div>
                </div>
                
            </div>
            
            </header>
            <section  className=' p-10 flex flex-col'>
            {cards}
            
            
            </section>
            
        </main>

        
    </div>
  )
}

export default blogPage
