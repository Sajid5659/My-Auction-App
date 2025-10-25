import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center p-10 gap-3'>
            <a className="font-bold text-xl text-blue-500">Auction <span className='text-amber-500'>Gallery</span></a>
            <div className='flex gap-3'>
                <p>Bid.</p>
                <p>Win.</p>
                <p>Own.</p>
            </div>
            <div className='flex gap-5 font-semibold'>
                <a href="#banner">Home</a>
                <a href="#auction">Auctions</a>
                <a href="">Categories</a>
                <a href="">How it works</a>
            </div>
            <p>&copy; 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;