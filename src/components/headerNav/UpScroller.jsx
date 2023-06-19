const UpScroller = () => {
    const scrollerRef = useRef(null)

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
          document.removeEventListener('scroll', handleScroll)
        }
      }, [handleScroll])
  return (
    <button ref={scrollerRef} onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} className="hidden z-20 lg:block lg:scale-0 transition-transform lg:translate-x-4 lg:duration-300 lg:bg-transparent lg:fixed lg:right-3 lg:bottom-3">
        <ArrowUpCircleIcon  className="w-12 h-12 text-primary " />
    </button>
  )
}

export default UpScroller