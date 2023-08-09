import { Cricket2 } from '@/components/imageImport';
import Image from 'next/image';
import React from 'react';

const MatchScore = ({country}) => {
    return (
        <div className='flex justify-between pb-1'>
            <div className=' flex md:gap-1 lg:gap-2 gap-2 items-center'>
                <div>
                    <Image
                        src={country.img}
                        alt={country.name}
                    />
                </div>
                <div>
                    <h1 className='md:text-[7px] lg:text-[14px] text-[14px]  font-bold text-white'>{country.name}</h1>
                </div>
            </div>
            <div className='flex gap-1 items-center'>
                <Image
                    src={Cricket2}
                    alt='cricket 2'
                    className='w-[15px] h-[15px]'
                />
                <h1 className='md:text-[7px] lg:text-[14px] text-[14px] font-bold text-white'>{country.run}</h1>
            </div>
        </div>
    );
};

export default MatchScore;