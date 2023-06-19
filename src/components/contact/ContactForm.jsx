
export const ContactForm = ({languageData,currentLanguage}) => {
    const [name, setName] = useState({ positionUp: false, colored: false })
    const [email, setEmail] = useState({ positionUp: false, colored: false })
    const [message, setMessage] = useState({ positionUp: false, colored: false })
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();

    let [isOpen, setIsOpen] = useState(false)
    const [isError, setIsError] = useState(false)

    const onSubmit = (data) => {
        setIsLoading(true)
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            setIsLoading(false)
            setIsOpen(true)
            console.log(result.text);
            reset()
        }, (error) => {
            setIsLoading(false)
            setIsOpen(true)
            setIsError(true)
            console.log(error.text);
            reset()
        }
        );
    }

    return (
        <>
            <form  className="mx-auto  flex-col gap-y-8 w-[85%] lg:w-[80%]" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative h-9 lg:h-10 bg-transparent">
                    <label htmlFor="name" className={`cursor-text transition-all duration-300  font-light  left-2  ${name.positionUp ? 'top-0 -translate-y-[100%] text-[1.05rem] lg:text-lg' : 'top-1/2 -translate-y-1/2 text-lg lg:text-xl'} ${errors.name ? 'text-red-300' : name.colored ? " text-primary" : " text-quinary"} `}>
                        {currentLanguage && languageData[currentLanguage].form.name.label}
                    </label>
                    <input
                        {...register("name", {
                            required: currentLanguage && languageData[currentLanguage].form.name.required,
                            maxLength: {
                                value: 40,
                                message: currentLanguage && languageData[currentLanguage].form.name.max
                            },
                            onBlur: () => setName(value => (getValues('name') == '' ? { ...value, positionUp: false, colored: false } : { ...value, colored: false })),
                        })}
                        onFocus={() => setName(value => ({ ...value, positionUp: true, colored: true }))}
                        type="text" id="name"
                        name="name"
                        className={`h-full text-[#DCDCDD] pl-2 text-lg lg:text-[1.2rem] font-medium w- focus:outline-none border border-quaternary bg-quaternary/30 focus:border-2 rounded-lg ${errors.name ? ' border-red-300 ' : ' focus:border-primary'}`} />
                    <span className="absolute right-0 -bottom-6 text-sm text-red-300">
                        {errors.name && errors.name.message}
                    </span>
                </div>

                <div className="relative h-9 lg:h-10 bg-transparent">
                    <label htmlFor="email" className={`cursor-text transition-all duration-300 absolute font-light left-2 ${email.positionUp ? 'top- text-[1.05rem] lg:text-lg' : 'top-1/2 left-2 -translate-y-1/2 text-lg lg:text-xl'} ${errors.email ? ' text-red-300' : email.colored ? " text-primary" : " text-quinary"} `}>
                    {currentLanguage && languageData[currentLanguage].form.email.label}
                    </label>
                    <input
                        {...register("email", {
                            required: currentLanguage && languageData[currentLanguage].form.email.required,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: currentLanguage && languageData[currentLanguage].form.email.invalid
                            },
                            maxLength: {
                                value: 50,
                                message: currentLanguage && languageData[currentLanguage].form.email.max
                            },
                            onBlur: () => setEmail(value => (getValues('email') == '' ? { ...value, positionUp: false, colored: false } : { ...value, colored: false })),
                        })}
                        onFocus={() => setEmail(value => ({ ...value, positionUp: true, colored: true }))}
                        type="email" id="email"
                        name="email"
                        className={`h-full px-2 text-[#DCDCDD] text-lg lg:text-xl font-medium w-full   focus:outline-none border border-quaternary bg-quaternary/30 focus:border-2 rounded-lg ${errors.email ? ' border-red-300 ' : ' focus:border-primary'}`} />
                    <span className="absolute right-0 -bottom-6 text-sm text-red-300">
                        {errors.email && errors.email.message}
                    </span>
                </div>

                <div className="relative h-[150px]  md:h-[180px] bg-transparent">
                    <label className={`cursor-text transition-all duration-300 absolute font-light left-2 ${message.positionUp ? 'top-0 -translate-y-[110%] text-[1.05rem] lg:text-lg' : 'top-4 lg:top-5 left-1 -translate-y-1/2 text-lg lg:text-xl'} ${errors.message ? ' text-red-300' : message.colored ? " text-primary" : " text-quinary"} `} htmlFor="message">
                    {currentLanguage && languageData[currentLanguage].form.message.label}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        {...register("message", {
                            required: currentLanguage && languageData[currentLanguage].form.message.required,
                            maxLength: {
                                value: 500,
                                message: currentLanguage && languageData[currentLanguage].form.message.max
                            },
                        })}
                        onFocus={() => setMessage(value => ({ ...value, positionUp: true, colored: true }))}
                        onBlur={() => setMessage(value => (getValues('message') == '' ? { ...value, positionUp: false, colored: false } : { ...value, colored: false }))}
                        className={`resize-none rounded-lg h-full w-full text-[#DCDCDD] px-2 py-3 text-lg lg:text-xl font-medium w-full focus:outline-none border border-quaternary bg-quaternary/30 focus:border-2 ${errors.message ? ' border-red-300 ' : ' focus:border-primary'}`}>
                    </textarea>
                    <span className="absolute right-0 -bottom-6 text-sm text-red-300">
                        {errors.message && errors.message.message}
                    </span>
                </div>
                
                <button type='submit' className="flex gap-x-1 justify-center items-center lg:cursor-pointer lg:hover:bg-tertiary/70 rounded px-2 py-1 w-[30%] min-w-max mx-auto bg-tertiary text-[#DCDCDD] font-medium text-xl lg:text-[1.4rem]" >
                    {isLoading ?<> {currentLanguage && languageData[currentLanguage].form.sending } <Spinner /> </>: currentLanguage && languageData[currentLanguage].form.send}
                </button>
            </form>
            <FormModal setIsOpen={setIsOpen} isOpen={isOpen} isError={isError} setIsError={setIsError} currentLanguage={currentLanguage} languageData={languageData}/>
        </>
    )
}
