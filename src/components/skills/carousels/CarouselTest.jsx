/* eslint-disable react/prop-types */
/* import { motion } from "framer-motion"
import { useRef,useEffect,useState, useCallback } from "react"

export const Carousel = ({images}) => {
    const [carouselWidth, setCarouselWidth] = useState(0)

    const carouselRef = useRef(null)
    const containerRef = useRef(null);
    
    let scrollInterval = useRef(null);
    let timeOut = useRef(null);

    const activateInterval = useCallback(() => {
        const container = containerRef.current;
        console.log(container.scrollLeft)
        let direction=1;
         scrollInterval.current = setInterval(() => {
            if(container.scrollLeft >= (container.scrollWidth - container.offsetWidth)){
                direction=-1;
            }else if(container.scrollLeft <= 0){
                direction=1;
            }
            if(direction===1){
                container.scrollLeft += 1;
            }else{
                container.scrollLeft -= 1;
            }
        }, 30);
    })

    const inactivateInterval = useCallback( () => {
        clearInterval(scrollInterval.current)
        clearTimeout(timeOut.current)
        timeOut.current = setTimeout(() => {
            activateInterval()
        }   , 2000);   
    })

    useEffect(() => {
        setCarouselWidth(carouselRef.current.scrollWidth -  carouselRef.current.offsetWidth)
        activateInterval();
        return () => {
            clearInterval(scrollInterval.current);
        }
    }, [])
    return (
        <motion.div ref={containerRef} className=" cursor-grab overflow-hidden w-[85%] bg-secondary md:w-1/2" >
            <motion.div onDrag={() => inactivateInterval()} ref={carouselRef} whileTap={{ cursor: 'grabbing' }} drag='x' dragConstraints={{ right: 0, left: -carouselWidth }} className="flex h-full py-3 gap-3">
                {images.map((image, index) => (
                    <motion.div key={index} className="flex items-center p-5 min-w-[120px]  bg-quaternary rounded-2xl">
                        <img src={image} className="w-full lg:pointer-events-none" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
} */
