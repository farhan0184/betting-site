import Image from "next/image";
import { BsChevronUp } from "react-icons/bs";
const SportsLists = ({item, roboto}) => {
    return (
        <div className='flex items-center justify-between py-[14px] px-2' key={item.id}>
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
    );
};

export default SportsLists;