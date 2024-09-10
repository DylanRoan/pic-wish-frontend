'use client'

import { faWindows } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function WindowsDownload() {
    const [hover, setHover] = useState(false)

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  className="lg:block hidden relative flex-1 lg:w-auto w-[200px] cursor-pointer">
            <a className={`group relative flex flex-col justify-center align-center overflow-hidden transition-all duration-200 ease-in-out text-blue-600 border-blue-600 border-2 rounded-full p-2 ${hover ? 'border-transparent -translate-y-[5px] text-white' : ''}`}>
                <div className={`z-0 absolute h-full w-full transition-transform duration-200 ease-in-out -translate-x-[105%] ${hover ? '-translate-x-[8px]' : ''} bg-gradient-to-r from-blue-200 to-blue-600`}></div>
                <p className='z-10 text-lg font-bold text-center'><FontAwesomeIcon icon={faWindows}className="mr-1" />Download</p>
                <p className="z-10 text-xs text-center">Bulk edit</p>
            </a>
            <aside className={`${hover ? 'flex' : 'hidden'} justify-center left-2/4 -translate-x-2/4 bg-transparent absolute bottom-0 pb-20 z-10`}>
                    <div className="w-[500px] bg-white shadow rounded-xl p-4 flex flex-col">
                        <p className="text-center text-blue-600">Download PicWish for higher productivity</p>
                        <div className="grid grid-cols-4 gap-8 text-black h-20 my-4">
                        <a className="flex flex-col group overflow-hidden hover:border-blue-600 border-white border-2 rounded-xl">
                                <div className="flex-1 relative">
                                    <div className="w-full h-full absolute scale-100 group-hover:scale-0 opacity-100 group-hover:opacity-0 transition-all duration-200 ease-in-out p-4 -translate-y-4" ><FontAwesomeIcon className="w-full h-full" icon={faWindows}></FontAwesomeIcon></div>
                                    <div className="w-full h-full absolute scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out p-4 -translate-y-2" ><FontAwesomeIcon className="w-full h-full" icon={faDownload}></FontAwesomeIcon></div>
                                </div>
                                <div className="relative text-xs text-center">
                                    <p className="absolute group-hover:-top-0 -top-5 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Windows</p>
                                    <p className="absolute group-hover:-top-5 -top-0 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Click Here</p>
                                </div>
                            </a>

                            <a className="flex flex-col group overflow-hidden hover:border-blue-600 border-white border-2 rounded-xl">
                                <div className="flex-1 relative">
                                    <div className="w-full h-full absolute scale-100 group-hover:scale-0 opacity-100 group-hover:opacity-0 transition-all duration-200 ease-in-out p-4 -translate-y-4" ><FontAwesomeIcon className="w-full h-full" icon={faWindows}></FontAwesomeIcon></div>
                                    <div className="w-full h-full absolute scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out p-4 -translate-y-2" ><FontAwesomeIcon className="w-full h-full" icon={faDownload}></FontAwesomeIcon></div>
                                </div>
                                <div className="relative text-xs text-center">
                                    <p className="absolute group-hover:-top-0 -top-5 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Windows</p>
                                    <p className="absolute group-hover:-top-5 -top-0 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Click Here</p>
                                </div>
                            </a>

                            <a className="flex flex-col group overflow-hidden hover:border-blue-600 border-white border-2 rounded-xl">
                                <div className="flex-1 relative">
                                    <div className="w-full h-full absolute scale-100 group-hover:scale-0 opacity-100 group-hover:opacity-0 transition-all duration-200 ease-in-out p-4 -translate-y-4" ><FontAwesomeIcon className="w-full h-full" icon={faWindows}></FontAwesomeIcon></div>
                                    <div className="w-full h-full absolute scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out p-4 -translate-y-2" ><FontAwesomeIcon className="w-full h-full" icon={faDownload}></FontAwesomeIcon></div>
                                </div>
                                <div className="relative text-xs text-center">
                                    <p className="absolute group-hover:-top-0 -top-5 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Windows</p>
                                    <p className="absolute group-hover:-top-5 -top-0 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Click Here</p>
                                </div>
                            </a>

                            <a className="flex flex-col group overflow-hidden hover:border-blue-600 border-white border-2 rounded-xl">
                                <div className="flex-1 relative">
                                    <div className="w-full h-full absolute scale-100 group-hover:scale-0 opacity-100 group-hover:opacity-0 transition-all duration-200 ease-in-out p-4 -translate-y-4" ><FontAwesomeIcon className="w-full h-full" icon={faWindows}></FontAwesomeIcon></div>
                                    <div className="w-full h-full absolute scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out p-4 -translate-y-2" ><FontAwesomeIcon className="w-full h-full" icon={faDownload}></FontAwesomeIcon></div>
                                </div>
                                <div className="relative text-xs text-center">
                                    <p className="absolute group-hover:-top-0 -top-5 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Windows</p>
                                    <p className="absolute group-hover:-top-5 -top-0 left-2/4 -translate-x-2/4 transition-all duration-200 ease-in-out">Click Here</p>
                                </div>
                            </a>
                        </div>
                    </div>
            </aside>
        </div>
    )
}