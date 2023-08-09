import { upperNavbarLinks } from "./data";


const UpperNavbar = ({setShowModal}) => {
    return (
        <div className='bg-brightGray border-b-[1px] border-white text-white md:flex hidden  justify-around'>
            {
                upperNavbarLinks.map(item=>(
                    <div key={item.id} className={`flex gap-1 items-center px-3 cursor-pointer hover:text-yellow-300 ${item.id === 1 || item.id === 10? "border-none": "border-r-[1px]"}`}>
                        {item.img}
                        <div className="md:text-[7px] lg:text-[10px] xl:text-[14px] 2xl:text-[18px]">
                        {item.id === 7 || item.id === 8 ? <button >{item.title}</button> : <button>{item.title}</button>}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UpperNavbar;


// onClick={()=>setShowModal(true)}