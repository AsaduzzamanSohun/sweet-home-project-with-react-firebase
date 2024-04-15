import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';



const RealEstates = () => {

    useEffect(() => {
        document.title = "Real Estates"
    }, [])

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='flex justify-center text-6xl font-bold my-24'>
                <TypeAnimation
                    className=' border-t-4 border-b-4 border-sky-600 '
                    style={{ whiteSpace: 'pre-line', width: '600px', height: '200px', display: 'flex', color: 'Black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                    sequence={[
                        `Home Sweet\nHome`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                        1000,
                        '',
                    ]}
                    speed={240}
                    repeat={Infinity}
                />
            </div>

            <div>

                <div className='w-96 bg-slate-200 border-2'>
                    <div>
                        <img className='w-full hover:scale-105 transition-all duration-1000 overflow-hidden' src="https://i.ibb.co/2sNv4Vc/house-5.png" alt="" />
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
                        <button className='font-light bg-slate-400 px-3 text-zinc-100 animate__animated animate__pulse animate__infinite animate__slow animate__delay-5s'>{`see details ->`}</button>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default RealEstates;