
export const MiniCarousel = ({ images,learning }) => {
    const breakpoints = {
        others:{
            640: {
                loop: false,
                slidesPerView: 2,
                spaceBetween:17

            },
            768: {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 17,

            },
            1024: {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 20,

            },
            1280: {
                slidesPerView: 2,

            }
        },
        learning:{
            640: {
                loop: false,
                slidesPerView: 2,
                autoplay:false,
                spaceBetween: 17,
                grabCursor:false,

            },
            768: {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 17,


            },
            1024: {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 20,
                grabCursor:learning ? false : true,
                

            },
            1280: {
                loop: false,
                slidesPerView: 2,
                autoplay:false,

            }
        }

    }

    return (
        <Slider
            className='w-[160px] sm:w-[290px] md:w-[280px] lg:w-[320px] xl:w-[350px]  flex items-center p-2  '
            grabCursor={true}
            loop={false}
            modules={[Autoplay]}
            autoplay={{
                delay: learning ? 3000 : 2000,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={ 1 }
           
            breakpoints={ learning ? breakpoints.learning : breakpoints.others}
        >
            {images.map((image, index) => (
                <SliderSlide key={index} className="flex flex-col py-2  sm:px-2 md:max-lg:py-3  lg:py-2 bg-[#3D3F42]/50  rounded-2xl">

                    <figure className='w-full h-[85%] flex justify-center items-center'>
                        <img src={image.src} className="w-[50%] sm:w-[65%] lg:w-[60%]  h-min max-h-min  lg:pointer-events-none" />

                    </figure>
                    <h2 className='w-full min-h-[15%] h-min flex items-center justify-center text-quinary truncate  text-lg text-center sm:text-xl md:text-[1.2rem]'>
                        {image.name}
                    </h2>


                </SliderSlide>
            ))}
        </Slider>

    )
}
