import Slider1 from '../../../public/assets/images/sliderImage1.png'
import Image from 'next/image';
import { championships, liveSports } from '../data';
import { TiPrinter } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";




const BodyRight = ({ roboto }) => {

    return (
        <div className={roboto.className}>
            <div className='bg-silver'>
                {/* header section */}
                <div className='grid md:grid-cols-2 grid-cols-1 '>
                    {/* in play section */}
                    <div className=''>
                        {/* header */}
                        <div className='flex items-center justify-center gap-1 bg-jade'>
                            <div className='w-2 h-2 bg-red-600' />
                            <h1 className='text-2xl text-white text-center font-bold'>InPlay</h1>
                        </div>
                        {/* body */}
                        <div className='flex flex-wrap gap-[6px] px-[6px] py-2 bg-silver'>

                            {
                                liveSports.map(item => (
                                    <div key={item.id} className='relative '>
                                        <Image
                                            src={item.img}
                                            width={105}
                                            alt={item.title}
                                        />
                                        <div className='absolute bottom-3 w-full'>
                                            <p className='text-[12px] font-[1000] text-center    text-black'>{item.title}</p>
                                        </div>
                                    </div>
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
                    <div className='md:w-[70%] bg-orange-400 mx-2'>
                        <h1>hello</h1>
                    </div>
                    {/* right side */}
                    <div className='md:w-[30%] bg-silver'>
                        {/* Your Bets */}
                        <div className='bg-gravel pb-3' >
                            <div className='grid grid-cols-2 text-white'>
                                <div className='flex gap-2 justify-center items-center bg-jade'>
                                    <TiPrinter width={40} />
                                    <p className='text-xl font-extrabold'>Bet Slip</p>
                                </div>
                                <div className='flex gap-2 justify-center items-center bg-bottleGreen'>
                                    <TiPrinter width={40} />
                                    <p className='text-xl font-extrabold'>My Bet</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-between p-3'>
                                    <h1 className='text-xl font-bold text-white'>Your Bets</h1>
                                    <div className=' w-6 h-6 rounded-[30px] bg-bottleGreen flex justify-center items-center'>
                                        <FiSettings className='text-white' />
                                    </div>
                                </div>
                                <div>
                                    <div className='mx-3 my-2 h-[100px] bg-silver flex items-center rounded-xl'>
                                        <div className='w-[80%] mx-auto text-xl font-extrabold'><h1>Add events to the bet slip or enter
                                            a code to load events</h1></div>
                                    </div>
                                    <hr />
                                    {/* one click */}
                                    <div className='mx-3 py-2 flex justify-between'>
                                        {/* click field and button*/}
                                        <div className='flex items-center w-[50%]'>
                                            <button className=' px-[9px] bg-silver mr-1 rounded-[5px] text-xl'>-</button>
                                            <input className='py-[2px]   w-[18%] mr-1' type="number" placeholder='48' />
                                            <button className=' px-2 bg-silver rounded-[5px] text-xl'>+</button>
                                        </div>
                                        <div className='flex items-center gap-1 w-[50%]  justify-end '>
                                            <div className=' w-10 bg-silver h-3 rounded-[30px]'>
                                                <div className='w-[20%] h-3  rounded-[100%] bg-jade'></div>
                                            </div>
                                            <h1 className='text-xl text-white font-extrabold'>One Click</h1>
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <h1 className='text-xl font-extrabold text-center underline underline-offset-8 text-white mt-8 mb-8'>Save/ Load Images</h1>
                                        <input className='w-full bg-silver px-2 placeholder-black rounded-[8px]' type="text" name="" id="" placeholder='Enter code to load events' />
                                        <div className='flex gap-5 mt-4 text-[13px] font-extrabold'>
                                            <button className='w-full bg-silver rounded-[8px]'>Save</button>
                                            <button className='w-full bg-silver rounded-[8px]'>Load</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Top Championship  section*/}
                        <div className='mt-2 bg-gravel'>
                            <div className='bg-jade flex justify-center items-center gap-2 text-white '>
                                <div>
                                    <TiPrinter/>
                                </div>
                                <h1 className='text-xl font-extrabold'>Top Championship</h1>
                            </div>
                            <div className='mt-3 py-3 mx-3'>
                                {
                                    championships.map(sport =>(
                                        <div key={sport.id} className='mb-4'>
                                            <div className='flex gap-2 mb-2'>
                                                <Image
                                                    src={sport.img}
                                                    alt={sport.title}
                                                />
                                                <h1 className='text-[18px] font-extrabold text-white'>{sport.title}</h1>
                                            </div>
                                            {
                                                sport.cham.map(country =>(
                                                    <div key={country.id} className='flex gap-2 pl-2'>
                                                        <Image
                                                            src={country.flag}
                                                            alt={country.name}
                                                        />
                                                        <h1 className='font-extrabold text-white'>{country.name}</h1>
                                                    </div>
                                                ))
                                            }
                                        </div>
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