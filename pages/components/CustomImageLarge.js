import data from '../data.json';
import Image from "next/image";

function CustomImageLarge({image, square}) {
    return (
        
        <div className='relative h-32 sm:h-128 w-4/5 sm:w-1/2 '>
            {square ?
            <div className=' relative h-80 w-80 mb-20 rounded-3xl'>
                <Image 
                alt={data.textoImagenAlternativa}
                src={image}
                loading='eager'
                priority={true}
                layout='fill'
                objectFit='cover'
                className='rounded-3xl'
             />
            </div>
            :
            <div className='mb-20 rounded-3xl'>
                <Image 
                alt={data.textoImagenAlternativa}
                src={image}
                
                loading='eager'
                priority={true}
                layout='fill'
                objectFit='cover'
                className='rounded-3xl'
            />
            </div>
        }
        </div>
        
    )
}

export default CustomImageLarge
