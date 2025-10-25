import React from 'react';
import { CiHeart } from "react-icons/ci";
const Item = ({item,handleAdd}) => {
    console.log(item.id)
    return (
        <div className='flex gap-4 border border-black mb-3'>
            <div className='flex gap-3 w-1/2 h-[60px] border-r border-r-black'>
                <img className='w-[80px] border-r border-r-black' src={item.image} alt="" />
                <p className=' font-semibold text-sm'>{item.description}</p>
            </div>
            <p className='flex justify-center items-center w-[90px] border-r border-r-black'>{item.currentBidPrice}</p>
            <p className='flex justify-center items-center w-[90px] border-r border-r-black'>{item.timeLeft}</p>
        <button onClick={()=>handleAdd(item)} className='flex justify-center items-center w-[90px]'><CiHeart size={20} /></button>
        </div>
    );
};

export default Item;