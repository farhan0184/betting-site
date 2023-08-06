import React from 'react';
import { navLinks } from './data';

const Navbar = ({roboto}) => {
    return (
        <div className='bg-brightGray'>
            <div className='w-[90%] mx-auto md:flex md:justify-between'>
                <div>
                    <h1 className='text-2xl text-white '>XYX</h1>
                </div>

                <div className='flex md:flex-row flex-col  items-center'>
                    {
                        navLinks.map(item=>(
                            <div key={item.id} className='text-white text-[16px] font-bold'>
                                <h1 className={roboto.className}>{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;