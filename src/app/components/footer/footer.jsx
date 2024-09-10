import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <section className="py-8 px-12 flex lg:flex-row flex-col lg:h-96 h-auto lg:justify-between gap-4">
                <section className="lg:flex-1 flex flex-col gap-4">
                    <div>
                        <img src="https://cfcdn.apowersoft.info/astro/picwish/_astro/logo-en.9dfbfa39.svg" className="h-8"></img>
                    </div>
                    <div className="flex gap-4 h-6">
                        <FontAwesomeIcon className="h-full opacity-50" icon={faTiktok}></FontAwesomeIcon>
                        
                        <FontAwesomeIcon className="h-full opacity-50" icon={faFacebook}></FontAwesomeIcon>
                        
                        <FontAwesomeIcon className="h-full opacity-50" icon={faInstagram}></FontAwesomeIcon>

                        <FontAwesomeIcon className="h-full opacity-50" icon={faYoutube}></FontAwesomeIcon>
                    </div>
                    <div className="flex gap-2">
                        <label for="language">Language:</label>
                        <select className="text-black" id="language" name="language">
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </div>
                </section>

                <section className="lg:flex-1 flex flex-col gap-4">
                    <h3 className="font-bold text-lg my-2">AI Tools</h3>
                    <a className="">AI Background Generator</a>
                    <a className="">AI Art Generator</a>
                    <a className="">Other AI Tools | TODO</a>
                </section>
                
                <section className="lg:flex-1 flex flex-col gap-4">
                    <h3 className="font-bold text-lg my-2">Tools</h3>
                    <a className="">Background Remover</a>
                    <a className="">Image Enlarger</a>
                    <a className="">Photo Retouch</a>
                    <a className="">JPG Converter</a>
                </section>
                
                <section className="lg:flex-1 flex flex-col gap-4">
                    <h3 className="lg:block hidden font-bold text-lg my-2 text-black">Tools</h3>
                    <a className="">Image Compressor</a>
                    <a className="">Face Enhancement</a>
                    <a className="">Hhoto Enhancer</a>
                    <a className="">Image to Text</a>
                    <a className="">Toolbox</a>
                </section>

                <section className="lg:flex-1 flex flex-col gap-4">
                    <h3 className="font-bold text-lg my-2">Help & FAQs</h3>
                    <a className="">FAQ</a>
                    <a className="">Resources</a>
                    <a className="">Contact Us</a>
                </section>

                <section className="lg:flex-1 flex flex-col gap-4">
                    <h3 className="font-bold text-lg my-2">Company</h3>
                    <a className="">About Us</a>
                </section>
            </section>
            <section className="text-center opacity-50">
                <p className="inline-block">Copyright © 2024 PicWish All Rights Reserved.</p>
                <a className="border-r px-2 border-solid border-white hover:text-indigo-600">Terms</a>
                
                <a className="border-r px-2 border-solid border-white hover:text-indigo-600">Privacy</a>
                
                <a className="border-r px-2 border-solid border-white hover:text-indigo-600">Cookies Policy</a>

                <a className="px-2 hover:text-indigo-600">License Agreement</a>
            </section>
        </footer>
    )
}