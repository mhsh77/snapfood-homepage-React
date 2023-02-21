import React from 'react'
import Resturant from './Resturant'
import Carousel from 'react-elastic-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function Resturants() {
    const items  =[
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 6, title: 'item #1'},
        {id: 7, title: 'item #2'},
        {id: 8, title: 'item #3'},
        {id: 9, title: 'item #4'},
        {id: 10, title: 'item #5'}
    ]
    const breakpoint = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
  return (
    <div dir='rtl' className='flex flex-col mt-24 overflow-hidden'>
        <div className='flex flex-row justify-between'>
            <h1 className='font-bold text-gray-800 text-2xl'>
            یک تجربه ی جدید
            </h1>
            <button className='text-green-500 text-lg font-bold'>مشاهده همه<ChevronLeftIcon/></button>
        </div>
        
        
        <Carousel itemsToShow={2} breakPoints={breakpoint} className="mr-[-100px]">
            {items.map(item =>
                
                <div key={item.id}>
                    <Resturant/>
                </div>
            )}
        </Carousel>
        <div className='flex flex-row justify-between'>
            <h1 className='font-bold text-gray-800 text-2xl'>
            برتررین ها
            </h1>
            <button className='text-green-500 text-lg font-bold'>مشاهده همه<ChevronLeftIcon/></button>
        </div>
        
        
        <Carousel itemsToShow={2} breakPoints={breakpoint} className="mr-[-100px]">
            {items.map(item =>
                
                <div key={item.id}>
                    <Resturant/>
                </div>
            )}
        </Carousel>
        <div className='flex flex-row justify-between'>
            <h1 className='font-bold text-gray-800 text-2xl'>
            یک تجربه ی جدید
            </h1>
            <button className='text-green-500 text-lg font-bold'>مشاهده همه<ChevronLeftIcon/></button>
        </div>
        
        
        <Carousel itemsToShow={2} breakPoints={breakpoint} className="mr-[-100px]">
            {items.map(item =>
                
                <div key={item.id}>
                    <Resturant/>
                </div>
            )}
        </Carousel>
    </div>
  )
}

export default Resturants