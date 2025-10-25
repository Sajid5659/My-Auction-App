import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
            className="hero justify-start items-center"
            style={{
                backgroundImage:
                "url(https://i.ibb.co.com/LHJdSx3/Banner-min.jpg)",
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-md p-10">
                <h1 className="mb-5 text-3xl font-bold">Bid on Unique Items from Around the World</h1>
                <p className="mb-5">
                    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
                </p>
                <button className="btn btn-primary">Explore Auctions</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;