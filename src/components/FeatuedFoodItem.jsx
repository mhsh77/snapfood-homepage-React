import { Star } from '@mui/icons-material'
import React from 'react'

function FeatuedFoodItem() {
  return (
    <div className='w-[237px] bg-white flex flex-col justify-between items-center p-2 px-4 space-y-3 rounded-lg'>
        <h1 className='text-sm'>بابونه</h1>
        <h1 className='text-lg'>ارسال اکسپرس 10000</h1>
        <img src={require('../assets/63948e7168d0f.jpeg')} alt="" className='w-[7.125rem] h-[7.125rem] rounded-lg'/>
        <h1>چلوکباب زعفرانی</h1>
        <div className='flex flex-row justify-between w-full border-b py-5 my-2'>
            <div className='flex flex-col'>
                <h1 className=' text-xs'><span className='bg-[#FF00A6] text-white p-1 rounded-lg mr-2'>%20</span><span className=' line-through text-gray-500'>2000</span></h1>
                <h1><span className='text-xs'>تومان</span><span className='text-black font-bold'>10000</span></h1>
            </div>
            <div className='flex flex-col'>
                <h1 className='flex'><span className=' text-orange-400 ml-auto'><Star/></span>4.5</h1>
                <h1>عدد باقی مانده 9</h1>
            </div>
            
        </div>

    </div>
  )
}

export default FeatuedFoodItem