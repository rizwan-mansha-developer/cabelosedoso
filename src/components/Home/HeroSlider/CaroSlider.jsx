import React, { useState } from "react";


const CaroSlider = ({ SliderContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? SliderContent.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === SliderContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative   h-[135px] overflow-hidden rounded-lg">
          {SliderContent.map((item, index) => (
            <div
              key={item.id}
              className={`absolute duration-100 ease-in-out min-w-full  h-[135px] transition-opacity ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >
              <div className=" flex flex-col items-center h-full font-mulish text-white">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[48px] h-[48px] gap-[8px]"
                />
                <div className="mt-[15px]">
                  <h2 className="font-light text-[16px] leading-[24px] text-center">
                    {item.title}
                  </h2>
                  <p className="font-bold leading-[24px] text-[16px] text-center">
                    {item.detail1}
                  </p>
                  <p className="font-bold leading-[24px] text-[16px] text-center">
                    {item.detail2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          type="button"
          onClick={handlePrevClick}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CaroSlider;
