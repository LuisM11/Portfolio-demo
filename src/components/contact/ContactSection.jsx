

export const ContactSection = ({ contactRef }) => {
    const { currentLanguage } = useGlobalContext()

    return (

        <section ref={contactRef} id='Contact' className='min-h-[90vh] sm:max-lg:min-h-screen pt-10 lg:py-8 lg:px-16 gap-y-12 md:gap-y-14  grid grid-cols-1 auto-row-min  md:max-lg:auto-rows-auto'>
            <h2 data-aos='fade-up' className=" relative text-3xl h-min mx-auto text-white font-medium  sm:max-xl:text-4xl xl:text-[40px] xl:leading-10">
                {currentLanguage && languageData[currentLanguage].title}
                <div className="absolute -skew-x-12 -z-10 bottom-1 w-full h-[8px] lg:h-[10px] lg:bottom-0 bg-tertiary"></div>
            </h2>

            <div data-aos='zoom-in' className="relative rounded-xl flex flex-col  items-center pb-6 lg:pb-8 pt-10 mx-auto h-min w-[100%] sm:w-[65%] min-w-[315px] max-sm:max-w-[360px] md:max-lg:max-w-[520px] lg:w-[630px] bg-secondary/80">
                <ContactIcon />
                <h2 className="text-xl sm:text-[1.4rem] lg:text-[1.65rem] text-[#DCDCDD] font-bold mx-auto mb-2 lg:mb-3 lg:mt-2">
                    {currentLanguage && languageData[currentLanguage].infoCard.title}
                </h2>
                <hr className="w-[85%] border-quaternary mb-5 sm:max-lg:max-w-[360px] lg:max-w-[400px]" />
                <ul className="flex flex-col items-center gap-y-3 lg:gap-y-4 w-full h-full max-lg:max-w-[420px]  sm:text-lg lg:text-xl">
                    <li className=" w-[80%] lg:w-[60%]">
                        <a target="_blank" href="mailto:luisfeli1097@gmail.com" className="transition-transform duration-200 flex w-full group border-b border-b-secondary hover:border-b-primary hover:translate-x-4">
                            <span className="flex gap-x-2 w-[40%] items-center text-[#DCDCDD] font-medium ">
                                <GmailIcon contact={'animate-multicolor2 fill-primary w-5 h-5 lg:w-6 lg:w-6'} />
                                {currentLanguage && languageData[currentLanguage].infoCard.email}
                            </span>
                            <span className="w-[60%] text-[#DCDCDD]/80 "> luisfeli1097@gmail.com</span>
                        </a>
                    </li>
                    <li className="flex w-[80%] lg:w-[60%]">
                        <a target="_blank" href="https://www.linkedin.com/in/marinb11/" className="transition-transform duration-200 flex w-full group border-b border-b-secondary hover:border-b-primary hover:translate-x-4">
                            <span className="flex gap-x-2 w-[40%] items-center text-[#DCDCDD] font-medium">
                                <LinkedinIcon contact={'animate-multicolor fill-primary w-5 h-5 lg:w-6 lg:w-6'} />
                                Linkedin
                            </span>
                            <span className="w-[60%]  text-[#DCDCDD]/80 whitespace-nowrap"> linkedin.com/in/marinb11</span>
                        </a>
                    </li>
                    <li className="flex w-[80%] lg:w-[60%]">
                        <a target="_blank" href="https://github.com/LuisM11" className="transition-transform duration-200 flex w-full group border-b border-b-secondary hover:border-b-primary hover:translate-x-4">
                            <span className="flex gap-x-2 w-[40%] items-center text-[#DCDCDD] font-medium">
                                <GitHub contact={'animate-multicolor2 w-5 h-5 fill-primary lg:w-6 lg:w-6'} />
                                GitHub
                            </span>
                            <span className="w-[60%]  text-[#DCDCDD]/80"> github.com/LuisM11</span>
                        </a>
                    </li>
                    <li className="flex w-[80%] lg:w-[60%]">
                        <a target="_blank" href="https://www.instagram.com/marin11._/" className="transition-transform duration-200 flex w-full group border-b border-b-secondary hover:border-b-primary hover:translate-x-4">
                            <span className="flex gap-x-2 w-[40%] items-center text-[#DCDCDD] font-medium">
                                <InstagramIcon contact={'animate-multicolor2 w-5 h-5 fill-primary lg:w-6 lg:w-6'} />
                                Instagram
                            </span>
                            <span className="w-[60%]  text-[#DCDCDD]/80">instagram.com/marin11._</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div data-aos='zoom-in' className=" relative  py-5 mx-auto h-min flex flex-col gap-y-10 rounded-xl w-[100%] sm:w-[65%] min-w-[315px] max-sm:max-w-[360px] md:max-lg:max-w-[520px] lg:w-[630px] bg-secondary/80">
                <h2 className=" flex flex-col gap-y-2 mx-auto w-[95%] lg:w-[85%] text-[#DCDCDD] text-center font-medium text-xl sm:text-2xl lg:text-[1.65rem]">
                    {currentLanguage && languageData[currentLanguage].form.message1}
                    <span className="font-bold text-tertiary "> {currentLanguage && languageData[currentLanguage].form.message2}</span>
                </h2>
                <ContactForm currentLanguage={currentLanguage} languageData={languageData} />


            </div>
            
            
        </section>

    )
}
