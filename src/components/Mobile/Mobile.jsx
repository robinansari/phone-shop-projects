import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Mobile = ({mobile}) => {
    const {id,brand_name,image,price
    } =mobile;
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {brand_name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      With plenty of talk and listen time, voice-activated Siri access, and an
      available wireless charging case.
    </p>
  </div>

  <div className="p-6 pt-0">
   <Link to={`/${id}`}>
   <button
      className="block w-full select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Select
    </button></Link>
  </div>
</div>
        </div>
    );
};

Mobile.propTypes = {
    mobile:PropTypes.object
    
};
export default Mobile;



