import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const RealEstate = ({ realEstate }) => {

    const { id, image, estate_title, segment_name, description, price, status, area, location } = realEstate;

    return (
        <div className='md:w-[412px] m-2 md:m-0 bg-slate-200 border-2 transition-all'>
            <div>
                <img className='w-full h-64 hover:scale-105 transition-all duration-1000 overflow-hidden p-4' src={image} alt="" />
            </div>

            <div className='bg-slate-50'>
                <div className='px-2 py-4 md:p-4'>
                    <h3 className='text-sky-500 font-semibold text-xl'>{price}</h3>
                    <h2 className='text-2xl font-semibold my-2'>{estate_title}</h2>

                    <p className='font-thin'>{description}</p>

                </div>

                <div className='flex justify-between items-center border-y border-zinc-800 md:p-4 p-2 font-medium'>
                    <div><span>{segment_name}</span></div>
                    <div><span>{status}</span></div>
                    <div><span>{area}</span></div>
                </div>

            </div>


            <div className='flex justify-between items-center p-2 md:px-4 md:py-2'>
                <span>{location}</span>
                <Link to={`/${id}`}>
                    <button className='bg-green-300 text-black 
                    hover:text-blue-700 hover:font-bold px-4 py-1 
                    animate__animated animate__pulse animate__infinite animate__slow 
                    hover:skeleton transition-all'>
                        <span className='text-xs'>
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