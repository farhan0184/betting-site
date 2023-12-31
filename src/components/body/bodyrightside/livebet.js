import { IoMdSearch } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { PiDotsThreeCircleFill } from 'react-icons/pi';
import { liveScores, sportsList, winLists } from '@/components/data';
import Image from 'next/image';
import { Chart, Cricket2, Heart, Pin } from '@/components/imageImport';
import MatchScore from './matchscore';
import LiveScore from './livescore';

const LiveBet = ({ name, roboto }) => {
    return (
        <div className='overflow-x-scroll scrollbar-none mb-2'>
            <div className={roboto.className}>
                <div className='  md:w-full w-[1000px]'>
                    <div className='flex justify-between bg-jade py-1 px-2  '>
                        <div>
                            <h1 className="md:text-[16px] lg:text-xl text-xl text-white font-extrabold">{name}</h1>
                        </div>
                        <form className='border-[1px] flex items-center bg-[#F0F0F0]' action="">
                            <button className='text-black md:text-[16px] lg:text-xl text-xl px-2'><IoMdSearch /></button>
                            <input type="text" className='bg-[#F0F0F0]' placeholder='Search....' />
                        </form>
                    </div>
                    <div className=''>
                        <div className='px-2 flex bg-bottleGreen w-full justify-between items-center text-white '>
                            <div className='flex gap-2 items-center'>
                                <div className=''>
                                    <FaHome className='md:text-[16px] lg:text-xl text-xl' />
                                </div>
                                <div className='flex py-1 gap-2  sm:gap-2 lg:gap-3 2xl:gap-5'>
                                    {
                                        sportsList.map(item => (
                                            <div key={item.id} className='flex xl:gap-[12px] md:gap-[3px] gap-[10px] items-center'>
                                                <div className=' xl:w-3 xl:h-3 md:w-2 md:h-2  h-3 w-3 rounded-full bg-brightGray'>
                                                    <Image
                                                        src={item.img}

                                                        alt={item.name}
                                                    />
                                                </div>
                                                <div className='2xl:text-[12px] lg:text-[8px] md:text-[6px]  sm:text-[6px] text-[16px] font-bold'>
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='md:text-[16px] lg:text-xl text-xl'>
                                <PiDotsThreeCircleFill />
                            </div>
                        </div>

                        <div className='bg-[#2f6457] px-2 flex  items-center '>
                            <div className='md:w-[30%] w-[35%] lg:w-[40%] flex gap-2 py-[3px] '>
                                <Image
                                    src={Cricket2}

                                    alt='cricket'
                                />
                                <div className=' w-full '>
                                    <h1 className='md:text-[9px] lg:text-[14px] xl:text-xl text-xl font-bold text-white'>Bangladesh Premier League</h1>
                                </div>
                            </div>
                            <div className='md:w-[70%] w-[65%] lg:w-[60%] flex gap-5  px-5'>
                                {
                                    winLists.map(item => (
                                        <div className='w-10 h-9 flex items-center justify-center' key={item.id}>
                                            <p className='font-bold md:text-[10px] lg:text-3 text-3 text-center  text-white'>{item.tag}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='bg-gravel px-2'>
                            {
                                liveScores.map(data => (
                                    <LiveScore key={data.id} data={data}/>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default LiveBet;