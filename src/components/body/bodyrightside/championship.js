import Image from "next/image";


const Championship = ({sport}) => {
    return (
        <div className='mb-5'>
        <div className='flex gap-2 mb-5'>
            <Image
                src={sport.img}
                alt={sport.title}
                className="w-5"
            />
            <h1 className='lg:text-[18px] md:text-[12px] text-[18px] font-extrabold text-white'>{sport.title}</h1>
        </div>
        {
            sport.cham.map(country =>(
                <div key={country.id} className='flex gap-2 py-2 items-center md:pl-0 lg:pl-2 lg-2'>
                    <Image
                        src={country.flag}
                        alt={country.name}
                    />
                    <h1 className='md:text-[8px] lg:text-[10px] xl:text-[15px] 2xl:text-[18px] font-extrabold text-white'>{country.name}</h1>
                </div>
            ))
        }
    </div>
    );
};

export default Championship;