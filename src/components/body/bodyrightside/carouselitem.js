import Image from 'next/image';
import React from 'react';

const CarouselItem = ({item}) => {
    return (
        <div>
            <Image
                src={item.img}
                width={1000}
                alt={item.title}
            />
            <p className='md:text-[8px] text-[5px] text-white'>{item.title}</p>
        </div>
    );
};

export default CarouselItem;