import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMinus ,faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import image17 from '@/assets/image/17.jpg';
import snow from '@/assets/image/snow.png';

export default function Home() {
 
  return (
   <div className="w-full h-[564px] bg-[#5696fd] relative">
    <Image src={image17} alt="icon"/>
    <div className='w-full h-[400px] bg-white rounded-t-[115px] absolute bottom-0 '>
      <div className=" flex flex-col justify-start items-center z-10  ">
        <div className="flex justify-center gap-[2px] mb-12">
          <FontAwesomeIcon icon={faCircle} width={5} className='text-zinc-400'/>
          <FontAwesomeIcon icon={faMinus} width={30} className='text-purple-700'/>
          <FontAwesomeIcon icon={faCircle} width={5} className='text-zinc-400'/>
        </div>
        <div className="mb-20">
          <h1 className="text-[#806ef8] text-3xl font-extrabold text-center mb-3">News and<br/> weather forecast</h1>
          <p className="text-zinc-400 text-[13px] text-center">you pray for rain, you gotta deal with the mud <br/> too. That's a part of it.</p>
        </div>
        <div className='relative'>
          <span className="w-[60px] h-[60px] flex justify-center rounded-full bg-gradient-to-b from-[#b0a4ff] to-[#806ef8] animate-ping "/>
          <Link href="/weather">
            <span className="w-[60px] h-[60px] flex justify-center rounded-full bg-gradient-to-b from-[#b0a4ff] to-[#806ef8] absolute top-0 bottom-0 shadow-xl">
              <FontAwesomeIcon icon={faArrowRightLong} width={30} className='text-white'/>
            </span>
          </Link>
        </div>
      </div>
    </div>
   </div>
  )
}