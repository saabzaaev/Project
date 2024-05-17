import React from 'react'
import arrow from "/src/assets/images/arrow.svg"

const Card = ({img , title , desc}) => {
  return (
    <div className='backdrop-blur-[10px] border-white border-[2px] rounded-xl p-[25px] flex flex-col gap-2 items-start justify-between'>
        <img src={img} alt="img" className='m-[0_auto] w-[135px] h-[135px]' />
        <p className="text-[20px] tracking-[1px] font-[600 mt-[20px]">{title}</p>
        <p>{desc}</p>
        <div className='flex items-center gap-1 cursor-pointer'>
            <p className='text-[#4E92F9] text-[20px]'>Learn More</p>
            <img src={arrow} alt="." className=' w-[20px]' />
        </div>
    </div>
  )
}

export default Card