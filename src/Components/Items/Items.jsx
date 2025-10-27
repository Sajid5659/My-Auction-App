import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = ({handleAdd,clickedItems}) => {
    const [items,setItem]=useState([]);

    useEffect(() => {
  fetch("data.json")
    .then((res) => res.json())
    .then(data => setItem(data));
}, []);

    return (
        <div className='bg-white rounded-2xl'>
            <div className='flex gap-4 font-semibold p-3'>
                <p className=' w-1/2'>Items</p>
                <p className='w-[90px]'>Current Bid</p>
                <p className='w-[90px]'>Time Left</p>
                <p className='w-[90px]'>Add Now</p>
            </div>
            {
                items.map((item)=><Item key={item.id} item={item} handleAdd={handleAdd} clickedItems={clickedItems}></Item>)
            }
        </div>
    );
};

export default Items;