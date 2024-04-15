
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
    return (
        <div>

            <div className="bg-[url('https://i.ibb.co/tLsxDV0/banner-1.jpg')] h-screen mx-auto mb-20 flex justify-center items-center">

                <div className="bg-gray-400 bg-opacity-50 text-8xl font-extrabold font-alegreya leading-snug">

                    <div className=''>

                        <TypeAnimation

                            style={{ whiteSpace: 'pre-line', width: '800px', height: '400px', display: 'flex', color: 'white', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                            sequence={[
                                `Home Sweet\nHome`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                                1000,
                                '',
                            ]}
                            speed={240}
                            repeat={Infinity}
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;