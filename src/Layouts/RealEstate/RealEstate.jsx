
const RealEstate = ({realEstate}) => {

    const {image, estate_title, segment_name, description, price, status, area, location} = realEstate;

    return (
        <div className='w-96 bg-slate-200 border-2 transition-all'>
            <div>
                <img className='w-full h-64 hover:scale-105 transition-all duration-1000 overflow-hidden p-4' src={image} alt="" />
            </div>

            <div className='bg-slate-50'>
                <div className='p-4'>
                    <h3 className='text-sky-500 font-semibold text-xl'>$ 6728</h3>
                    <h2 className='text-2xl font-semibold my-2'>Apartment</h2>

                    <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio quo quam voluptas tempora repudiandae sint voluptates saepe porro ab.</p>

                </div>

                <div className='flex justify-between items-center border-y border-zinc-800 p-4 font-medium'>
                    <div><span>Apartment</span></div>
                    <div><span>rent</span></div>
                    <div><span>1200 sq ft</span></div>
                </div>

            </div>


            <div className='flex justify-between px-4 py-2'>
                <span>location</span>
                <button className='font-light bg-stone-500 hover:text-blue-700 hover:font-bold px-3 text-zinc-100 animate__animated animate__pulse animate__infinite animate__slow hover:skeleton duration-500 transition-all'>{`see details ->`}</button>
            </div>

        </div>
    );
};

export default RealEstate;