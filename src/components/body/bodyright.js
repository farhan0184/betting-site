import Slider1 from '../../../public/assets/images/sliderImage1.png'
import Image from 'next/image';
import { championships, liveSports } from '../data';
import { TiPrinter } from "react-icons/ti";
import YourBets from './bodyrightside/yourbets';
import Championship from './bodyrightside/championship';
import LiveSports from './bodyrightside/livesports';
import LiveBet from './bodyrightside/livebet';
import Carousel from './bodyrightside/carousel';




const BodyRight = ({ roboto }) => {
    

    return (
        <div className={roboto.className}>
            <div className='bg-silver'>
                {/* header section */}
                <div className='grid md:grid-cols-2 grid-cols-1 '>
                    {/* in play section */}
                    <div className=''>
                        {/* header */}
                        <div className='flex items-center justify-center gap-2 bg-jade'>
                            <div className='w-2 h-2 bg-red-600' />
                            <h1 className='text-2xl text-white text-center font-bold'>InPlay</h1>
                        </div>
                        {/* body */}
                        <div className='flex flex-wrap  gap-2 px-3 py-2 bg-silver'>
                            {
                                liveSports.map(item => (
                                    <LiveSports key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                    {/* upcoming sports */}
                    <div className=''>
                        <div className='bg-gravel'>
                            <h1 className='text-2xl text-white text-center font-bold'>Upcoming Sports</h1>
                        </div>
                        <div className=' py-2 relative'>
                            <Image
                                src={Slider1}
                                alt='Slider'
                            />
                            <div className='text-white md:w-[60%] w-[80%] absolute bottom-10 ml-[15%]'>
                                <h1 className='text-[30px] font-bold'>Next Level Game</h1>
                                <p className='text-[14px] font-bold'>Next Level Game</p>
                                <button className='bg-jade px-4 py-2 text-[14px] font-bold'>Take A Ride</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex '>
                    {/* left side section */}
                    <div className='md:w-[72%] md:mx-2'>
                        <LiveBet roboto={roboto} name={'Live Bet'}/>
                        <div className=' mb-2 bg-gravel '>
                            <Carousel name={'Live Casino'}/>
                            <Carousel name={'Slots'}/>
                            <Carousel name={'Instant Games'}/>
                        </div>
                        <LiveBet roboto={roboto} name={'Live Bet'}/>
                    </div>
                    {/* right side */}
                    <div className='md:w-[28%] bg-silver'>
                        {/* Your Bets */}
                        <YourBets/>
                        {/* Top Championship  section*/}
                        <div className='mt-2 bg-gravel'>
                            <div className='bg-jade flex justify-center items-center py-1 gap-2 text-white '>
                                <div>
                                    <TiPrinter/>
                                </div>
                                <h1 className='text-xl font-extrabold'>Top Championship</h1>
                            </div>
                            <div className='mt-3 py-3 mx-3'>
                                {
                                    championships.map(sport =>(
                                       <Championship key={sport.id} sport={sport}/>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyRight;