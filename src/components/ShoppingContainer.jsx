import React from 'react'
import { items } from "../Cartitems";
import ShoopingItems from './ShoopingItems';
const ShoppingContainer = () => {
    return (

        <div className='section '>
            <div className='flex justify-between'>
            <div className='text-2xl font-bold mb-3 text-gray-900'>
                Products by Zer-Store
            </div>
            <div className="relative ">
            <input
              type="search"
              id="default-search"
              className="block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-800 focus:border-gray-900 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-900"
              placeholder="Search for the products"
              required
            />
            <button type="submit" className="text-white absolute right-2 bottom-2.5 bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-800">Search</button>
          </div>
          </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {items.map((item) => {
                    return <ShoopingItems key={item.id} item={item} />;
                })}
            </div>
        </div>
    )
}

export default ShoppingContainer