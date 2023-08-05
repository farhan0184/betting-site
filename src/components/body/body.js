import BodyLeft from "./bodyleft";
import BodyRight from "./bodyright";


const Body = ({ roboto }) => {
    return (
        <div className="md:flex">
            <div className="md:w-[12%] md:block hidden bg-gravel">
                <BodyLeft roboto={roboto} />
            </div>
            <div className="md:w-[88%] w-full">
                <BodyRight roboto={roboto}/>
            </div>
        </div>
    );
};

export default Body;