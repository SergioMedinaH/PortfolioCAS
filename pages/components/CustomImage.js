import data from '../data.json';
import Image from "next/image";

function CustomImage({image}) {
    return (
        <div className=' relative h-64 sm:h-96 w-5/6 mb-20 rounded-3xl'>
            <Image 
            alt='image'
            src={image}
            
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
             />
        </div>
    )
}

export default CustomImage