import React from 'react'
import '/src/App.css'

const InfoCard = ({title , desc}) => {
  return (
    <div className='blurs p-[20px] rounded-xl flex flex-col gap-3 border-[2px] border-white'>
        <p className='textColor font-[600]'>{title}</p>
        <hr className='border-[2px]' />
        <p className='text-[14px]'>{desc}</p>
    </div>
  )
}

export default InfoCard