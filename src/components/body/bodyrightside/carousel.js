'use client'
import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import CarouselItems from './carouselitems';
const Carousel = ({ name }) => {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 300;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 300;
    }
    return (
        <div className='bg-jade mb-4'>
            <div className='text-[14px] font-bold text-white'>
                <h1>{name}</h1>
            </div>
            {/* carousel */}
            <div className='relative'>
                <div onClick={scrollLeft} className='absolute top-[43%] md:-left-2 left-0'>
                    <BsArrowLeftCircleFill className="h-4 w-4 text-white hover:text-yellow-300" />
                </div>
                <CarouselItems />
                <div onClick={scrollRight} className='absolute top-[43%] md:-right-2 right-0'>
                    <BsArrowRightCircleFill className="h-4 w-4 text-white hover:text-yellow-300" />
                </div>
            </div>


        </div>
    );
};

export default Carousel;