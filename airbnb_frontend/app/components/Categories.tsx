import React from 'react'
import Image from 'next/image'
function Categories() {
  return (
    <div className='max-w-[2500px] mx-auto p-4 flex space-x-12'>
        <div className='flex flex-col gap-2 items-center justify-center hover:border-b-2 hover:opacity-60 cursor-pointer'>
            <Image src="/home.jpg" alt='main' width={30} height={20} />
            <p className='text-sm'>Cabines</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center hover:border-b-2 hover:opacity-60 cursor-pointer'>
            <Image src="/icon.webp" alt='main' width={30} height={20} />
            <p className='text-sm'>Cabines</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center hover:border-b-2 hover:opacity-60 cursor-pointer'>
            <Image src="/amazing.jpg" alt='main' width={30} height={20} />
            <p className='text-sm'>Cabines</p>
        </div>
        
       
    </div>
  )
}

export default Categories