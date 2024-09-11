import { faArrowRight, faCommentDots, faThumbsUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import './style.scss'
import { faGooglePlay, faWindows } from "@fortawesome/free-brands-svg-icons";
import SwiperSlideshow, { SwiperReviewsSlideshow } from "../components/swiper/swiper";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import WindowsDownload from "../components/app-download/app-download";
import EnhanceImageSection from "../components/enhance-image-page/enhance-image";


export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center relative bg-gradient-to-br from-indigo-100 via-white to-blue-100">

      {/* Chat icon for mobile layouts */}
      <div className="fixed z-10 bottom-4 right-4 h-16 w-16 bg-blue-400 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={faCommentDots} className="w-full text-white"></FontAwesomeIcon>
      </div>

      {/* Main Section */}
      <EnhanceImageSection></EnhanceImageSection>
      

      {/* AI Enhancer */}
      <section className="flex lg:flex-row flex-col-reverse items-center py-12 gap-4">
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="ai-img-before.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="ai-img-after.jpg" alt="2"></ReactCompareSliderImage>}
            className="w-full h-full overflow-hidden border-2px border-solid border-white rounded-2xl">
          </ReactCompareSlider>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_ai.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold">Pro-Level <span className="text-blue-600">AI Photo Enhancer</span></h1>
            <p>Using our AI image enhancer tool, you can now easily unblur images online with one click. Powered by AI enhancement algorithms, PicWish photo enhancer helps to perfect and sharpen photos in no time. Enhance image into twice or four times total pixel count for a brilliant result.</p>
          </div>
        </aside>
      </section>
      {/* No Quality Loss */}
      <section className="flex lg:flex-row flex-col items-center py-12 gap-4  bg-gradient-to-br from-indigo-100 to-blue-50">
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_enhance.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold"><span className="text-blue-600">Enhance Photos</span> Without Losing Quality</h1>
            <p>PicWish&apos;s AI enhancement tool excels at elevating the resolution of any image, whether it&apos;s a portrait, product shot, or graphic. Instantly convert pixelated pictures into stunning high-definition quality and upscale images in seconds. No expert setup or photo editing skills are required!</p>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/blur-img-before-en.30fd7142.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/blur-img-after-en.210717a7.png" alt="2"></ReactCompareSliderImage>}
            className="w-full h-full overflow-hidden border-2px border-solid border-white rounded-2xl">
          </ReactCompareSlider>
          </div>
        </aside>
      </section>
      {/* Anime Enhancer */}
      <section className="flex lg:flex-row flex-col-reverse items-center py-12 gap-4">
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/anime-img-before.ba2638cb.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/anime-img-after.6090448c.png" alt="2"></ReactCompareSliderImage>}
            className="w-full h-full overflow-hidden border-2px border-solid border-white rounded-2xl">
          </ReactCompareSlider>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_anime_enhance.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold">Photo Enhancer for <span className="text-blue-600">Anime</span></h1>
            <p>Don&apos;t let low resolution ruin your cherished anime posters or wallpapers. Here you can easily transform a 480p anime image into superb HD quality with minimal effort. In just one single click, upscale anime quality without any blurring and enhance your loved details to the next level.</p>
          </div>
        </aside>
      </section>
      {/* Portrait Enhancer */}
      <section className="flex lg:flex-row flex-col items-center py-12 gap-4 bg-gradient-to-br from-indigo-100 to-blue-50">
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_portrait_enhance.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold"><span className="text-blue-600">Enhance Portrait</span> Photos Online</h1>
            <p>PicWish AI photo enhancer breathes new life into every portrait photo. Instantly improve portrait clarity using advanced face enhancement technology for photographs that are underexposed, out-of-focus, or blurred due to shaking hands.</p>
            <a className="font-bold underline text-color-blue"></a>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/portrait-img-before.738c1401.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="https://cfcdn.apowersoft.info/astro/picwish/_astro/portrait-img-after.640a76d2.png" alt="2"></ReactCompareSliderImage>}
            className="w-full h-full overflow-hidden border-2px border-solid border-white rounded-2xl">
          </ReactCompareSlider>
          </div>
        </aside>
      </section>

      {/* Slideshow - product enhancement */}
      <section className="flex flex-col items-center justify-center h-auto p-12">
        <h1 className="text-center lg:text-4xl text-2xl font-bold lg:w-2/4 w-3/4"><span className="text-blue-600">Automatically enhance</span> your images for personal and business needs</h1>
        <section className="my-8 mx-4 lg:h-96 h-auto w-screen flex items-center justify-center">
          <SwiperSlideshow></SwiperSlideshow>
        </section>
      </section>
      {/* Draggable - User reviews */}
      <section className="flex flex-col items-center justify-center h-auto w-full mb-12">
        <h1 className="lg:text-4xl text-2xl font-bold px-12">Over <span className="text-blue-600">100000+</span> users worldwide use PicWish</h1>
        <p className="px-12 mt-4">Ecommerce merchants, influencers, developers, and educational agencies use PicWish to boost their productivity.</p>
        <section className="p-4 w-full h-96">
          <SwiperReviewsSlideshow></SwiperReviewsSlideshow>
        </section>
        <section className="w-full relative flex flex-col items-center">
          <div className="h-10 md:h-20 w-full">
            <div id="marque-brands" className="w-full h-full"></div>
          </div>
          <div className="absolute h-full w-32 left-0 bg-gradient-to-l from-transparent to-indigo-50"></div>
          <div className="absolute h-full w-32 right-0 bg-gradient-to-r from-transparent to-indigo-50"></div>
        </section>
        <p className="opacity-50 mt-4 text-center px-4">※The users and collaborators displayed are for reference only.</p>
      </section>

      {/* Posts */}
      <section className="flex flex-col lg:w-4/5 mb-12">
        <h1 className="lg:text-4xl text-2xl font-bold px-8">Posts | Sharpen image and do more</h1>
        <section className="flex lg:flex-row flex-col mt-7 mb-1 gap-8 justify-center items-center">
        <a className="flex flex-col rounded-2xl overflow-hidden shadow lg:w-1/4 w-3/4 bg-white">
            <img className="object-cover" src="https://picwish.com/wp-content/uploads/2024/09/featured-take-pictures-of-the-moon-with-iphone.jpg"></img>
            <p className="p-4">Capturing the Moon: iPhone Photography Tips and Tricks</p>
          </a>

          <a className="flex flex-col rounded-2xl overflow-hidden shadow lg:w-1/4 w-3/4 bg-white">
            <img className="object-cover" src="https://picwish.com/wp-content/uploads/2024/09/featured-take-pictures-of-the-moon-with-iphone.jpg"></img>
            <p className="p-4">Capturing the Moon: iPhone Photography Tips and Tricks</p>
          </a>

          <a className="flex flex-col rounded-2xl overflow-hidden shadow lg:w-1/4 w-3/4 bg-white">
            <img className="object-cover" src="https://picwish.com/wp-content/uploads/2024/09/featured-take-pictures-of-the-moon-with-iphone.jpg"></img>
            <p className="p-4">Capturing the Moon: iPhone Photography Tips and Tricks</p>
          </a>
          
        </section>
        <a className="text-right mr-12 mt-4">See more posts <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
      </section>

      {/* API */}
      <section className="relative w-full flex justify-center">
        <section className="absolute z-10 w-4/5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl lg:p-12 p-4 flex lg:flex-row flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-white">Interested in our photo enhancer API?</h1>
            <p className="opacity-70 text-white my-4">Process images automatically in bulk. Speed up your workflow using PicWish API! With just a few lines of code, you can bring this technology into your application.</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <button className="text-blue-600 bg-white p-4 font-bold rounded-full">Access to API</button>
          </div>
        </section>
      </section>

      {/* Start Now */}
      <section className="flex relative flex-col items-center justify-center py-60 lg:mt-56 md:mt-40 mt-56 w-full bg-gradient-to-br from-gray-50 via-blue-200 to-indigo-200">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-center lg:text-4xl text-2xl font-bold">Ready to enhance image with <span className="text-blue-600">PicWish</span>?</h1>
          <button className="flex items-center justify-center w-52 m-12 p-4 rounded-full text-white font-bold animate-bounce  bg-gradient-to-l from-blue-600 to-blue-400">Start Now</button>
        </div>
      </section>
    </main>
  );
}
