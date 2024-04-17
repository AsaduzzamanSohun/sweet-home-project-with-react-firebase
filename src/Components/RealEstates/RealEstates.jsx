import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import { useLoaderData } from 'react-router-dom';
import RealEstate from '../../Layouts/RealEstate/RealEstate';



const RealEstates = () => {

    const realEstateData = useLoaderData()

    console.log('real estates: ', realEstateData);

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
                        `Home Sweet\nHome`, 
                        1000,
                        '',
                    ]}
                    speed={240}
                    repeat={Infinity}
                />
            </div>

            <div>


                <div className='grid md:grid-cols-3 gap-8 mb-24'>
                    {
                        realEstateData.map(realEstate => <RealEstate
                            key={realEstate.id}
                            realEstate={realEstate} ></RealEstate>)
                    }
                </div>

            </div>

        </div>
    );
};

export default RealEstates;