

export const Carousel = ({images,reverse}) => {
    return (
            <Slider
                className='w-full  h-auto flex items-center px-2  '
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                modules={[ EffectCoverflow, Autoplay]}    
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                    reverseDirection: reverse,
                }}
                centeredSlides={true}
                speed={5000}
                /* spaceBetween={30} */
                slidesPerView={2.5}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 3.5,
                      
                    },
                    768: {
                      slidesPerView: 3.9,
                      loop:true,
                      
                    },
                    1024: {
                      slidesPerView: 2.3,
                      loop:true,
                      
                    },
                    1280: {
                      slidesPerView: 3,
                      loop:true,
                      
                    },
                  }}

            >
                {images.map((image, index) => (
                    <SliderSlide key={index} className=" py-3 px-1 sm:py-4 sm:px-2  md:py-2 rounded-2xl bg-quaternary rounded-2xl grid grid-cols-1 grid-rows-[fr_2rem] md:grid-rows-[2fr_3rem]">
                        
                    <figure className='w-full h-full min-h-max flex justify-center items-center'>
                        <img src={image.src} className="w-[60%] sm:w-[60%] md:w-[%] lg:w-[60%] h-min max-h-min  lg:pointer-events-none" />

                    </figure>
                        <h2 className='w-full h-full flex items-center justify-center text-[#DCDCDD] max-lg:truncate font-medium text-lg text-center sm:text-xl  lg:text-[1.3rem]'>{image.name}</h2>

                        
                    </SliderSlide>
                ))}

            </Slider>

       

    )
}
