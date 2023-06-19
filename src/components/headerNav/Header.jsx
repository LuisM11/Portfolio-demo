
export const Header = ({ headerRef, aboutMeRef,skillsRef,projectsRef,contactRef,footerRef }) => {
  const [highlightedSection, sethighlightedSection] = useState('home')
  const [stickHeader, setstickHeader] = useState(false)
  let { currentLanguage } = useGlobalContext();
  const handleScroll = useCallback(() => {
    /* Managing sticking effect and its state */

    if (headerRef.current.getBoundingClientRect().top <= 0 && !stickHeader) {
      setstickHeader(true)
    }
    else if (headerRef.current.getBoundingClientRect().top > 0 && stickHeader) {
      setstickHeader(false)
    }
    /* ------------- */

    /* Managing what's the current scroll-focused section */
    
    if (((aboutMeRef.current.getBoundingClientRect().top - headerRef.current.offsetHeight) < 0) && ((aboutMeRef.current.getBoundingClientRect().bottom - headerRef.current.offsetHeight) > 0)) {
      
      sethighlightedSection('aboutme')
    }
    else if (((skillsRef.current.getBoundingClientRect().top - headerRef.current.offsetHeight) < 0) && ((skillsRef.current.getBoundingClientRect().bottom - headerRef.current.offsetHeight) > 0)) {
      
      sethighlightedSection('skills')
    }
    else if (((projectsRef.current.getBoundingClientRect().top - headerRef.current.offsetHeight) < 0) && ((projectsRef.current.getBoundingClientRect().bottom - headerRef.current.offsetHeight) > 0)) {
      
      sethighlightedSection('projects')
    }
    else if (((contactRef.current.getBoundingClientRect().top - headerRef.current.offsetHeight) < 0) && ((contactRef.current.getBoundingClientRect().bottom - headerRef.current.offsetHeight) > 0)) {
      
      sethighlightedSection('contact')
    }
    
    else{
      /* If it doesnt match any case and state isnt home so it's at home, it was scrolled from below  */
      if (highlightedSection != 'home'){
        sethighlightedSection('home')
      }
    }
    /* ------------------------------------------------------ */
  }
    ,
    [stickHeader, highlightedSection], //References dont change so it's not necessary to add them to the dependencies array
  )

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <header ref={headerRef} className={
        'sticky top-0 z-[60]  text-xl shadow-inferior3d font-medium justify-between h-16  bg-secondarry lg:static lg:mx-auto lg:w-full ' +
        (stickHeader ? 'lg:sticky lg:top-0  lg:max-w-full lg:transition-all  duration-200' : ' lg:max-w-[80%] lg:rounded lg:transition-all ease-in-out duration-600')}>
        <img onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} src={logo} alt='logo' className={`cursor-pointer h-full mx-3 my-auto h-[90%] lg:w-26 lg:h-[85%] ${stickHeader ? "lg:mx-3":""}`} />
        <nav className='hidden lg:block lg:w-[80%] '>
          {
            currentLanguage !== null &&
            <ul className='flex items-center text-white h-full ml-auto lg:max-w-[45rem] w-[70%] lg:min-w-[520px] justify-evenly'>
            <li className="hover:cursor-pointer"> <Link to="AboutMe"spy={false} smooth={true} offset={-60} duration={600} className={`${ highlightedSection == "aboutme" ? "text-primary after:bg-primary after:w-full ":""} relative underline-animation`} href="#aboutMe">{languageData[currentLanguage].nav.aboutme}</Link> </li>
            <li className="hover:cursor-pointer"> <Link to="Skills"spy={false} smooth={true} offset={-60} duration={600} className={`${ highlightedSection == "skills" ? "text-primary after:bg-primary after:w-full ":""} relative underline-animation`} href="#Skills">{languageData[currentLanguage].nav.skills}</Link> </li>
            <li className="hover:cursor-pointer"> <Link to="Projects"spy={false} smooth={true} offset={-60} duration={600} className={`${ highlightedSection == "projects" ? "text-primary after:bg-primary after:w-full ":""} relative underline-animation`}>{languageData[currentLanguage].nav.projects}</Link> </li>
            <li className="hover:cursor-pointer"> <Link to="Contact"spy={false} smooth={true} offset={-60} duration={600} className={`${ highlightedSection == "contact" ? "text-primary after:bg-primary after:w-full ":""} relative underline-animation`}>{languageData[currentLanguage].nav.contact}</Link> </li>
          </ul>
          }
        </nav>
        <LanguageMenu />

      </header>
      <UpScroller />
      <MobileNav footerRef={footerRef} highlightedSection={highlightedSection} />
    </>
  )
}
