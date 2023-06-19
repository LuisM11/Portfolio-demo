
export default function LanguageMenu() {
  const { currentLanguage, setcurrentLanguage } = useGlobalContext();
  const selectLanguage = useCallback((language) => {
    setcurrentLanguage(language);
    localStorage.setItem('language', language);
  }, [])

  return (
    <Popover className="relative h-1/2 my-auto">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "text-primary " : "text-white"}
                group flex items-end min-w-max px-4 mr-2 rounded-md  focus focus:rinf focus:outline-none `}
          >
            <LanguageIcon className={`${open ? " " : ""} group-hover:text-primary inline w-8 lg:w-7  `} />
            <span className={`${open ? "" : ""} font-light text-base group-hover:text-primary`}> {currentLanguage}</span>
            <ChevronDownIcon
              className={`${open ? "-rotate-180" : ""}
                 inline w-5  transition-transform duration-200 ease-in-out group-hover:text-primary`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-[42%] z-10 mt-3  w-full min-w-max -translate-x-1/2  ">
              {({ close }) => (
                <ul className="shadow-quaternary shadow-sup-out-1 border-white bg-secondary font-normal text-white text-base p-2 rounded-lg  grid grid-rows-2 gap-1  ">
                  <li onClick={() => selectLanguage('es')} className={ `cursor-pointer px-2 py-1 rounded flex w-full space-x-0.5 ${ currentLanguage ==='es' ? "bg-tertiary":" hover:bg-quaternary "}`}>
                    <SpainIcon width={'20px'} />
                    <span>{languageData[currentLanguage].languageMenu.spanish}</span>
                  </li>
                  <li onClick={() => selectLanguage('en')} className={`cursor-pointer px-2 py-1 rounded flex w-full space-x-1 ${ currentLanguage ==='en' ? "bg-tertiary":" hover:bg-quaternary"}`}>
                    <BritainIcon width={'19px'} />
                    <span>{languageData[currentLanguage].languageMenu.english}</span>
                  </li>
                </ul>
              )}

            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

