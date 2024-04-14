import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
            >
                <SwiperSlide className=' h-[1080px]'>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/xhnXNT8/apartment-slide.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/6n4gJNR/apartment-8.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/FBKBfGX/house-10.jpg"></img>}</SwiperSlide>
                <SwiperSlide>{<img className='w-full h-[1080px]' src="https://i.ibb.co/h8T3SMG/student-housing-slide.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/L1kQ0Xd/vacation-rentals-3.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/Tk0BgDS/single-family-house-4.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/XkqV5gm/house-6.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/wwG8Yg8/apartment-7.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/vjstGwp/apartment-2.jpg"></img>}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;