'use client'
import { useState } from 'react';
import { navLinks } from './data';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';


const Navbar = ({ roboto, roadRage }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-brightGray '>
            <div className='w-[90%] md:w-[95%]  mx-auto md:py-0 py-3'>
                <div className='flex justify-end sm:hidden sm:mt-0  '>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white '>
                        <FaBars />
                    </button>
                </div>
                <div className='sm:flex sm:justify-between  sm:mt-0 -mt-5'>
                    <div className={roadRage.className}>
                        <h1 className='md:text-3xl sm:text-3xl lg:text-2xl text-white '>XYX</h1>
                    </div>

                    <div className={`z-50 flex  sm:justify-between  sm:flex-row flex-col  sm:static absolute  items-center duration-1000 ease-in sm:pb-0 pb-5    ${isOpen ? 'block bg-brightGray left-0 w-full' : ' md:w-1/2 sm:w-[70%]  w-full -left-[450px]'}`}>
                        {
                            navLinks.map(item => (
                                <div key={item.id} className='text-white  hover:text-yellow-500'>
                                    <Link href={'#'} className={roboto.className}><p className='sm:text-[10px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-xl  font-extrabold'>{item.title}</p></Link>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;