export const MobileNav = (props) => {
  const {footerRef} = props;
  const navRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => { 
    if(footerRef.current && navRef.current){
      /* console.log(footerRef.current.getBoundingClientRect())
      console.log(navRef.current.getBoundingClientRect()) */
      if(navRef.current.getBoundingClientRect().bottom > (footerRef.current.getBoundingClientRect().top + 20)){
        setVisible(false);
      }else{
        setVisible(true);
      }
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  return (
    <nav ref={navRef} className={`transition-all duration-300 lg:hidden fixed- z-[60] flex space-x-1.5 p-2 rounded-3xl text-white lft-1/2 -ytranslate-x-1/2 bg-black/70 bottom-2 ${ visible ? 'opacity-100': ' opacity-0 invisible'}`}>
        <HomeIcon {...props}/>
        <UserIcon {...props}/>
        <CodeBracketIcon {...props}/>
        <BriefCaseIcon {...props}/>
        <LetterIcon {...props}/>
    </nav>
  )
}
