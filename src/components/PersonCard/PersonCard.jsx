import React from 'react'

const PersonCard = ({img , title , desc}) => {
  return (
    <div className='flex flex-col gap-1 items-center'>
        <img src={img} alt="picture" />
        <p className='font-[600]'>{title}</p>
        <p className='text-[14px] text-gray-400'>{desc}</p>
    </div>
  )
}

export default PersonCard