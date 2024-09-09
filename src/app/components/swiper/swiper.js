'use client'

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";

export default function SwiperSlideshow() 
{
    return (
    <Swiper loop={true} className="h-full w-4/5">
        <SwiperSlide className="h-full w-full">
            <div className="flex h-full w-full bg-blue-200 rounded-2xl p-4">
                <aside className="flex-1 flex flex-col">
                    <h2>Art Design</h2>
                    <ul className="">
                        <li>Improve clarity and resolution for canvas printing.</li>
                        <li>Blow up photos for posters, presentations, etc.</li>
                        <li>Create the best quality photos on large-size canvases</li>
                    </ul>
                </aside>
                <aside className="flex-1 lg:block hidden">
                    Image
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
        breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
         modules={[Navigation]}
         className="w-full h-full m-4">
            <SwiperSlide>
                <div className="w-full h-[90%] flex flex-col justify-between p-4 shadow ">
                    <p className="flex-1">GIMP and Photoshop are OK if you only have to do one or two photos per day, but doing 500 photos this way is not easy. PicWish software handles this well.</p>
                    <div className="h-12 flex gap-4">
                        <div>
                            <img className="h-full" src="sample_user.webp"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Sample User Name</p>
                            <p>Sample User Position</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="w-full h-[90%] flex flex-col justify-between p-4 shadow ">
                    <p className="flex-1">GIMP and Photoshop are OK if you only have to do one or two photos per day, but doing 500 photos this way is not easy. PicWish software handles this well.</p>
                    <div className="h-12 flex gap-4">
                        <div>
                            <img className="h-full" src="sample_user.webp"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Sample User Name</p>
                            <p>Sample User Position</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="w-full h-[90%] flex flex-col justify-between p-4 shadow ">
                    <p className="flex-1">GIMP and Photoshop are OK if you only have to do one or two photos per day, but doing 500 photos this way is not easy. PicWish software handles this well.</p>
                    <div className="h-12 flex gap-4">
                        <div>
                            <img className="h-full" src="sample_user.webp"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Sample User Name</p>
                            <p>Sample User Position</p>
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