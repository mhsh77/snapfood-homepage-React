import React from 'react'

import CategoryItem from './CategoryItem';
function Category() {
  return (
    <div dir="rtl">
        <h1 className='py-5 font-bold text-gray-600'>دسته بندی ها</h1>
        <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 '>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </div>
    </div>
  )
}

export default Category