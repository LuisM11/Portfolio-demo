

export const ProjectCard = ({ project: { id,bgColor, es, en, img, type, inProgress, technologies, url, repo }, currentLanguage }) => {
    const [open, setOpen] = useState(false)
    const languages = {es:es, en:en}
    const [portfolioButton, setPortfolioButton] = useState(false)
    const buttonAdvice = () => {
        setPortfolioButton(true)
        setTimeout(() => {
            setPortfolioButton(false)
        }, 3000);
    }

    
    return (
        <div data-aos="flip-left" className={`relative group max-sm:min-w-[320px] max-sm:max-w-[390px]  w-[90%] sm:w-[60%] max-lg:max-w-[460px] lg:w-full  ${bgColor} rounded-t-xl rounded-b-2xl pt-4 flex flex-col gap-y-4`}>
            <h2 className={` font-extrabold text-2xl sm:text-[1.7rem] lg:text-3xl xl:text-[1.9rem] whitespace-nowrap text-center transition-colors duration-500  group-hover:lg:text-primary relative z-30 ${open ? "max-lg:text-primary" : " max-lg:text-secondary"}`}>
                {currentLanguage && languages[currentLanguage].title} 
            </h2>
            <figure className='w-full lg:h-[70%] my-2 sm:my-4 md:my-6  flex items-center'>
                <img className="w-[67%] lg:w-[70%] mx-auto  " src={img} alt="" />
            </figure>
            <div onClick={() => setOpen(true)} className=' lg:hidden absolute bg-transparent w-full z-30 top-0 h-[85%] md:h-[87%]'>
            </div>
            <div className={`absolute h-[77px] lg:h-[84px] rounded-xl z-10 bg-secondary flex justify-center w-full bottom-0  transition-all duration-500 group-hover:lg:h-[101%] ${open ? " max-lg:h-[101%]" : ""}`}>
                <Flap />
                <ChevronUpIcon onClick={() => setOpen(false)} className={`w-4 md:w-5 text-white absolute z-10 -translate-y-[90%] transition-transform duration-200 group-hover:lg:-rotate-180 ${open ? "max-lg:-rotate-180" : ""} `} />
            </div>
            <div className={`flex  gap-x-3 absolute w-[90%] px-1 pb-2 lg:pb-4 z-30 h-[0px] overflow-x-scroll overflow-y-hidden left-1/2 -translate-x-1/2 text-primary max-sm:text-sm lg:text-base font-light text-center bottom-0 transition-all duration-500 group-hover:lg:h-9 group-hover:lg:bottom-[81%]  group-hover:xl:bottom-[82%] group-hover:lg:translate-y-1/2 ${open ? " max-lg:h-7 max-md:bottom-[77%] md:max-lg:bottom-[80%]" : ""}`}>
                <span className='border flex items-center rounded border-primary px-2 h-min'> {type} </span>
                <span className={`${inProgress ? "" : "hidden"} h-min border flex items-center border-yellow-200 rounded text-yellow-200 whitespace-nowrap px-2`}>{currentLanguage =='es' ? 'En Progreso': currentLanguage =='en' ? 'In progress':""} </span>
                {currentLanguage && languages[currentLanguage].tags.map((tag, i) =>
                    <span key={i} className='h-min border flex items-center rounded text-white px-2  whitespace-nowrap'>{tag} </span>)
                }
            </div>
            <div className={`absolute max-sm:text-sm lg:text-base  w-[90%] flex flex-col justify-around tracking-tight  text-justify left-1/2 -translate-x-1/2 text-white px-4 pt-2 lg:py-2 lg:px-5 bg-quaternary/20 rounded-lg z-30 overflow-hidden h-[0px] bottom-0 transition-all duration-500 group-hover:lg:h-[61%]  group-hover:lg:bottom-1/2  group-hover:lg:translate-y-[55%] ${open ? " max-md:h-[55%] md:max-lg:h-[60%] max-lg:bottom-1/2 max-lg:translate-y-[55%]" : ""}`}>
                <p className='overflow-y-auto max-lg:max-h-[65%] lg:max-h-[60%]'>{currentLanguage && languages[currentLanguage].description}</p>
                <div className='flex py-1 px-1 gap-x-2 overflow-x-auto max-w-full md:gap-y-2 md:max-lg:justify-center md:max-lg:flex-wrap lg:justify-center lg:flex-wrap lg:max-h-[33%] lg:overflow-y-auto lg:overflow-x-hidden'>
                    {technologies.map((tech, i) =>
                        <Technology key={i} technology={tech} />
                    )}

                </div>
            </div>
            <div onClick={()=> id == 2 ? buttonAdvice():undefined} className="relative w-full z-40 flex justify-evenly bg-secondary rounded-b-xl py-5 lg:py-6">
                <a href={url} target={"_blank"} className=' min-w-max w-[35%] max-w-[180px] '>
                    <button className='w-full py-1 flex items-center justify-center gap-x-1 text-xl md:text-[1.4rem] rounded  font-medium  text-secondary bg-[#DCDCDD] focus:bg-primary lg:hover:bg-primary'>
                         {(portfolioButton && currentLanguage) ? languages[currentLanguage].button : <> <EyeIcon className='w-6 md:w-7' /> Demo </> }
                    </button>
                </a>
                <a href={repo} target={"_blank"} className='min-w-max w-[35%] max-w-[180px] '>
                    <button className=' w-full py-1 flex items-center justify-center gap-x-1 text-xl md:text-[1.4rem] rounded border font-medium border-[#DCDCDD] text-[#DCDCDD] bg-transparent focus:text-primary focus:border-primary lg:hover:text-primary hover:border-primary'>
                        <CodeBracketSquareIcon className='w-6 md:w-7' /> Repo
                    </button>
                </a>
            </div>
        </div>
    )
}
