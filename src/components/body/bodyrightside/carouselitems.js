import { carouselData } from '@/components/data';
import React from 'react';
import CarouselItem from './carouselitem';

const CarouselItems = () => {
    return (
        <div id='content' className={`flex  gap-2  overflow-x-scroll scrollbar-none `}>
            {
                carouselData.map(item =>
                    <CarouselItem key={item.id} item={item}/>
                )
            }
        </div>
    );
};

export default CarouselItems;