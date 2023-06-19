

export const ProjectsSection = ({ projectsRef }) => {
    const { currentLanguage } = useGlobalContext()
    
    return (
        <section ref={projectsRef} id='Projects' className=' min-h-[600px] justify-items-center bg-secondary/40 py-10 lg:py-8 lg:px-16 grid  gap-y-10 sm:gap-y-12  grid-cols-1 lg:px-[10%] lg:gap-x-[5%] xl:px-[15%] xl:gap-x-[7%] lg:grid-cols-[repeat(2,_minmax(0,_430px))]  lg:grid-rows-[auto_repeat(1,_minmax(0,_fr))] lg:justify-center'>
            <h2 data-aos="fade-up" className=" relative text-3xl h-min mx-auto text-white font-medium h-min sm:max-xl:text-4xl lg:col-span-2  xl:text-[40px] xl:leading-10" >
                {currentLanguage && languageData[currentLanguage].title}
                <div className="absolute -skew-x-12 -z-10 bottom-1 w-full h-[8px] lg:h-[10px] lg:bottom-0 bg-tertiary"></div>
            </h2>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} currentLanguage={currentLanguage} />

            ))}
            <div data-aos="fade-down" className='relative overflow-hidden text-[#DCDCDD] px-4   flex flex-col justify-evenly items-center rounded-md bg-secondary/80 lg:self-center h-[260px] md:h-[280px] xl:h-[300px] lg:h-1/2 max-sm:min-w-[320px] max-sm:max-w-[390px]  w-[90%] sm:w-[60%] max-lg:max-w-[460px] lg:w-full  '>
                <div className='relative  z-10 flex justify-center gap-x-2'>
                    <span className=' font-bold text-[1.2rem] md:text-[1.4rem]'> {currentLanguage && languageData[currentLanguage].card.title} </span>
                    <Eyes />
                </div>
                <button className='hover:bg-primary relative  z-10 bg-[#DCDCDD] w-2/3 max-lg:max-w-[210px] rounded  '>
                    <a href="https://github.com/LuisM11" target='_blank' className='w-full py-2 flex justify-center items-center gap-x-2'>
                        <GitHub />
                        <span className='text-secondary text-base md:text-lg'> {currentLanguage && languageData[currentLanguage].card.button} </span>
                    </a>
                </button>
                <span className='w-[285px] text-center text-lg md:text-xl'>
                    {currentLanguage && languageData[currentLanguage].card.message} <span className='text-tertiary font-medium'>APIs</span>
                </span>
                <Figure2/>
                <Figure3/>
            </div>



        </section>
    )
}
