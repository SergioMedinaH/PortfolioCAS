import data from '../data.json';
import Image from "next/image";

function CustomImage({image}) {
    return (
        <div className=' relative h-40 sm:h-96 w-5/6 mb-20 rounded-3xl'>
            <Image 
            alt={data.textoImagenAlternativa}
            src={image}
            priority
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
             />
        </div>
    )
}

export default CustomImage
