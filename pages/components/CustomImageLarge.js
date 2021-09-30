import data from '../data.json';
import Image from "next/image";

function CustomImageLarge({image}) {
    return (
        <div className=' relative h-32 sm:h-128 w-3/4 sm:w-1/2  mb-20 rounded-3xl'>
            <Image 
            alt='image'
            src={image}
            priority
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
             />
        </div>
    )
}

export default CustomImageLarge
