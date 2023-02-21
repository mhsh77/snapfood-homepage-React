import React from 'react'
import Carousel from 'react-elastic-carousel';
import FeatuedFoodItem from './FeatuedFoodItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
function FeaturedFoods() {
    const items  =[
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
    ]
    const breakpoint = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 4 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
  return (
    <div className='p-5 mt-32 bg-gradient-to-r from-[rgb(252,95,153)] to-[#e12492] rounded-lg rounded-br-[120px] flex md:flex-row flex-col-reverse justify-between'>
        
        <div className='md:w-[80%] md:pl-28 pl-0'>
            <Carousel itemsToShow={2} breakPoints={breakpoint} className="md:w-[80%] flex items-center">
            {items.map(item =>
                
                <div key={item.id}>
                    <FeatuedFoodItem/>
                </div>)}
        </Carousel>
        </div>
        <div className='flex flex-col items-center md:w-[20%] pb-4 md:pb-0 text-white'>
            <h1 className='font-bold text-2xl'>14:29<AccessTimeIcon/></h1>
            <img src={require('../assets/1_jek_non_active.png')} alt=""  className='rounded-full w-40 pt-8'/>
            <h1 className='text-3xl'>فوت پارتی<AutoAwesomeIcon/></h1>
            <h1>تخفیفات لحظه ای ویژه شما</h1>
            <button className='bg-white text-black mt-5 px-2 py-1 rounded-full'>مشاهده همه</button>
        </div>
    </div>
  )
}

export default FeaturedFoods