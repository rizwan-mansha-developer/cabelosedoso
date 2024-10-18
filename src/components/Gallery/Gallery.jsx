import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FirstImg from "/src/assets/Gallery/FirstImg.svg";
import SecondImg from "/src/assets/Gallery/SecondImg.svg";
import ThirdImg from "/src/assets/Gallery/ThirdImg.svg";
import FourthImg from "/src/assets/Gallery/FourthImg.svg";

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
    <div className="relative max-w-[1440px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light uppercase">Galeria</h2>
        <div className="flex items-center gap-2">
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
        className="w-full"
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
          <SwiperSlide key={index} className="w-full">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
