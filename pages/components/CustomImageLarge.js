import data from '../data.json';
import Image from "next/image";

function CustomImageLarge({image, square}) {
    return (
        
        <div className='relative h-40 sm:h-128 w-3/4 sm:w-1/2  mb-20 '>
            {square ?
            <div className=' relative h-80 w-80 rounded-3xl'>
                <Image 
                alt={data.textoImagenAlternativa}
                src={image}
                loading='eager'
                priority={true}
                layout='fill'
                objectFit='cover'
                className='rounded-3xl'
                quality={25}
             />
            </div>
            :
            <div className='rounded-3xl'>
                <Image 
                alt={data.textoImagenAlternativa}
                src={image}
                loading='eager'
                priority={true}
                layout='fill'
                objectFit='cover'
                className='rounded-3xl'
                quality={25}
            />
            </div>
        }
        </div>
        
    )
}

export default CustomImageLarge
