import Image from "next/image";
import { BsChevronUp } from "react-icons/bs";
const SportsLists = ({item, roboto}) => {
    return (
        <div className='flex items-center justify-between lg:py-[14px] md:py-[8px] md:px-[2px] lg:px-2' key={item.id}>
        <div className='flex lg:gap-2 md:gap-1  items-center'>
            <div className='bg-brightGray w-4 h-4 flex justify-center items-center rounded-[30px]'>
                <Image
                    src={item.img}
                    className="md:w-13 xl:w-full"
                    alt={item.name}
                />

            </div>
            <div className={roboto.className} >
            <p className='text-white font-semibold xl:text-[16px] md:text-[10px]'>{item.name}</p>
            </div>
        </div>


        <div className='bg-white  md:p-[1px] lg:p-1 rounded-[30px]'>
            <BsChevronUp className="text-[10px]" />
        </div>

    </div>
    );
};

export default SportsLists;