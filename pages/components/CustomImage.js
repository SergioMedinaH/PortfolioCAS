import data from '../data.json';
import Image from "next/image";

function CustomImage({image, square}) {
    return (
        <div>

        {square ? <div className=' relative h-40 sm:h-96 w-40 sm:w-96 mb-20 rounded-3xl'>
            <Image 
            alt={data.textoImagenAlternativa}
            src={image}
            priority
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
            />
        </div> : <div className=' relative h-40 sm:h-96 w-5/6 mb-20 rounded-3xl'>
            <Image 
            alt={data.textoImagenAlternativa}
            src={image}
            priority
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
            />
        </div>}

        </div>
    )
}

export default CustomImage
