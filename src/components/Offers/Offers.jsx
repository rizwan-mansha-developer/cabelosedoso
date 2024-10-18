import React from "react";
import MobileBg from "/MobileBg.svg";
import TabletBg from "/TabletBg.svg";
import DesktopBg from "/DesktopBg.svg";

const Offers = () => {
  return (
    <div className="w-full relative mt-[80px]">
      {/* Background Images for different screen sizes */}
      <img
        src={TabletBg}
        alt="Tablet background"
        className="hidden sm:block lg:hidden relative rounded-lg min-h-[592px] w-full object-cover z-0"
      />
      <img
        src={DesktopBg}
        alt="Desktop background"
        className="hidden lg:block relative rounded-lg min-h-[592px] xl:max-h-[920px] w-full  object-cover z-0"
      />
      <img
        src={MobileBg}
        alt="Mobile background"
        className="block sm:hidden relative min-h-[735px] w-full object-cover z-0"
      />

      {/* Blur Section */}
      <div className="absolute w-full max-w-[1920px]  lg:left-1/2  bottom-0 lg:w-1/2 right-0  h-1/2 lg:h-full z-10 bg-[#1e1e1e]/40 backdrop-blur-sm text-white rounded-b-lg lg:rounded-none lg:rounded-l-lg">
        <div className="flex flex-col justify-center items-center text-white px-[15px] lg:px-[50px] xl:px-[107px] lg:pt-[150px] xl:pt-[251px] space-y-[40px] w-full h-full">
          <div className="mt-[47px] text-center lg:space-y-[20px] xl:space-y-[50px] 2xl:space-y-[90px] w-full">
            <h2 className="uppercase text-white tracking-[0.05em] text-[40px] font-light leading-[1.2] font-cormorant">
              Oferecemos 15% de desconto
            </h2>
            <h2 className="uppercase tracking-[-0.24px] text-[24px] 2xl:text-[32px] font-normal leading-[28px] xl:leading-[4rem] font-cormorant">
              na sua primeira visita
            </h2>
          </div>

          {/* Button */}
          <div className="flex mb-[53px] h-[72px] px-12 py-6 bg-[#a4775e] justify-center items-center gap-2 sm:inline-flex">
            <div className="text-white text-2xl font-normal font-cormorant uppercase leading-[64px] tracking-wide">
              Fazer Marcação
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
