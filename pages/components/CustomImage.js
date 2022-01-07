import data from '../data.json';
import Image from "next/image";

function CustomImage({image, square}) {
    return (
        <div className='w-full h-full'>

        {square ? <div className=' relative h-40 sm:h-96 w-5/6 mb-20 rounded-3xl'>
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
        </div> : <div className=' relative h-40 sm:h-96 w-5/6 mb-20 rounded-3xl'>
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
        </div>}

        </div>
    )
}

export default CustomImage
