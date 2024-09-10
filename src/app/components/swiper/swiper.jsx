'use client'

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  } from 'swiper/modules';
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function SwiperSlideshow() 
{ 
    return (
    <Swiper loop={true} className="h-auto lg:w-4/5 w-full flex items-stretch">
        <SwiperSlide className="h-auto w-full p-2">
            <div className="flex lg:flex-row flex-col h-full w-full rounded-2xl overflow-hidden shadow gap-8 justify-between bg-purple-50">
                <aside className="lg:flex-1 flex flex-col items-center lg:justify-center p-8">
                    <h2 className="font-bold text-blue-600 text-xl m-2 lg:w-3/4 w-full">
                        Art Design
                    </h2>
                    <ul className="list-disc ml-4 lg:w-3/4 text-lg">
                        <li>Improve clarity and resolution for canvas printing.</li>
                        <li>Blow up photos for posters, presentations, etc.</li>
                        <li>Create the best quality photos on large-size canvases</li>
                    </ul>
                </aside>
                <aside className="flex-1 flex items-center justify-center lg:pb-0 p-4">
                    <img src="art-1.jpg" className="lg:block hidden w-full h-full object-contain"></img>
                    <img src="art-2.jpg" className="lg:hidden block w-full h-full object-contain"></img>
                </aside>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className="h-auto w-full p-2">
            <div className="flex lg:flex-row flex-col h-full w-full rounded-2xl overflow-hidden shadow gap-8 justify-between bg-indigo-50">
                <aside className="lg:flex-1 flex flex-col items-center lg:justify-center p-8">
                    <h2 className="font-bold text-blue-600 text-xl m-2 lg:w-3/4 w-full">
                        Social Media
                    </h2>
                    <ul className="list-disc ml-4 lg:w-3/4 text-lg">
                        <li>Enhance your photographs taken on camera</li>
                        <li>Recover details into your photos</li>
                        <li>Gain more likes on Facebook, Instagram, etc.</li>
                    </ul>
                </aside>
                <aside className="flex-1 flex items-center justify-center lg:pb-0 pb-4">
                    <img src="sm-1.jpg" className="lg:block hidden w-full h-full object-contain"></img>
                    <img src="sm-2.jpg" className="lg:hidden block w-full h-full object-contain"></img>
                </aside>
            </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto w-full p-2">
            <div className="flex lg:flex-row flex-col h-full w-full rounded-2xl overflow-hidden shadow gap-8 justify-between bg-green-50">
                <aside className="lg:flex-1 flex flex-col items-center lg:justify-center p-8">
                    <h2 className="font-bold text-xl m-2 lg:w-3/4 w-full">
                        eCommerce
                    </h2>
                    <ul className="list-disc ml-4 lg:w-3/4 text-lg">
                        <li>Boost sales with high quality product photos</li>
                        <li>Make customer photos clear for DIY products</li>
                        <li>Meet pixel requirements of any marketplace</li>
                    </ul>
                </aside>
                <aside className="flex-1 flex items-center justify-center lg:pb-0 pb-4">
                    <img src="ec-1.jpg" className="lg:block hidden w-full h-full object-contain"></img>
                    <img src="ec-2.jpg" className="lg:hidden block w-full h-full object-contain"></img>
                </aside>
            </div>
        </SwiperSlide>
      </Swiper>
    )
}


export function SwiperReviewsSlideshow() {
    return (
        <Swiper navigation={true} loop={true}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
            780: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
         modules={[Pagination]}
         className="w-full h-full">
            <SwiperSlide className="p-4">
                <div className="relative w-full h-full flex flex-col justify-between p-8 shadow rounded-xl bg-white">
                    <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-4 left-4 opacity-50 text-2xl"></FontAwesomeIcon>
                    <p className="flex-1">GIMP and Photoshop are OK if you only have to do one or two photos per day, but doing 500 photos this way is not easy. PicWish software handles this well.</p>
                    <div className="h-12 flex gap-4">
                        <div>
                            <img className="h-full" src="sample_user.webp"></img>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm sm:text-base font-bold">Sample User Name</p>
                            <p className="text-sm sm:text-base">Sample User Position</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="p-4">
                <div className="relative w-full h-full flex flex-col justify-between p-8 shadow rounded-xl bg-white">
                    <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-4 left-4 opacity-50 text-2xl"></FontAwesomeIcon>
                    <p className="flex-1">GIMP and Photoshop are OK if you only have to do one or two photos per day, but doing 500 photos this way is not easy. PicWish software handles this well.</p>
                    <div className="h-12 flex gap-4">
                        <div>
                            <img className="h-full" src="sample_user.webp"></img>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm sm:text-base font-bold">Sample User Name</p>
                            <p className="text-sm sm:text-base">Sample User Position</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
                <div className="relative w-full h-full flex flex-col justify-between p-8 shadow rounded-xl bg-white">
                    <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-4 left-4 opacity-50 text-2xl"></FontAwesomeIcon>
                    <p className="flex-1">GIMP and Photoshop are OK if you only have to do one or two photos per day, but doing 500 photos this way is not easy. PicWish software handles this well.</p>
                    <div className="h-12 flex gap-4">
                        <div>
                            <img className="h-full" src="sample_user.webp"></img>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm sm:text-base font-bold">Sample User Name</p>
                            <p className="text-sm sm:text-base">Sample User Position</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                Example
            </SwiperSlide>
        </Swiper>
    )
}