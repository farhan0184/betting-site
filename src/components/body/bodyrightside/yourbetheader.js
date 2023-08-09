import { TiPrinter } from "react-icons/ti";

const YourBetHeader = ({title}) => {
    return (
        <div className='flex gap-2 justify-center items-center py-1 bg-jade hover:bg-bottleGreen'>
            <TiPrinter width={40} />
            <p className='lg:text-xl md:text-[14px] font-extrabold'>{title}</p>
        </div>
    );
};

export default YourBetHeader;