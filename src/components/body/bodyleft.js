import Image from 'next/image';
import Cricket from '../../../public/assets/images/cricket.png';
import Football from '../../../public/assets/images/floorball.png';
import Volleyball from '../../../public/assets/images/vollyball.png';
import Tennis from '../../../public/assets/images/tennis.png';
import FloorBall from '../../../public/assets/images/floorball.png';
import Baseball from '../../../public/assets/images/baseball.png';
import Rugby from '../../../public/assets/images/rugbeball.png';
import TableTennis from '../../../public/assets/images/tableTannis.png';
import MobileApp from '../../../public/assets/images/mboileApp.png';
import BasketBall from '../../../public/assets/images/basketBall.png';
import { BsChevronUp } from "react-icons/bs";
import { sports } from '../data';


const BodyLeft = ({roboto}) => {

    return (
        <div>
            {
                sports.map(item => (
                    <div className='flex items-center justify-between py-2 px-2' key={item.id}>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-brightGray w-4 h-4 flex justify-center items-center rounded-[30px]'>
                                <Image
                                    src={item.img}
                                    width={13}
                                    alt={item.name}
                                />

                            </div>
                            <div className={roboto.className} >
                            <p className='text-white font-semibold text-[14px]'>{item.name}</p>
                            </div>
                        </div>


                        <div className='bg-white p-[2px] rounded-[30px]'>
                            <BsChevronUp />
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default BodyLeft;


