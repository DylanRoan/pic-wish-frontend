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
    <Swiper loop={true} className="h-full lg:w-4/5 w-full">
        <SwiperSlide className="h-full w-full p-2">
            <div className="flex h-full w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-200 via-indigo-100 to-blue-100 shadow">
                <aside className="flex-1 flex flex-col p-4 items-center lg:justify-center">
                    <h2 className="font-bold text-blue-600 text-xl m-2 lg:w-2/4 w-full">
                        Art Design
                    </h2>
                    <ul className="list-disc ml-4 lg:w-2/4 text-lg">
                        <li>Improve clarity and resolution for canvas printing.</li>
                        <li>Blow up photos for posters, presentations, etc.</li>
                        <li>Create the best quality photos on large-size canvases</li>
                    </ul>
                </aside>
                <aside className="flex-1 lg:flex hidden items-center justify-center">
                    <img src="ai-img-after.jpg" className="w-3/4 h-3/4 object-cover object-center rounded-xl"></img>
                </aside>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            Example
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