
import { FiSettings } from "react-icons/fi";
import YourBetHeader from "./yourbetheader";

const YourBets = () => {
    return (
        <div className='bg-gravel pb-3' >
            <div className='grid grid-cols-2 text-white'>
                <YourBetHeader title={'Bet Slip'}/>
                <YourBetHeader title={'My Bet'}/>
            </div>
            <div className=''>
                <div className='flex items-center justify-between p-3'>
                    <h1 className='text-xl md:text-[16px] lg:text-xl font-bold text-white'>Your Bets</h1>
                    <div className=' w-6 h-6 rounded-[30px] bg-bottleGreen flex justify-center items-center'>
                        <FiSettings className='text-white' />
                    </div>
                </div>
                <div>
                    <div className='mx-3 my-2 h-[100px] bg-silver flex items-center rounded-xl'>
                        <div className='w-[80%] mx-auto lg:text-xl md:text-[14px] sm:text-[14px] font-extrabold'><h1>Add events to the bet slip or enter
                            a code to load events</h1></div>
                    </div>
                    <hr />
                    {/* one click */}
                    <div className='mx-3 py-2 flex justify-between'>
                        {/* click field and button*/}
                        <div className='flex items-center w-[50%]'>
                            <button className='px-[9px] bg-silver mr-1 rounded-[5px] text-xl'>-</button>
                            <input className='py-[2px]   w-[18%] mr-1' type="number" placeholder='48' />
                            <button className=' px-2 bg-silver rounded-[5px] text-xl'>+</button>
                        </div>
                        <div className='flex items-center gap-1 w-[50%]  justify-end '>
                            <div className=' w-10 md:w-8 bg-silver h-3 rounded-[30px]'>
                                <div className='w-[20%] h-3  rounded-[100%] bg-jade'></div>
                            </div>
                            <h1 className='md:text-[10px] lg:text-[16px] xl:text-2xl text-white font-extrabold'>One Click</h1>
                        </div>
                    </div>
                    <div className='mx-3'>
                        <h1 className='md:text-[16px] lg:text-xl text-xl font-extrabold text-center underline underline-offset-8 text-white mt-8 mb-8'>Save/ Load Images</h1>
                        <input className='w-full bg-silver px-2 placeholder-black rounded-[8px]' type="text" name="" id="" placeholder='Enter code to load events' />
                        <div className='flex gap-5 mt-4 text-[13px] font-extrabold'>
                            <button className='w-full bg-silver rounded-[8px]'>Save</button>
                            <button className='w-full bg-silver rounded-[8px]'>Load</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourBets;