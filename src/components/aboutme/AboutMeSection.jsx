
export const AboutMeSection = ({ aboutMeRef }) => {
  const { currentLanguage } = useGlobalContext()


  return (
    <section ref={aboutMeRef} id="AboutMe" className='min-h-[600px] md:min-h-[92vh] w-full  bg-secondary/50 px-8 py-10 lg:pt-8 gap-y-3 grid justify-items-center justify-center grid-cols-[_minmax(200px,420px)] grid-rows-[auto_4rem_minmax(100px,_auto)_repeat(2,_minmax(0,_auto))] sm:grid-cols-[minmax(85%,_550px)] md:grid-cols-[40%_40%] md:grid-rows-[auto_auto_auto_auto] md:h-min md:gap-x-5   lg:grid-rows-[_repeat(3,_auto)] xl:grid-cols-[2fr_1fr_1fr] lg:gap-y-5 '>

      <h2 data-aos="fade-up" className=" relative text-3xl mx-auto text-white font-medium md:col-span-2 sm:max-lg:text-3xl md:h-min md:mb-6 lg:mb-10 xl:col-span-3 lg:text-[40px] xl:leading-10">
        {currentLanguage && languageData[currentLanguage].title}
        <div className="absolute -skew-x-12 -z-10 bottom-1 w-full h-[8px] lg:h-[10px] lg:bottom-0 bg-tertiary"></div>
      </h2>
      <h3 data-aos="fade-right"  className='text-primary font-medium text-3xl mx-auto h-min mt-auto sm:max-xl:text-3xl md:col-span-2 xl:col-span-3  xl:w-[64%] lg:text-[38px] lg:font-bold'>
        Luis Marín
      </h3>
      <p data-aos="fade-right" data-aos-delay="200" className="font-light text-white text-justify w-full sm:max-xl:text-xl md:col-span-2 lg:mb-6 xl:col-span-1 lg:w-[82%] xl:w-[85%] xl:text-[20px]">{currentLanguage && languageData[currentLanguage].paragraph}<br />
        <span className='text-primary'>{currentLanguage && languageData[currentLanguage].highlighted}</span>
      </p>

      <div data-aos="zoom-in" className="flex flex-col space-y-4 items-center px-2 py-8 max-lg:mt-10 h-[400px]  bg-secondary rounded-xl h-12 shadow-inferior3d xl:relative xl:bottom-10">
        <figure className='flex flex-col items-center space-y-2 h-[212px]'>
          <img className='w-28' src={unal} alt="universidadnacional" />
          <img className='w-32' src={unal2} alt="universidadnacional" />
        </figure>
        <hr className='w-2/3 border-quaternary' />
        <h3 className='w-[70%] text-center text-white text-lg font-medium leading-6'>{currentLanguage && languageData[currentLanguage].universityCard.title}</h3>
        <div className='flex min-w-[272px] justify-around w-full text-md'>
          <span className=' font-light text-white border border-quaternary rounded py-1 px-2 '>{currentLanguage && languageData[currentLanguage].universityCard.timelapse}</span>
          <button className='flex w-auto  rounded py-1 px-2 bg-tertiary text-white hover:cursor-wait'>
            <AcademicCapIcon className='w-5 mr-1 ' /> {currentLanguage && languageData[currentLanguage].universityCard.status}
          </button>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex flex-col space-y-4 items-center px-2 py-8 max-lg:mt-10 h-[400px] w-full max-w-[300px] bg-secondary rounded-xl h-12 shadow-inferior3d xl:relative xl:bottom-10">
        <figure className='flex flex-col items-center justify-evenly space-y-2 h-[212px]'>
          <img className='w-48' src={ctd} alt="universidadnacional" />
          <img className='w-48' src={dh} alt="universidadnacional" />
        </figure>
        <hr className='w-2/3 border-quaternary' />
        <h3 className='w-[70%] text-center text-white text-lg font-medium leading-6 md:h-12'> {currentLanguage && languageData[currentLanguage].ctdCard.title} </h3>
        <div className='flex justify-center min-w-[272px] space-x-4 text-md'>
          <span className=' font-light text-white border border-quaternary rounded py-1 px-2 '>{currentLanguage && languageData[currentLanguage].ctdCard.timelapse}</span>
          <button className='flex w-auto  rounded py-1 px-2 bg-tertiary text-white'>
            <DocumentArrowDownIcon className='w-5 mr-1' /> {currentLanguage && languageData[currentLanguage].ctdCard.status}
          </button>
        </div>
      </div>

    </section>
  )
}
