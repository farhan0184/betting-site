
import Image from 'next/image';
import Laliga from '../../../public/assets/images/laliga.png';
import Visa from '../../../public/assets/images/visa.png';
import Mastercard from '../../../public/assets/images/mastercard.png';
import { FiPhoneCall } from 'react-icons/fi';

const FooterUpper = ({ roboto, roadRage }) => {
    const links =[
        {
            id: "a",
            title: 'XYZ',
            link: [
                {
                    id:1,
                    lname:"Terms and Conditions"
                },
                {
                    id:2,
                    lname:"Become an agent"
                },
                {
                    id:3,
                    lname:"Blog"
                },
                {
                    id:4,
                    lname:"Privacy Policy"
                },
                {
                    id:5,
                    lname:"Cookie Policy"
                },
                {
                    id:6,
                    lname:"AML\ KYC Policy"
                },
                {
                    id:7,
                    lname:"Contact"
                },
            ]
        },
        {
            id: "b",
            title: 'Betting',
            link: [{
                id:1,
                lname:"Terms and Conditions"
            },
            {
                id:2,
                lname:"Become an agent"
            },
            {
                id:3,
                lname:"Blog"
            },
            {
                id:4,
                lname:"Privacy Policy"
            },
            {
                id:5,
                lname:"Cookie Policy"
            },
            {
                id:6,
                lname:"AML\ KYC Policy"
            },
            {
                id:7,
                lname:"Contact"
            },]
        },
        {
            id: "c",
            title: 'Games',
            link: [{
                id:1,
                lname:"Terms and Conditions"
            },
            {
                id:2,
                lname:"Become an agent"
            },
            {
                id:3,
                lname:"Blog"
            },
            {
                id:4,
                lname:"Privacy Policy"
            },
            {
                id:5,
                lname:"Cookie Policy"
            },
            {
                id:6,
                lname:"AML\ KYC Policy"
            },
            {
                id:7,
                lname:"Contact"
            },]
        },
    ]
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 bg-jade text-white">
            <div className="bg-bottleGreen flex md:justify-end justify-center">
                <div className='flex md:gap-5 gap-2 md:w-[80%] w-[90%] pt-5 md:mb-0 mb-5'>
                {
                    links.map(item=>(
                        <div key={item}>
                            <div className={roadRage.className}>
                            <h1  className='text-5xl underline decoration-[#00A3FF]'>{item.title}</h1>
                            </div>
                            <div className={roboto.className}>
                                {
                                    item.link.map((data)=>
                                    
                                    (
                                        <h3 key={data.id} className='font-bold'>{data.lname}</h3>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="bg-bottleGreen pt-3 flex flex-col gap-20 ">
                <div className='w-[60%] mx-auto flex flex-col items-center '>
                    <div className="w-14  h-14 border-2 rounded-[30px] relative">
                        <h1 className="text-3xl p-4  absolute -bottom-2 -left-4">18+</h1>
                    </div>
                    <div className='text-5xl text-center'>
                        <div className={roadRage.className}>
                            <h1>Support</h1>
                            <span className='flex gap-2'>
                                <FiPhoneCall />
                                <h1>01625001600</h1>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex  md:w-[60%] w-[90%] mx-auto mb-3 '>
                    <div className='md:text-5xl text-3xl flex justify-center border-r-4 pr-3 border-jade'>
                        <h1 className={roadRage.className}>PARTNERS</h1>
                    </div>
                    <div className='flex h-[40px] mt-1 justify-center gap-4 w-full '>

                        <Image
                            src={Laliga}
                            width={30}
                            alt='laliga'
                        />
                        <Image
                            src={Visa}
                            width={70}
                            alt='visa'
                        />
                        <Image
                            src={Mastercard}
                            width={70}
                            alt='mastercard'
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterUpper;