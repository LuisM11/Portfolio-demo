
function App() {
  const homeref = useRef(null);
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const headerProps = { headerRef, homeref, aboutMeRef, skillsRef, projectsRef, contactRef, footerRef };

  useEffect(() => {

    AOS.init({
      duration: 1500,
    })

  }, [])

  return (
    <ContextProvider>
      <img src={bg1} alt="" className='fixed -z-50  w-full h-full object-fill' />
      <div className='relative min-h-screen w-full  lg:pt-4 ' /* style={{backgroundImage:` url(${bg1})`, backgroundSize:'cover', backgroundAttachment:'scroll' ,backgroundRepeat:'no-repeat'}} */>
        <Header {...headerProps} />
        <HomeSection homeref={homeref} />
        <AboutMeSection aboutMeRef={aboutMeRef} />
        <SkillsSection skillsRef={skillsRef} />
        <ProjectsSection projectsRef={projectsRef} />
        <ContactSection contactRef={contactRef} />
        <Footer footerRef={footerRef} />
      </div>
    </ContextProvider>
  )
}

export default App
