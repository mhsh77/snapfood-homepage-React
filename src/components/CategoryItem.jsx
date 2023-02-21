import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function CategoryItem() {
  return (
    <div className='flex w-full items-center justify-center'>
        <div className='bg-green-500 max-w-[200px] shadow-2xl rounded-xl overflow-hidden border-2 border-white'  >
            <div className=' flex relative'>
            <img
                    className=''
                    src={require('../assets/website_image_asian_1.jpg')}
                    
                /> 
                <button className='absolute bottom-0 right-0 bg-white p-1 rounded-tl-xl text-sm'>بین الملل<KeyboardArrowLeftIcon className='text-blue-500'/></button>
            </div>
        </div>
    </div>
    
  )
}

export default CategoryItem