/* eslint-disable react/prop-types */

import { useState } from "react"

export const Technology = ({ technology: { src, name } }) => {
    const [open, setOpen] = useState(false)
    return (
        <figure  className='group/figure relative min-w-[2.5rem] w-[2.5rem] h-10  '>
            <img  src={src} className={`w-full h-full transition-all duration-200 rounded-full group-hover/figure:lg:blur-[2px] ${ open ? "max-lg:blur-[2px]":""}`} />
            <span onClick={()=> setOpen(state => !state )} className={`max-lg:cursor-pointer lg:cursor-default flex justify-center items-center absolute top-0 transition-all duration-300 rounded-full z-10 w-full h-full text-center group-hover/figure:lg:text-secondary group-hover/figure:lg:text-xs lg:opacity-0 group-hover/figure:lg:font-medium group-hover/figure:lg:opacity-100 ${open ?  "max-lg:text-secondary max-lg:text-xs max-lg:font-medium max-lg:opacity-100": "max-lg:opacity-0"}`}> 
                <span className={``}>{name}</span>            
            </span>
        </figure>
    )
}
