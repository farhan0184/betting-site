'use client'
import { useState } from 'react';
import { navLinks } from './data';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';


const Navbar = ({ roboto, roadRage }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-brightGray '>
            <div className='w-[90%] mx-auto '>
                <div className='flex justify-end md:hidden md:mt-0  pt-5'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white '>
                        <FaBars />
                    </button>
                </div>
                <div className='md:flex md:justify-between  md:mt-0 -mt-7'>
                    <div className={roadRage.className}>
                        <h1 className='md:text-5xl text-3xl text-white '>XYX</h1>
                    </div>

                    <div className={`z-50 flex gap-5  md:flex-row flex-col  md:static absolute  items-center duration-1000 ease-in md:pb-0 pb-5   ${isOpen ? 'block bg-brightGray left-0 w-full' : 'md:w-[55%] w-full -left-[400px]'}`}>
                        {
                            navLinks.map(item => (
                                <div key={item.id} className='text-white  hover:text-yellow-500'>
                                    <Link href={'#'} className={roboto.className}><p className='text-xl  font-extrabold'>{item.title}</p></Link>
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