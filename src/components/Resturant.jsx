import React from 'react'
import StarIcon from '@mui/icons-material/Star';
function Resturant() {
  return (
    <div className=' w-[300px] h-[333px] lg:w-[300px] rounded overflow-hidden flex flex-col justify-center items-center border-gray-300 border-[1px] m-3 shadow-md'>
        <img src={require('../assets/website_image_pizza_1.jpg')} className="max-h-32 w-full " alt="" />
        <img src={require('../assets/616290c17c3fc.jpg')} className="absolute self-center justify-self-center w-24 top-24 rounded-lg border shadow-lg" alt="" />
        <h1 className='mt-12 font-bold pb-3'>فست فود تنورک</h1>
        <h2 className='text-xs'><span className='text-gray-400'>(13) </span>3.8 <StarIcon style={{ color: 'gold' }}/></h2>
        <h1 className='text-gray-400 text-sm'>فست فود پیتزا ساندویچ</h1>
        <h1 className='shadow-md p-3 rounded-full mb-5 text-sm'>ارسال اکسپرس 12000</h1>
    </div>
  )
}

export default Resturant