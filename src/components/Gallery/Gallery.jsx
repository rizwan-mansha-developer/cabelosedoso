import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FirstImg from "/src/assets/Gallery/FirstImg.svg";
import SecondImg from "/src/assets/Gallery/SecondImg.svg";
import ThirdImg from "/src/assets/Gallery/ThirdImg.svg";
import FourthImg from "/src/assets/Gallery/FourthImg.svg";
import LeftArrow from "/src/assets/OurServices/LeftArrow.svg";
import RightArrow from "/src/assets/OurServices/RightArrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const images = [
    {
      url: FirstImg,
      alt: "Woman with yellow sweater",
    },
    {
      url: SecondImg,
      alt: "Woman with black dress",
    },
    {
      url: ThirdImg,
      alt: "Woman with white shirt",
    },
    {
      url: FourthImg,
      alt: "Woman with white turtleneck",
    },
    {
      url: SecondImg,
      alt: "Person with blonde hair",
    },
    {
      url: FirstImg,
      alt: "Woman with yellow sweater",
    },
    {
      url: ThirdImg,
      alt: "Woman with white shirt",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="relative min-w-full max-w-[1440px] mx-auto px-4 sm:px-[30px] py-8 sm:py-0 sm:space-y-[80px]">
      <div className="flex items-center justify-between mt-[80px] mb-[24px] space-x-5">
        <h1 className="uppercase font-cormorant leading-[40px] text-[#494040]  text-[32px] font-normal  sm:mx-[30px] pl-[16px] border-l-[#DDC3BB]   md:text-left border-l border-[#FAF6F2]">
          Galeria
        </h1>
        <div className="hidden sm:flex items-center justify-center gap-2 ">
          <span className="text-sm">Woman</span>
          <span className="text-sm text-gray-400">Men</span>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={16}
        slidesPerView="auto"
        mousewheel={true}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full "
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full ">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className=" my-2 sm:my-0 min-w-full   max-w-[360px] h-10 justify-between items-center inline-flex sm:hidden px-2 ">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="hover:cursor-pointer w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40 flex flex-col justify-center items-center gap-2 "
          >
            <img src={LeftArrow} alt="" className="" />
          </div>
          <div className="justify-start items-center gap-12 flex">
            <div className="text-center text-[#bba39b] text-base font-light font-mulish leading-normal space-x-[15%]">
              <span className="underline text-black">Women</span>
              <span className="">Men</span>
            </div>
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            classNameName="hover:cursor-pointer w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40 flex flex-col justify-center items-center gap-2 "
          >
            <img src={RightArrow} alt="" className="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;
