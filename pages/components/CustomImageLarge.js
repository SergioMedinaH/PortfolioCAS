import data from '../data.json';
import Image from "next/image";

function CustomImageLarge({image}) {
    return (
        <div className=' relative h-96 sm:h-128 w-1/2 mb-20 rounded-3xl'>
            <Image 
            
            src={image}
            
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
             />
        </div>
    )
}

export default CustomImageLarge
