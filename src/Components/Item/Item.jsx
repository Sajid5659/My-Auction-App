import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Item = ({item,handleAdd,clickedItems}) => {
    console.log(item.id)
    return (
        <div className='flex gap-4 border border-gray-300  mb-3'>
            <div className='flex gap-3 w-1/2 h-[60px] border-r-black'>
                <img className='w-[80px] border-r border-r-gray-300' src={item.image} alt="" />
                <p className=' font-semibold text-sm'>{item.description}</p>
            </div>
            <p className='flex justify-center items-center w-[90px] border-r border-r-gray-300'> ${item.currentBidPrice}</p>
            <p className='flex justify-center items-center w-[90px] border-r border-r-gray-300'>{item.timeLeft}</p>
            <button
          key={item.id}
          onClick={() => handleAdd(item)}
          disabled={clickedItems.includes(item.id)}
          className={`flex justify-center items-center w-[90px] h-[40px] rounded-md ${
            clickedItems.includes(item.id)
              ? "cursor-not-allowed"
              : "color-pink"
          }`}
        >
         {clickedItems.includes(item.id) ? (
                <FaHeart size={24} color="pink" />
            ) : (
                <CiHeart size={24} color="gray" /> 
            )}
        </button>
        </div>
    );
};

export default Item;