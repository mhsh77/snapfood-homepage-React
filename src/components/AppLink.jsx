import React from 'react'

function AppLink() {
  return (
    <div className='flex flex-row bg-gray-200 rounded-br-[100px] mt-44 max-h-[500px] justify-between' dir='rtl'>
        
        <div className='flex flex-col pr-24 justify-center max-w-2xl'>
            <h1 className='font-bold text-gray-800 text-2xl py-7'>اپلیکیشن اسنپ‌فود</h1>
            <h1 className='text-sm text-gray-700 pb-12'>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</h1>
            <h1 className='text-xs'>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</h1>
            <div class="relative pt-6 w-72">
                
                <button type="submit" class="text-white absolute left-3 rounded-lg bottom-2.5 bg-[#ff00a6] py-1 px-3">دریافت لینک</button>
                <input type="search" id="search" class="block w-72 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="*********09"/>
                
            </div>
            
        </div>
        <div>
            <img src={require('../assets/img_app_mockup@2x.png')} alt="" className=' bottom-0 pl-10 w-[600px] mt-[-250px]' />
        </div>
    </div>
  )
}

export default AppLink