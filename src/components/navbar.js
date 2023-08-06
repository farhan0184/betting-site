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
                <div className='md:flex md:justify-between md:mt-0 -mt-7'>
                    <div className={roadRage.className}>
                        <h1 className='md:text-5xl text-3xl text-white '>XYX</h1>
                    </div>

                    <div className={`z-50 flex gap-5  md:flex-row flex-col md:static absolute w-full items-center duration-1000 ease-in pb-5  ${isOpen ? 'block bg-brightGray left-0 ' : '-left-[400px]'}`}>
                        {
                            navLinks.map(item => (
                                <div key={item.id} className='text-white text-xl font-extrabold hover:text-yellow-500'>
                                    <Link href={'#'} className={roboto.className}>{item.title}</Link>
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