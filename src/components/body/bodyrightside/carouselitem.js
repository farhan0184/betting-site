import Image from 'next/image';
import React from 'react';

const CarouselItem = ({item}) => {
    return (
        <div>
            <Image
                src={item.img}
                alt={item.title}
            />
            <p className='md:text-[12px] text-[8px] text-white'>{item.title}</p>
        </div>
    );
};

export default CarouselItem;