import Image from "next/image";
import FooterLogo from '../../../public/assets/images/footerlogo.svg'

export default function FooterLower({roboto}) {
    return (
        <div className="bg-jade py-3">
            <div className="md:w-[70%] w-[90%] mx-auto flex items-center md:flex-row flex-col">
                <div>
                    <Image
                        src={FooterLogo}
                        width={104}
                        height={104}
                        alt="footer logo"
                    />
                </div>
                <div className="text-white md:w-[85%] w-full text-center">
                    <p className={roboto.className}>The contents of the website is owned and operated by ACOM Latin America N.V. as a License Holder
                        (Curacao license No. 1668/JAZ). Exidna Enterprises LTD (НЕ435756) and Kassifoni Enterprises LTD
                        НЕ435760)provide processing services on the website as Billing Agents. All rights reserved and protected by law</p>
                </div>
            </div>
        </div>
    )
}