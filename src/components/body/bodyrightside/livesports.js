import Image from "next/image";


const LiveSports = ({item}) => {
    return (
        <div  className='relative '>
            <Image
                src={item.img}
                width={105}
                alt={item.title}
            />
            <div className='absolute bottom-3 w-full'>
                <p className='text-[12px] font-[1000] text-center    text-black'>{item.title}</p>
            </div>
        </div>
    );
};

export default LiveSports;