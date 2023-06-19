/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import GmailIcon from '../../assets/icons/GmailIcon'
import LinkedinIcon from '../../assets/icons/LinkedinIcon'
import InstagramIcon from '../../assets/icons/InstagramIcon'
import GitHub from '../../assets/icons/GitHub'
import { useGlobalContext } from '../context/GlobalContext'


export const Footer = ({footerRef}) => {
    const { currentLanguage } = useGlobalContext()

    return (
        <footer ref={footerRef}>
            <div className='h-[130px] lg:mt-10   footer-gradient flex flex-col items-center justify-end gap-y-3 pb-2'>
                <span className='flex gap-x-5 '>
                    <a className='' href="https://www.linkedin.com/in/marinb11/" target='_blank'>
                        <LinkedinIcon />
                    </a>
                    <a href="mailto:luisfeli1097@gmail.com" target='_blank'>
                        <GmailIcon />
                    </a>
                    <a href="https://github.com/LuisM11" target='_blank'>
                        <GitHub footer={'fill-[#DCDCDD] w-5 h-5'} />
                    </a>
                    <a href="https://www.instagram.com/marin11._/" target='_blank'>
                        <InstagramIcon />
                    </a>
                </span>
                <span  className='text-[#DCDCDD] max-sm:text-sm'>
                   { currentLanguage =='es' ? "Hecho por" : currentLanguage =='en'?"Coded by":""}<span className='font-bold '> Luis Marín </span>| © 2023 - Medellín 🇨🇴
                </span>
            </div>
        </footer>
    )
}
