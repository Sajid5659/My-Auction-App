import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between">
                <div className="flex">
                    <a className="font-bold text-xl text-blue-500">Auction <span className='text-amber-500'>Gallery</span></a>
                </div>
                <div className='mx-5 font-bold'>
                    <a className='mx-3' href="#banner">Home</a>
                    <a className='mx-3' href="#auction">Auctions</a>
                    <a className='mx-3' href="">Categories</a>
                    <a className='mx-3' href="">How it works</a>
                </div>
                <div className="w-10 b">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className='rounded-3xl' />
                        </div>
            </div>
        </div>
    );
};

export default Navbar;