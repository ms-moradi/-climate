

import load from '@/assets/image/loading.png';
import Image from 'next/image';


const Loading =()=>{
    return(
        <div className='w-full h-[564px] bg-white flex justify-center items-center'>
            <Image src={load} alt="icon" width={75} className='animate-spin'/>
        </div>
    )
}

export default Loading;