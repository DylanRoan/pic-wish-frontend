'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import WindowsDownload from "../app-download/app-download"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faDownload, faMagnifyingGlass, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faUpload, faX } from "@fortawesome/free-solid-svg-icons"
import { disableBodyScroll } from "body-scroll-lock"
import { useRouter } from "next/navigation"

export default function EnhanceImageSection({ children }) {
    const [file, setFile] = useState(null)
    const [fileSrc, setFileSrc] = useState(null)
    const [receivedFile, setReceivedFile] = useState(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [magnifyCompare, setMagnifyCompare] = useState(false)

    const router = useRouter()

    const onFileChange = async (e) => {
        const selectedFile = e.target.files[0]

        const jwt_token = localStorage.getItem('jwt_token')
        if (jwt_token === null)
        {
            router.push('/login')
            return
        }

        //state checking
        if (loading) return
        setLoading(true)

        //reset
        setError('')
        setFile(null)
        setFileSrc(null)
        setReceivedFile(null)
        
        //check if file exists
        if (!selectedFile) {
          setError('Please select a file')
          setLoading(false)
          return
        }
        
        //check if mime is image
        if (!selectedFile.type.match('image.*')) {
          setError('Please select an image file')
          setLoading(false)
          return
        }
        
        //check if size is less than 10mb
        if (selectedFile.size > 10 * 1024 * 1024) {
          setError('File size exceeds 10MB limit')
          setLoading(false)
          return
        }

        //set original image src
        const fileSrc = URL.createObjectURL(selectedFile)
        setFileSrc(fileSrc)

        //check if dimensions are less than 1000
        const checkImg = new Image()
        checkImg.src = fileSrc
        checkImg.onload = () => {
            if (checkImg.width > 1000 || checkImg.height > 1000)
            {
                setError('Image dimension exceeds 1000 px')
                setLoading(false)
                return
            }

            //set the file
            setFile(selectedFile)

            //request enhanced image
            requestEnhance(selectedFile)
        }
    }

    async function requestEnhance(selectedFile) {
        //Get user token
        const jwt_token = localStorage.getItem('jwt_token')

        //convert image to base 64 string
        //data:image/png;base64,${base64String}
        let base64String = await convertToBase64(selectedFile)

        //make post body
        const body = {
            image: base64String
        }

        //make post request to API
        try {
            await fetch('https://v1.test.socket.araby.ai/enhance-image', {
                method: 'POST',
                headers: {
                    'Authorization': jwt_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(data => {
                if (data.error === true)
                {
                    setError(data.message)
                    return
                }
                if (!data.status)
                {
                    setError(data.error[0])
                    return
                }
                setReceivedFile(data.urls[0])
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const convertToBase64 = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    if (!file)
        return <BaseSection onFileChange={onFileChange} error={error}></BaseSection>
    
    return (
        <section className="flex items-center justify-center lg:pt-[100px] pt-[75px] w-full lg:p-8">
            { magnifyCompare && (<ZoomCompare firstImg={fileSrc} secondImg={receivedFile} enable={setMagnifyCompare}></ZoomCompare>)}
            <div className="relative flex lg:flex-row flex-col lg:w-4/5 w-full bg-white shadow-xl lg:rounded-2xl lg:p-8 lg:gap-8">
                <div onClick={() => setFile(null)} className="cursor-pointer absolute top-4 right-4 z-10 rounded-full hover:bg-red-400 bg-gray-200 text-white p-2 h-8 w-8 flex items-center justify-center">
                    <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                </div>
                <div className="lg:w-3/5">
                {
                    loading && (
                    <div className="w-full h-full relative">
                        <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
                            <div role="status">
                                <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <img src={fileSrc} className="w-full h-full"></img>
                    </div>
                    )
                }
                {
                    receivedFile && (
                        <div className="relative">
                            <div onClick={() => setMagnifyCompare(true)} className="cursor-pointer absolute top-2 left-2 z-10 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-black hover:-translate-y-1 transition-all duration-200 ease-in-out">
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </div>
                            <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={fileSrc}></ReactCompareSliderImage>}
                            itemTwo={<ReactCompareSliderImage src={receivedFile}></ReactCompareSliderImage>}></ReactCompareSlider>
                        </div>
                    )
                }
                </div>
                <div className="lg:w-2/5 flex flex-col items-center justify-center gap-8 lg:p-none p-8">
                    <h1 className="font-bold text-2xl">Image Enhancer</h1>
                    <label htmlFor="file_upload" className="relative cursor-pointer flex flex-col items-center justify-center bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 rounded-full min-h transition-all duration-200 ease-in-out p-4 hover:-translate-y-1">
                        <p className='text-white font-bold text-sm'><FontAwesomeIcon icon={faUpload} className="mr-1" />Upload Image</p>
                        { error && (<p className="absolute -bottom-1/3 text-red-600 font-bold text-sm">{error}</p>)}
                    </label>
                    <input type="file" id="file_upload" name="file_upload" onChange={onFileChange} hidden={true}></input>
                    {/* TODO | Download should change file name */}
                    {
                        receivedFile && (
                        <a href={receivedFile} download={'enhanced'} className="p-4 text-sm text-white font-bold rounded-full bg-gradient-to-r hover:bg-gradient-to-l hover:-translate-y-1 from-blue-400 to-blue-600 transition-all ease-in-out duration-200">
                            <FontAwesomeIcon icon={faDownload} className="mr-1"></FontAwesomeIcon>
                            Download Image
                        </a>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

function ZoomCompare({ firstImg, secondImg, enable }) {
    const [zoom, setZoom] = useState(100)
    const WheelEvent = (e) => {
        if (e.deltaY < 0 && zoom < 1000)
            setZoom(zoom + 10)
        if (e.deltaY > 0 && zoom > 15)
            setZoom(zoom - 10)
    }

    const [mouseDown, setMouseDown] = useState(false)
    const MouseDown = (e) => { setMouseDown(true) }
    const MouseUp = (e) => { setMouseDown(false) }

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const MouseMove = (e) => {
        if (mouseDown)
        {
            setX(x + e.movementX )
            setY(y + e.movementY )
        }
    }

    useEffect(() => {
        //disableBodyScroll(document.getElementById('compare_magnify_modal'))
    }, [])

    return (
        <div id="compare_magnify_modal" onWheelCapture={WheelEvent} onMouseMove={MouseMove} onMouseDown={MouseDown} onMouseUp={MouseUp} className="fixed z-50 w-screen h-screen bg-black bg-opacity-50 top-0 right-0 lg:flex hidden items-center justify-center gap-4 p-12">
            <div onClick={() => enable(false)} className="cursor-pointer absolute top-8 right-8 h-12 w-12 hover:bg-gray-600 bg-gray-400 z-10 rounded-full text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
            </div>

            <div className="flex-1 relative w-full h-full bg-black overflow-hidden">
                <img draggable={false} style={{scale: `${zoom}%`, left: `${x}%`, top: `${y}%`}} className="w-full h-full object-contain absolute" src={firstImg}></img>
            </div>

            <div className="flex-1 relative w-full h-full bg-black overflow-hidden">
                <img draggable={false} style={{scale: `${zoom}%`, left: `${x}%`, top: `${y}%`}} className="w-full h-full object-contain absolute" src={secondImg}></img>
            </div>

            <div className="absolute bottom-4 z-10 rounded-full bg-gray-500 shadow p-2 text-white flex gap-2 items-center justify-center">
                <FontAwesomeIcon className="cursor-pointer" onClick={() => setZoom(zoom - 10)} icon={faMagnifyingGlassMinus}></FontAwesomeIcon>
                <p>Zoom: {zoom}%</p>
                <FontAwesomeIcon className="cursor-pointer" onClick={() => setZoom(zoom + 10)} icon={faMagnifyingGlassPlus}></FontAwesomeIcon>
            </div>
        </div>
    )
}


function BaseSection({ onFileChange, error })
{
    return (
    <section className="flex flex-col items-center lg:pt-[180px] pt-[50px] w-full">
        {/* App ad / Hide on desktop */}
        <section className="lg:hidden w-full flex bg-gradient-to-l from-blue-600 to-blue-400 p-6 flex items-center justify-between mb-[75px]">
        <div className="flex gap-4">
            <img src="picwishapp.svg"></img>
            <div>
            <h3 className="text-sm text-white font-bold">PicWish - AI Photo Editor</h3>
            <img src="https://cfcdn.apowersoft.info/astro/picwish/_astro/index-top-banner-star.dd8cfacc.svg"></img>
            <p className="text-xs text-white">Download on Play Store</p>
            </div>
        </div>
        <a className="text-blue-600 text-xs bg-white p-2 rounded-2xl font-bold w-24 text-center">Free Trial</a>
        </section>
        
        {/* Download link / web tools link */}
        <section className="flex lg:flex-row flex-col gap-8 w-[90%]">
        <aside className="flex-1 flex flex-col justify-center lg:items-baseline items-center">
            <h1 className="lg:text-left text-center lg:text-5xl text-3xl font-bold">AI Photo Enhancer<br></br><span className="text-blue-600">Free to Use</span>
            </h1>
            <p className="lg:text-left text-center text-base my-8 opacity-50 font-medium w-4/5">Make blurry picture clear in seconds with PicWish AI photo enhancer. Improve image resolution and quality effortlessly.</p>
            <div className="flex lg:flex-row flex-col gap-6 items-center w-full">

                <label htmlFor="file_upload" className="cursor-pointer relative flex-1 flex flex-col items-center justify-center web-link bg-gradient-to-r hover:bg-gradient-to-l from-blue-200 to-blue-600 rounded-full lg:w-auto w-[250px] min-h transition-all duration-200 ease-in-out px-2 py-2">
                    <p className='text-xl text-white font-bold'><FontAwesomeIcon icon={faUpload} className="mr-1" />Upload Image</p>
                    <p className="text-xs text-white lg:block hidden">Drop, past image, or URL</p>
                    { error && (<p className="absolute -bottom-1/3 text-red-600 font-bold text-sm">{error}</p>)}
                </label>
                <input type="file" id="file_upload" name="file_upload" onChange={onFileChange} hidden={true}></input>

                <button className="flex-1 lg:hidden block google-play bg-black rounded-full lg:w-auto w-[250px] text-white flex items-center justify-center gap-5 py-2">
                    <img src="googleplay.svg" className="h-full w-8"></img>
                    <div className="text-left">
                    <p className="text-sm whitespace-nowrap">Get it on</p>
                    <p className="text-lg whitespace-nowrap">Google Play</p>
                    </div>
                </button>
                <WindowsDownload></WindowsDownload>
            </div>
        </aside>
        <aside className="flex-1 flex items-center justify-center ">
            <div className="border-2 border-solid border-white shadow rounded-3xl overflow-hidden">
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/banner-img-before.f02572d6.png" alt="1"></ReactCompareSliderImage>}
                itemTwo={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/banner-img-after.a6d47906.png" alt="2" ></ReactCompareSliderImage>}
                
                className="w-full h-full"></ReactCompareSlider>
            </div>
        </aside>
        </section>
        
        {/* Displayed data */}
        <section className="w-[90%] my-24 py-8 rounded-2xl border-[1px] border-solid border-white flex lg:flex-row flex-col justify-center items-center shadow backdrop-blur-xl backdrop-filter">
            <div className="w-max my-6 mx-8 flex flex-col items-center">
            <div className="font-bold text-base"><span className="text-4xl">120</span>M+</div>
            <div className="text-sm text-center">Images Processed</div>
            </div>

            <div className="w-max my-6 mx-8 flex flex-col items-center">
            <div className="font-bold text-base"><span className="text-4xl">37</span>M+</div>
            <div className="text-sm text-center">Happy Users</div>
            </div>

            <div className="w-max my-6 mx-8 flex flex-col items-center">
            <div className="font-bold text-base"><span className="text-4xl">3</span>Secs</div>
            <div className="text-sm text-center">AI Processing</div>
            </div>

            <div className="w-max my-6 mx-8 flex flex-col items-center">
            <div className="font-bold text-base"><span className="text-4xl">10</span>X</div>
            <div className="text-sm text-center">Faster Photo Editing</div>
            </div>
        </section>
    </section>
    )
}