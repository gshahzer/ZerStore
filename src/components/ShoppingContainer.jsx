import React from 'react'
import { items } from "../Cartitems";
import ShoopingItems from './ShoopingItems';
const ShoppingContainer = () => {
    return (

        <div className='section '>
            <div className='text-2xl font-bold mb-3'>
                Products by Zer Store
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