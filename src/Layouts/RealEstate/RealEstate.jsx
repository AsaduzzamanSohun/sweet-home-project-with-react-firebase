import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";



const RealEstate = ({ realEstate }) => {

    const { id, image, estate_title, price, status, facilities, location } = realEstate;

    return (
        <div className='md:w-[412px] m-2 md:m-0 border-2 transition-all'>
            <div className='bg-gray-100'>
                <img className='w-full h-64 hover:scale-105 transition-all duration-1000 overflow-hidden p-4' src={image} alt="" />
            </div>

            <div >
                <div className='px-2 py-4 md:p-4'>
                    <h2 className='text-2xl font-semibold my-2'>{estate_title}</h2>
                </div>

                <div className='flex items-center gap-4 md:px-4 font-semibold text-sm'>
                    <FaLocationDot className='text-green-500' />
                    <p>{location}</p>
                </div>

                <div className='flex justify-between items-center md:p-4 p-2 font-medium'>
                    <div className='font-medium'><span>{facilities[3]} & {facilities[4]}</span></div>
                    <div className='text-lg text-green-500'><span>{price}</span></div>
                </div>

            </div>


            <div className='flex justify-between items-center p-2 md:px-4 md:py-2'>

                <p className='text-sky-600 font-medium animate__animated animate__pulse animate__infinite animate__slow'>{status}</p>

                <Link to={`/${id}`}>
                    <button className='bg-[#E5FAFF] h-8 text-black 
                    hover:text-sky-600 hover:font-bold px-4 
                    hover:skeleton transition-all ring-2 ring-sky-400 ring-inset'>
                        <span className='text-sm text-sky-600'>
                            View Property
                        </span>

                    </button>
                </Link>

            </div>

        </div>
    );
};

export default RealEstate;

RealEstate.propTypes = {
    realEstate: PropTypes.object
}