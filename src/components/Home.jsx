import React from 'react'
import AppLink from './AppLink'
import Category from './Category'
import FeaturedFoods from './FeaturedFoods'
import Header from './Header'
import Resturants from './Resturants'

function Home() {
  return (
    <div className='flex flex-col items-center w-screen'>
       <Header/> 
        <div className='container mx-auto mt-[200px]'>
            <Category/>
            <FeaturedFoods/>
            <Resturants/>
            <AppLink/>
        </div>
    </div>
  )
}

export default Home