import FooterLower from "./footerlower";
import FooterUpper from "./footerupper";


const Footer = ({roboto, roadRage}) => {
    return (
        <div>
            <FooterUpper roboto={roboto} roadRage={roadRage}/>
            <FooterLower roboto={roboto}/>
        </div>
    );
};

export default Footer;