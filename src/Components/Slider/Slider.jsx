import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
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
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/D8Qf58n/banner-7.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/s3wNhR4/single-family-house-1.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/XW9jZqQ/single-family-house.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/GQK3QNN/house-9.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/zJ5mTyQ/house-8.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/kS5CwLb/banner-6.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/Fz6tH7H/banner-5.jpg"></img>}
                </SwiperSlide>
                <SwiperSlide>
                    {<img className='w-full h-[1080px]' src="https://i.ibb.co/3FQG74w/banner-4.jpg"></img>}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;