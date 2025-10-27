
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Items from './Components/Items/Items'
import Navbar from './Components/Navbar/Navbar'
import { CiHeart } from "react-icons/ci";

function App() {
  const [added, setAddItem]= useState([]);
  const [clickedItems, setClickedItems] = useState([]);
  const [totalBid, setBid]=useState(0);


  const handleAdd =(item)=>{
    if (!clickedItems.includes(item.id)) { 
      setClickedItems([...clickedItems, item.id]); 
      setAddItem([...added, item]); 
      const total = totalBid + item.currentBidPrice;
      setBid(total);
    }
  };

  const handleRemove = (id) => {
    const removedItem = added.find((item) => item.id === id);
    if (!removedItem) return;

    
    const updatedAdded = added.filter((item) => item.id !== id);
    setAddItem(updatedAdded);

    const updatedClicked = clickedItems.filter((itemId) => itemId !== id);
    setClickedItems(updatedClicked);

    
    setBid(totalBid - removedItem.currentBidPrice);
  };

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
            <Items handleAdd={handleAdd} clickedItems={clickedItems}></Items>
          </div>
          <div className='mt-4 bg-white rounded-2xl'>
            <div className='flex items-center justify-center p-3 border-b border-b-gray-300'>
              <span><CiHeart size={30} /></span>
              <h1 className=' font-bold text-3xl '>Favourite Items</h1>
            </div>
            {
              added.map((add)=>
              (
                <div key={add.id} className='flex gap-2 border border-black mb-2'>
                  <img  className='w-[80px]' src={add.image} alt="" />
                  <div>
                    <p>{add.description}</p>
                    <div className='flex gap-10'>
                      <p> ${add.currentBidPrice}</p>
                      <p>Bids : {add.bidsCount}</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <button onClick={() => handleRemove(add.id)}
                    className='btn text-red-500 hover:bg-red-600 hover:text-white font-bold text-sm px-2'>x</button>
                  </div>
                </div>
              )
              )
            }
            <h1 className='font-bold text-3xl text-center mt-10'>Total Bid : ${totalBid}</h1>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
