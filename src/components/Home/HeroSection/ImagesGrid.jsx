import React from "react";
function ImagesGrid({ SliderContent }) {
  return (
    <>
      <div className="hidden md:grid grid-cols-3 md:w-full lg:w-[726px] ">
        {SliderContent.slice(0, 3).map((item, index) => (
          <div className="flex  justify-center items-center  text-white gap-x-[15px] ">
            <img
              src={item.icon}
              alt={item.title}
              className="w-[48px] h-[48px] gap-[8px]"
            />
            <div className="flex flex-col justify-start items-start">
              <h2 className="font-light text-[16px] leading-[24px] text-center">
                {item.title}
              </h2>
              <p className="font-bold leading-[24px] text-[16px] text-center text-nowrap">
                {item.detail1}
              </p>
              <p className="font-bold leading-[24px] text-[16px] text-center">
                {item.detail2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ImagesGrid;
