

'use client'
import OfferCard from '@/components/common/OfferCard';
import DomainCard from '@/components/common/DomainCard';
import React, { useState, useEffect } from 'react';

function Page() {
    const [showMore, setShowMore] = useState(false); // State to track whether to show more cards
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Total number of offers and number of offers per page
    const totalOffers = 12; // Assuming you have a total of 12 offers
    const offersPerPageMobile = 3; // Number of offers per page for mobile view
    const offersPerPageDesktop = 6; // Number of offers per page for desktop view

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to handle click on show more button
    const handleToggle = () => {
        setShowMore(!showMore);
    };

    // Determine the number of offers per page based on the screen size
    const offersPerPage = windowWidth < 640 ? offersPerPageMobile : offersPerPageDesktop;

    return (
        <div>
            {/* content-block */}
            <div className='mt-16 lg:mt-32'>
                <div className='flex flex-col items-start w-full lg:w-3/4 gap-4 lg:gap-8 mx-4 lg:mx-8'>
                    <h2 className='w-full lg:w-3/5 text-4xl lg:text-6xl font-medium leading-tight tracking-tighter'>Services</h2>
                    <p className="w-full lg:w-4/5 text-xl lg:text-2xl font-normal leading-tight tracking-tighter">Digital solutions that help businesses scale up.</p>
                </div>
            </div>
            {/* content-box end */}
            <div className='mt-[80px] w-full ml-[48px]  '> 
                <div className='flex'>   
                    <div className='w-1/3 ' >
                        <h2  className="text-Text-Dark-Primary  text-4xl font-normal leading-16 tracking-tight">What we offer</h2>
                    </div>
                    <div className='flex flex-wrap ml-[24px] mr-[48px]'>
                        {/* Render only the offers based on the number to show */}
                        {Array.from({ length: showMore ? totalOffers : offersPerPage }).map((_, index) => (
                            <OfferCard key={index} />
                        ))}
                    </div>
                </div>
                {/* Show more/less button */}
                {(windowWidth < 640 || showMore) && (
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-500 text-black px-4 py-2" onClick={handleToggle}>
                            {showMore ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                )}
            </div>
            {/* Domain card */}
            <div className='p-[48px] flex flex-col gap-[56px]'>
                <div>
                    <h2 className="text-center text-[32px] font-normal  dark:text-black">Domains we’ve worked for</h2>
                </div>
                <div className='flex flex-row flex-wrap'>
                   <DomainCard/>
                   <DomainCard/>
                   <DomainCard/>
                   <DomainCard/>
                   <DomainCard/>
                      
                </div>
            </div>
        </div>
    );
}

export default Page;

