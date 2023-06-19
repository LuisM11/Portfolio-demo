/* eslint-disable react/prop-types */

export const SkillsSection = ({ skillsRef }) => {
    const { currentLanguage } = useGlobalContext()

    return (
        <section ref={skillsRef} id='Skills' className=' min-h-[600px] md:min-h-[90vh] py-10 lg:pt-8  w-full  gap-y-14 md:gap-y-12 lg:gap-y-14   grid-cols-1  auto-rows-max justify-items-center lg:grid-cols-2 '>
            <h2 data-aos="fade-up" className=" relative text-3xl mx-auto text-white font-medium h-min sm:max-xl:text-4xl  lg:col-span-2   xl:text-[40px] xl:leading-10">
            {currentLanguage && languageData[currentLanguage].title}
                <div className="absolute -skew-x-12 -z-10 bottom-1 w-full h-[8px] lg:h-[10px] lg:bottom-0 bg-tertiary"></div>
            </h2>

            <div data-aos="zoom-in" className="flex flex-col gap-y-4 items-center w-full max-sm:max-w-[430px] sm:max-md:max-w-[560px] md:w-[80%] md:max-lg:max-w-[700px] lg:w-[75%] lg:max-xl:max-w-[410px] lg:mr-10 lg:ml-auto xl:w-[80%] xl:max-w-[550px]">
                <h3 className="text-[1.4rem] sm:text-2xl md:text-2xl lg:text-[1.7rem] font-bold text-primary">FRONTEND</h3>
                <Carousel images={frontImgs} reverse={false} />
            </div>
            <div data-aos="zoom-in" className="flex gap-y-4 items-center  max-sm:max-w-[430px] sm:max-md:max-w-[560px] md:w-[80%] md:max-lg:max-w-[700px] lg:w-[75%] lg:max-xl:max-w-[410px] lg:ml-10 lg:mr-auto xl:w-[80%] xl:max-w-[550px]">
                <h3 className="text-[1.4rem] sm:text-2xl md:text-2xl lg:text-[1.7rem] font-bold text-primary">BACKEND</h3>
                <Carousel images={backImgs} reverse={true} />
            </div>

            <div data-aos="fade-down" className="relative px-2 py-4 w-[70%]  md:w-[80%] lg:py-4  flex-col rounded-md bg-secondary/80 gap-y-10  md:flex-row max-sm:min-w-[250px] max-sm:max-w-[280px] sm:max-w-[370px] md:max-w-[700px] lg:w-[60%] lg:min-w-[700px]  lg:col-span-2 xl:min-w-[800px] xl:w-[55%] ">
                <div className="relative z-10 w-full  flex flex-col gap-y-3 ">
                    <h3 className="relative z-10 w-full text-center text-[1.4rem] sm:text-[1.4rem] font-bold text-[#DCDCDD] lg:text-2xl"> {currentLanguage && languageData[currentLanguage].card.others}</h3>
                    <MiniCarousel images={othersImgs} learning={false} />
                </div>

                <div className=" z-10 w-full flex flex-col gap-y-3  ">
                    <h3 className="relative w-full text-center text-[1.4rem] font-bold text-[#DCDCDD] sm:text-[1.4rem] lg:text-2xl ">
                        <span className=" z-10">
                            {currentLanguage && languageData[currentLanguage].card.learning}
                        </span> <Brain />
                    </h3>
                    <MiniCarousel images={learningImgs} learning={true} />
                </div>
                <Figure1 />
                <Figure2 />
                <Figure3 />
            </div>

        </section>
    )
}
