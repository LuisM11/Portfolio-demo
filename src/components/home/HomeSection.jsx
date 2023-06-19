
export const HomeSection = ({ homeref }) => {
    const { currentLanguage } = useGlobalContext()
    const [text] = useTypewriter({
        words: currentLanguage && languageData[currentLanguage].sequence,
        loop: 0,
        typeSpeed: 50,
        deleteSpeed: 30,
        delaySpeed: 2000
    })

    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [isXLargeScreen, setIsXLargeScreen] = useState(false)
    const [isMediumScreen, setisMediumScreen] = useState(false)

    useEffect(() => {
        
        const lg = window.matchMedia("(min-width: 1024px)")
        const xl = window.matchMedia("(min-width: 1280px)")
        const md = window.matchMedia("(min-width: 768px)")
        setisMediumScreen(md.matches)
        setIsLargeScreen(lg.matches)
        setIsXLargeScreen(xl.matches)

        const handleResizeMD = (e) => {
            setisMediumScreen(e.matches)
        }
        const handleResize = (e) => {
            setIsLargeScreen(e.matches)
        }
        const handleResizeXl = (e) => {
            setIsXLargeScreen(e.matches)
        }
        md.addEventListener('resize', handleResizeMD)
        lg.addEventListener('resize', handleResize)
        xl.addEventListener('resize', handleResizeXl)
        return () => {
            md.removeEventListener('resize', handleResizeMD)
            lg.removeEventListener('resize', handleResize)
            xl.removeEventListener('resize', handleResizeXl)
        }
    }, [])


    return (
        <section  ref={homeref} id='Home' className='w-full  flex-col max-h-[1000px] min-h-[600px] h-[88vh] lg:h-[90vh] md:max-lg:min-h-[750px] lgt:flex-row'>
            <div className='w-full h-1/2 relative lg:order-2  lg:w-1/2 lg:h-full xl:-left-[5%]'>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={isLargeScreen && !isXLargeScreen ? 2 : isLargeScreen ? 2.4 : isMediumScreen ? 2.6 : 2.3}>
                        <MeshDistortMaterial color={'#1985A1'} attach={"material"} distort={0.4} speed={1.5} />
                    </Sphere>
                </Canvas>
                <TapCursor />
                <Robot />
            </div>
            <div data-aos="fade-right" className='w-full relative z-20 h-1/2 flex flex-col py-1 text-center text-3xl lg:space-y-4 lg:w-1/2 lg:h-full lg:text-start lg:justify-center lg:pl-[12%] xl:pl-[15%] '>
                <h2 className='text-white font-medium sm:text-4xl lg:w-[60%] lg:text-4xl xl:text-5xl'>
                    {currentLanguage && languageData[currentLanguage].greeting}
                </h2>
                <h1 className='text-primary font-extrabold text-[40px] tracking-wide my-2 sm:text-6xl lg:w-[85%] lg:m-0 lg:text-6xl xl:text-7xl '>Luis Marín</h1>
                {currentLanguage &&
                    <h3 className='mx-auto my-3 h-16  w-[65%] max-sm:max-w-[280px]  text-xl text-white font-light sm:text-2xl sm:h-auto lg:m-0 sm:min-w-[410px] lg:w-full lg:min-w-max xl:text-2xl'>
                        {text}
                        <Cursor cursorStyle='_' cursorColor='#17FCFF' />
                    </h3>

                }
                <h3 className='hidden text-white text-lg font-extralight sm:block sm:max-lg:w-[390px] sm:max-lg:mx-auto lg:w-[450px] xl:w-[500px] '>
                    {currentLanguage &&  languageData[currentLanguage].description}
                </h3>
                <button className='hover:bg-quinary/40 border border-primary  bg-secondary font-extralight text-primary  text-xl rounded  max-w-max mx-auto sm:max-lg:mt-5 lg:m-0  '>
                    <a target='_blank' href={ currentLanguage && languageData[currentLanguage].link} className='w-full h-full flex px-3 py-1'>
                        <ArrowDownTrayIcon className='w-5 my-auto mr-1 ' />
                        <span>{currentLanguage && languageData[currentLanguage].cv}</span>
                    </a>
                </button>


            </div>
        </section>
    )
}
