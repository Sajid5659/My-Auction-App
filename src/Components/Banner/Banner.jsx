import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
            className="hero justify-start items-center min-h-screen"
            style={{
                backgroundImage:
                "url(https://i.ibb.co.com/LHJdSx3/Banner-min.jpg)",
            }}
            >
            <div className="hero "></div>
            <div className="hero-content  text-neutral-content max-w-lg">
                <div className=" p-10">
                <h1 className="mb-5 text-4xl font-bold">Bid on Unique Items from Around the World</h1>
                <p className="mb-5 text-xl">
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