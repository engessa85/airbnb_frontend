import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='max-width-[1500px] mt-4 p-4 mb-7'>
        <div className='w-full h-[64vh] overflow-hidden rounded-xl relative'>
            <Image src="/beach_1.jpg" alt="Hero Image" fill className='object-cover' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-3'>
            <div className='mt-4 col-span-3'>
                <h1 className='text-2xl'>Property Name</h1>
                <p className='text-sm text-slate-700'>2 Guests - 2 Bedroom - 1 Bathroom</p>
                
                <hr className='mt-4'/>

                <div className='flex flex-row items-center mt-4 space-x-4'>
                    <Image src="/profile_pic_1.jpg" alt='image' width={50} height={50} className='rounded-full' />
                    <p className='text-gray-400 text-sm'>Jone Doe is your host</p>
                </div>
                <hr className='mt-4'/>
                <div className='mt-6'>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolor natus maiores omnis cumque repellat culpa quos, suscipit voluptatem quod voluptatibus veniam adipisci repudiandae, non debitis autem ipsum delectus nesciunt.</p>
                </div>
            </div>
            <div className='mt-6 rounded-xl p-4 col-span-2 shadow-xl'>
                <h1>$200 per night</h1>
                <div className='w-full border m-5 p-2 rounded-xl -ml-1'>
                    <label>Guest </label>
                    <select className='w-full h-full bg-transparent'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className='w-full rounded-xl px-4 py-3 bg-airbnb text-white text-center cursor-pointer hover:opacity-[50%] transition'>Submit</div>
                <div className='flex items-center justify-between'>
                    <p className='text-sm text-gray-400 mt-4'>$200 * 4 nights</p>
                    <p className='text-sm text-gray-400 mt-4'>$800</p>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <p className='text-sm text-gray-400 mt-4'>DjangoBnbFee</p>
                    <p className='text-sm text-gray-400 mt-4'>$50</p>
                </div>
                <hr/>
                <div className='flex items-center justify-between mt-2'>
                    <p className='text-sm text-gray-400 mt-4'>Total</p>
                    <p className='text-sm text-gray-400 mt-4'>$50</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page