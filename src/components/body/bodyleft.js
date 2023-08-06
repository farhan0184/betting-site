import { sports } from '../data';
import SportsLists from './bodyleftside/sportslists';


const BodyLeft = ({roboto}) => {

    return (
        <div>
            {
                sports.map(item => (
                    <SportsLists key={item.id} item={item} roboto={roboto}/>
                ))
            }
        </div>
    );
};

export default BodyLeft;


