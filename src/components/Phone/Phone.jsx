import { Link } from "react-router-dom";
import Mobile from "../Mobile/Mobile";

import PropTypes from 'prop-types';
const Phone = ({phones}) => {
    console.log(phones)
    return (
        <div className="py-5 ">
            <h1 className="text-center text-2xl font-semibold ">Mobile products Available</h1>
            <div className="grid grid-cols-3 gap-5 py-5">
               {
                phones.map(mobile => <Mobile key={mobile.id} mobile={mobile} ></Mobile>)
               }
             
            </div>
            <div  className="text-center py-5">
                <Link>
                <button className="bg-orange-300 p-3 hover:bg-red-500">
                    See More</button></Link>
            </div>

        </div>
    );
};
 
Phone.propTypes = {
    phones:PropTypes.array
    
};
export default Phone;







