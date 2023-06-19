/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import {  Fragment } from 'react'

export const FormModal = ({setIsOpen,isOpen,isError,setIsError,currentLanguage, languageData}) => {
    

    function closeModal() {
        setIsOpen(false)
        setTimeout(() => {
            setIsError(false)
        }, 1000);
    }

    return (
        
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-quaternary/40 backdrop-blur" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden flex flex-col gap-y-1 rounded-2xl bg-secondary   p-6 shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className={`text-lg font-bold text-center ${isError ? 'text-red-500':' text-primary'}`}
                                    >
                                        {isError ? (currentLanguage && languageData[currentLanguage].modal.error): (currentLanguage && languageData[currentLanguage].modal.title)} 
                                    </Dialog.Title>

                                    <p className="text text-center text-white">
                                    {isError ? (currentLanguage && languageData[currentLanguage].modal.errormsg): (currentLanguage && languageData[currentLanguage].modal.message)}
                                    </p>

                                    <button
                                        type="button"
                                        className="block w-max mx-auto mt-2 rounded-md border border-primary bg-secondary px-4 py-2  font-medium text-primary hover:bg-primary hover:text-secondary focus-visible:outline-none "
                                        onClick={closeModal}
                                    >
                                        {currentLanguage && languageData[currentLanguage].modal.button}
                                    </button>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        
    )
}
