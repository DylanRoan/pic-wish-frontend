import { faArrowRight, faThumbsUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import './style.scss'
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import SwiperSlideshow, { SwiperReviewsSlideshow } from "./components/swiper/swiper";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";


export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center">

      {/* Main Section */}
      <section className="lg:pt-[180px] pt-[50px] lg:w-4/5 w-full">
        {/* App ad / Hide on desktop */}
        <section className="lg:hidden flex bg-gradient-to-l from-blue-600 to-blue-400 p-4 flex items-center justify-between mb-[100px]">
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
        <section className="flex lg:flex-row flex-col gap-4">
          <aside className="flex-1 flex flex-col justify-center">
            <h1 className="lg:text-left text-center text-4xl font-bold">AI Photo Enhancer<br></br><span className="text-blue-600">Free to Use</span>
            </h1>
            <p className="lg:text-left text-center text-sm my-8">Make blurry picture clear in seconds with PicWish AI photo enhancer.<br></br> Improve image resolution and quality effortlessly.</p>
            <div className="flex lg:flex-row flex-col gap-5 items-center">
              <button className="flex-1 flex flex-col items-center justify-center web-link bg-gradient-to-r from-blue-200 to-blue-600 p-2 rounded-full lg:w-auto w-[200px]">
                <p className='text-lg text-white font-bold'><FontAwesomeIcon icon={faUpload} style={{color: "white",}} className="mr-1" />Upload Image</p>
                <p className="text-xs text-white">Drop, past image, or URL</p>
              </button>
              <button className="flex-1 lg:hidden block google-play"></button>
              <button className="flex-1 lg:block hidden windows text-blue-600 border-solid border-blue-600 border-2 rounded-full  p-2 lg:w-auto w-[200px]">
                <p className='text-lg font-bold'><FontAwesomeIcon icon={faWindows} style={{color: "",}} className="mr-1" />Download</p>
                <p className="text-xs ">Bulk edit</p>
              </button>
            </div>
          </aside>
          <aside className="flex-1 flex items-center justify-center">
              <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="ai-img-before.png" alt="1"></ReactCompareSliderImage>}
              itemTwo={<ReactCompareSliderImage src="ai-img-after.jpg" alt="2"></ReactCompareSliderImage>}
              
              className="lg:w-full w-4/5 h-full overflow-hidden border-2px border-solid border-white rounded-2xl"></ReactCompareSlider>
          </aside>
        </section>
        
        {/* Displayed data */}
        <section className="my-24 flex lg:flex-row flex-col justify-center items-center">
            <div className="w-max my-10 mx-8 flex flex-col items-center">
              <div className="font-bold text-base"><span className="text-4xl">120</span>M+</div>
              <div className="text-sm text-center">Images Processed</div>
            </div>

            <div className="w-max my-10 mx-8 flex flex-col items-center">
              <div className="font-bold text-base"><span className="text-4xl">37</span>M+</div>
              <div className="text-sm text-center">Happy Users</div>
            </div>

            <div className="w-max my-10 mx-8 flex flex-col items-center">
              <div className="font-bold text-base"><span className="text-4xl">3</span>Secs</div>
              <div className="text-sm text-center">AI Processing</div>
            </div>

            <div className="w-max my-10 mx-8 flex flex-col items-center">
              <div className="font-bold text-base"><span className="text-4xl">10</span>X</div>
              <div className="text-sm text-center">Faster Photo Editing</div>
            </div>
        </section>
      </section>

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
      <section className="flex lg:flex-row flex-col items-center py-12 gap-4">
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_ai.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold"><span className="text-blue-600">Enhance Photos</span> Without Losing Quality</h1>
            <p>PicWish&apos;s AI enhancement tool excels at elevating the resolution of any image, whether it&apos;s a portrait, product shot, or graphic. Instantly convert pixelated pictures into stunning high-definition quality and upscale images in seconds. No expert setup or photo editing skills are required!</p>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="ai-img-before.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="ai-img-after.jpg" alt="2"></ReactCompareSliderImage>}
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
            itemOne={<ReactCompareSliderImage src="ai-img-before.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="ai-img-after.jpg" alt="2"></ReactCompareSliderImage>}
            className="w-full h-full overflow-hidden border-2px border-solid border-white rounded-2xl">
          </ReactCompareSlider>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_ai.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold">Photo Enhancer for <span className="text-blue-600">Anime</span></h1>
            <p>Don&apos;t let low resolution ruin your cherished anime posters or wallpapers. Here you can easily transform a 480p anime image into superb HD quality with minimal effort. In just one single click, upscale anime quality without any blurring and enhance your loved details to the next level.</p>
          </div>
        </aside>
      </section>
      {/* Portrait Enhancer */}
      <section className="flex lg:flex-row flex-col items-center py-12 gap-4">
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5 flex flex-col lg:items-baseline items-center">
            <img src="icon_ai.png" className="w-7 m-2"></img>
            <h1 className="lg:text-left text-center text-2xl mb-5 font-bold"><span className="text-blue-600">Enhance Portrait</span> Photos Online</h1>
            <p>PicWish AI photo enhancer breathes new life into every portrait photo. Instantly improve portrait clarity using advanced face enhancement technology for photographs that are underexposed, out-of-focus, or blurred due to shaking hands.</p>
            <a className="font-bold underline text-color-blue"></a>
          </div>
        </aside>
        <aside className="flex flex-1 justify-center">
          <div className="w-4/5">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="ai-img-before.png" alt="1"></ReactCompareSliderImage>}
            itemTwo={<ReactCompareSliderImage src="ai-img-after.jpg" alt="2"></ReactCompareSliderImage>}
            className="w-full h-full overflow-hidden border-2px border-solid border-white rounded-2xl">
          </ReactCompareSlider>
          </div>
        </aside>
      </section>

      {/* Slideshow - product enhancement */}
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center lg:text-4xl text-xl font-bold lg:w-2/4 w-3/4"><span className="text-blue-600">Automatically enhance</span> your images for personal and business needs</h1>
        <section className="my-12 h-80 w-screen flex items-center justify-center">
          <SwiperSlideshow></SwiperSlideshow>
        </section>
      </section>
      {/* Draggable - User reviews */}
      <section className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-center text-4xl font-bold">Over <span className="text-blue-600">100000+</span> users worldwide use PicWish</h1>
        <p className="text-center">Ecommerce merchants, influencers, developers, and educational agencies use PicWish to boost their productivity.</p>
        <section className="m-12 w-4/5 h-80">
          <SwiperReviewsSlideshow></SwiperReviewsSlideshow>
        </section>
      </section>

      {/* Posts */}
      <section className="flex flex-col lg:w-4/5 mb-12">
        <h1 className="text-center text-4xl font-bold">Posts | Sharpen image and do more</h1>
        <section className="flex lg:flex-row flex-col mt-7 mb-1 gap-8 justify-center items-center">
        <a className="flex flex-col rounded-2xl overflow-hidden shadow lg:w-1/4 w-3/4">
            <img className="object-cover" src="https://picwish.com/wp-content/uploads/2024/09/featured-take-pictures-of-the-moon-with-iphone.jpg"></img>
            <p className="p-4">Capturing the Moon: iPhone Photography Tips and Tricks</p>
          </a>

          <a className="flex flex-col rounded-2xl overflow-hidden shadow lg:w-1/4 w-3/4">
            <img className="object-cover" src="https://picwish.com/wp-content/uploads/2024/09/featured-take-pictures-of-the-moon-with-iphone.jpg"></img>
            <p className="p-4">Capturing the Moon: iPhone Photography Tips and Tricks</p>
          </a>

          <a className="flex flex-col rounded-2xl overflow-hidden shadow lg:w-1/4 w-3/4">
            <img className="object-cover" src="https://picwish.com/wp-content/uploads/2024/09/featured-take-pictures-of-the-moon-with-iphone.jpg"></img>
            <p className="p-4">Capturing the Moon: iPhone Photography Tips and Tricks</p>
          </a>
          
        </section>
        <a className="text-right mr-8">See more posts <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
      </section>

      {/* API */}
      <section className="w-4/5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl lg:p-12 p-4 flex lg:flex-row flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-white">Interested in our photo enhancer API?</h1>
          <p className="opacity-70 text-white my-4">Process images automatically in bulk. Speed up your workflow using PicWish API! With just a few lines of code, you can bring this technology into your application.</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <button className="text-blue-600 bg-white p-4 font-bold rounded-full">Access to API</button>
        </div>
      </section>

      {/* Start Now */}
    </main>
  );
}
