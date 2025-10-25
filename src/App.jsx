
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Items from './Components/Items/Items'
import Navbar from './Components/Navbar/Navbar'
import { CiHeart } from "react-icons/ci";

function App() {
  const [added, setAddItem]= useState([])

  const handleAdd =(item)=>{
    setAddItem([...added,item]);
  }
// console.log(added)
  return (
    <>
      <Navbar></Navbar>
      <section id='banner' className='mx-auto p-2 mb-5'>
        <Banner></Banner>
      </section>
      <section id='auction' className='mx-auto p-2 mb-2 p-10 bg-gray-200'>
        <h1 className='font-bold text-gray-600'>Active Auctions</h1>
        <p className='text-gray-600'>Discover and bid on extraordinary items</p>
        <div className='flex gap-5'>
          <div className='w-2/3 mt-4'>
            <Items handleAdd={handleAdd}></Items>
          </div>
          <div className='mt-4 bg-white'>
            <div className='flex items-center justify-center p-3'>
              <span><CiHeart size={30} /></span>
              <h1 className='text-3xl'>Favourite Items</h1>
            </div>
            {
              added.map((add)=>
              (
                <div className='flex gap-2 border border-black mb-2'>
                  <img  className='w-[80px]' src={add.image} alt="" />
                  <div>
                    <p>{add.description}</p>
                    <div className='flex gap-2'>
                      <p>${add.currentBidPrice}</p>
                      <p>Bids : {add.bidsCount}</p>
                    </div>
                  </div>
                </div>
              )
              )
            }
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
