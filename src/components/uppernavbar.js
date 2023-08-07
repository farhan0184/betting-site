import { upperNavbarLinks } from "./data";


const UpperNavbar = () => {
    return (
        <div className='bg-brightGray border-b-[1px] border-white text-white md:flex hidden gap-4 justify-around'>
            {
                upperNavbarLinks.map(item=>(
                    <div key={item.id} className={`flex gap-1 items-center  px-3 cursor-pointer hover:text-yellow-300 ${item.id === 1 || item.id === 10? "border-none": "border-r-[1px]"}`}>
                        {item.img}
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default UpperNavbar;