import { Chart, Heart, Pin } from '@/components/imageImport';
import Image from 'next/image';
import React from 'react';
import MatchScore from './matchscore';

const LiveScore = ({ data }) => {
    return (
        <div className='flex w-full'>
            <div className='md:w-[30%] w-[35%]  px-2 border-r-[1px] border-b-[1px]'>
                <div className='flex gap-3 '>
                    <div className='gap-3'>
                        <Image
                            src={Pin}
                            alt='pin'
                            className='py-[3px]'
                        />
                        <Image
                            src={Heart}
                            alt='pin'
                            className='py-[3px]'
                        />
                        <Image
                            src={Chart}
                            alt='pin'
                            className='py-[3px]'
                        />
                    </div>
                    <div className='w-full py-[3px]'>
                        <MatchScore country={data.country1} />
                        <MatchScore country={data.country2} />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='md:w-[70%] w-[65%]     border-b-[1px] px-5'>
                <div className='flex gap-5 items-center h-full'>
                    {
                        data.list.flatMap((item, idx) => (
                            <div className='w-10 h-6 bg-silver flex items-center justify-center rounded-md'>
                                <p className=' text-[14px]   text-black font-extrabold'>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LiveScore;