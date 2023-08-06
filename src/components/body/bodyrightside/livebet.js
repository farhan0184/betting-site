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
                            <h1 className="text-xl text-white font-extrabold">{name}</h1>
                        </div>
                        <form className='border-[1px] flex items-center bg-[#F0F0F0]' action="">
                            <button className='text-black text-xl px-2'><IoMdSearch /></button>
                            <input type="text" className='bg-[#F0F0F0]' placeholder='Search....' />
                        </form>
                    </div>
                    <div className=''>
                        <div className='px-2 flex bg-bottleGreen w-full justify-between items-center text-white '>
                            <div className='flex gap-3 items-center'>
                                <div className=''>
                                    <FaHome className='text-xl' />
                                </div>
                                <div className='flex py-1 gap-3'>
                                    {
                                        sportsList.map(item => (
                                            <div key={item.id} className='flex gap-[10px] items-center'>
                                                <div className=' w-3 h-3 rounded-full bg-brightGray'>
                                                    <Image
                                                        src={item.img}

                                                        alt={item.name}
                                                    />
                                                </div>
                                                <div className='text-[12px] font-bold'>
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className=' text-xl'>
                                <PiDotsThreeCircleFill />
                            </div>
                        </div>

                        <div className='bg-[#2f6457] px-2 flex  items-center '>
                            <div className='md:w-[30%] w-[35%] flex gap-2 py-1 '>
                                <Image
                                    src={Cricket2}
                                    alt='cricket'
                                />
                                <div>
                                    <h1 className='text-[14px] font-bold text-white'>Bangladesh Premier League</h1>
                                </div>
                            </div>
                            <div className='md:w-[70%] w-[65%] flex gap-5  px-5'>
                                {
                                    winLists.map(item => (
                                        <div className='w-10 h-9 flex items-center justify-center' key={item.id}>
                                            <p className='font-bold text-[12px] text-center  text-white'>{item.tag}</p>
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