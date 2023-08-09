import Image from "next/image";


const LiveSports = ({item}) => {
    return (
        <div  className='relative '>
            <Image
                src={item.img}
                className="2xl:w-[400px] sm:w-full"
                alt={item.title}
            />
            <div className='absolute bottom-3 md:bottom-[2px] lg:bottom-3 w-full'>
                <p className='text-[10px] sm:text-[9px] lg:text-[9px] md:text-[5px] xl:text-[13px] 2xl:text-[15px]  font-[1000] text-center    text-black'>{item.title}</p>
            </div>
        </div>
    );
};

export default LiveSports;