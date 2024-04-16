import { useLoaderData, useParams } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import 'animate.css';
import { FcOk } from "react-icons/fc";



const PropertyDetail = () => {

    const { id } = useParams()
    const properties = useLoaderData();
    const idInt = parseInt(id);
    const property = properties.find(property => property.id === idInt);

    const { image, estate_title, segment_name, description, price, status, area, location, facilities, details } = property;



    console.log(id);

    return (
        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-80px-265px)] mt-6">


            <div className="grid md:grid-cols-2 lg:px-44 p-4 md:space-x-12">

                <div className='bg-slate-200 border-2 transition-all flex flex-col justify-between h-full'>
                    <div>
                        <img className='w-full hover:scale-105 transition-all duration-1000 overflow-hidden p-4' src={image} alt="" />
                    </div>

                    <div className='bg-slate-50 '>
                        <div className='py-4 px-2'>

                            <p className='font-medium'>{description}</p>

                        </div>
                    </div>

                </div>

                <div className="mt-6 md:mt-0">
                    <h1 className="text-4xl">{estate_title}</h1>
                    <h3 className="mt-2 font-light">{location}</h3>
                    <p className="mt-4 text-justify">{details}</p>

                    <div className="flex justify-between px-8 py-4">
                        <div>
                            <ul>
                                {
                                    facilities.map((facility, idx) => <li
                                        key={idx}
                                        className="flex items-center gap-2"
                                    >
                                        <FcOk className="text-xs"></FcOk>
                                        {facility}
                                    </li>)
                                }
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">{segment_name}:</p>
                            <p> Area: {area}</p>
                            <p>Status: {status}</p>
                            <p>Price: {price}</p>
                            <button className="btn bg-transparent hover:bg-transparent
                            ring-2 ring-pink-300 ring-inset">
                                Buy Property
                                <HiArrowLongRight className="animate__animated  animate__heartBeat animate__infinite text-blue-600"
                                ></HiArrowLongRight>
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    );
};

export default PropertyDetail;