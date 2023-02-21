import React from 'react';
import Carousel from 'react-elastic-carousel';
import FeatuedFoodItem from './FeatuedFoodItem';


const Gallery = () => {
    const items  =[
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
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
    <div className='w-full'>
        <div className='w-[70%]'>
            <Carousel itemsToShow={2} breakPoints={breakpoint} className="w-[70%] flex">
            {items.map(item =>
                
                <div key={item.id}>
                    <FeatuedFoodItem/>
                </div>)}
        </Carousel>
        </div>
    </div>
    
    
  );
}
export default Gallery;