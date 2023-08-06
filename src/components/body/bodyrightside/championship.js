import Image from "next/image";


const Championship = ({sport}) => {
    return (
        <div className='mb-5'>
        <div className='flex gap-2 mb-5'>
            <Image
                src={sport.img}
                alt={sport.title}
            />
            <h1 className='text-[18px] font-extrabold text-white'>{sport.title}</h1>
        </div>
        {
            sport.cham.map(country =>(
                <div key={country.id} className='flex gap-2 py-2 pl-2'>
                    <Image
                        src={country.flag}
                        alt={country.name}
                    />
                    <h1 className='font-extrabold text-white'>{country.name}</h1>
                </div>
            ))
        }
    </div>
    );
};

export default Championship;