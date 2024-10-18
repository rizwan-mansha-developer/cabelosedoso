import React from "react";
import FirstImg from "/src/assets/FollowUs/1stImg.svg";
import SecondImg from "/src/assets/FollowUs/2ndImg.svg";
import ThirdImg from "/src/assets/FollowUs/3rdImg.svg";
import FourthImg from "/src/assets/FollowUs/4thImg.svg";
import InstraIcon from "/src/assets/FollowUs/InstraIcon.svg";

const FollowUs = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-[30px] md:py-8  sm:pt-[80px] overflow-hidden">
      <div className="flex items-center justify-between mt-[80px] mb-[24px] space-x-5">
        <h1 className="uppercase font-cormorant leading-[40px] text-[#494040] text-[32px] font-normal sm:mx-[30px] pl-[16px] border-l-[#DDC3BB] md:text-left border-l border-[#FAF6F2]">
          Follow Us On Instagram
        </h1>
        <div className="hidden sm:flex justify-center items-center gap-2">
          <div className="text-center text-[#494040] text-base font-light font-['Mulish'] leading-normal">
            Follow Us
          </div>
        </div>
      </div>

      {/* Images container */}
      <div className="flex justify-center flex-wrap xl:flex-nowrap w-full">
        <div className="w-full  flex">
          <img
            className="max-w-full sm:w-[200px]  flex-1 object-contain"
            src={FirstImg}
            alt="First Image"
          />
          <img
            className="hidden sm:flex sm:w-[200px]   max-w-full flex-1 object-contain"
            src={SecondImg}
            alt="Second Image"
          />
        </div>
        <div className="xl:hidden min-w-full bg-[#faf3f2;] flex  justify-center items-center">
          <div className="py-[72px] md:py-[102px] flex-col justify-start items-center gap-[45px] sm:gap-[59px] inline-flex">
            <div className="w-6 h-6 relative">
              <img
                src={InstraIcon}
                alt="Instragram Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-[#83635c] text-[48px] xl:text-[80px] font-light font-cormorant uppercase leading-[48px] sm:leading-[32px]">
              Follow us
            </div>
            <div className="max-w-[744px] text-center text-[#83635c] text-[32px] font-light font-cormorant uppercase leading-loose">
              ON INSTAGRAM and other social networks
            </div>
            <div className="w-full md:w-[454px] justify-start items-start gap-3  inline-flex flex-col md:flex-row">
              <div className="min-w-full md:min-w-0  px-[25px] md:px-0">
                <div className=" px-[48px]  sm:px-12 py-6 bg-[#a4775e] justify-center items-center gap-2 flex">
                  <div className="text-white text-xl font-medium font-cormorant uppercase leading-normal tracking-wide">
                    Instagram
                  </div>
                </div>
              </div>
              <div className="min-w-full md:min-w-0   px-[25px] md:px-0">
                <div className="  px-[48px]  sm:px-12 py-6 border border-[#83635c] justify-center items-center gap-2 flex">
                  <div className=" text-center text-[#83635c] text-xl font-medium font-cormorant uppercase leading-normal tracking-wide">
                    Facebook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="block sm:hidden max-w-full flex-1 object-contain"
          src={SecondImg}
          alt="Second Image"
        />
        <div className="w-full  flex">
          <img
            className="hidden sm:flex sm:w-[200px]   max-w-full flex-1 object-contain"
            src={ThirdImg}
            alt="Third Image"
          />
          <img
            className="hidden sm:flex sm:w-[200px]   max-w-full flex-1 object-contain"
            src={FourthImg}
            alt="Fourth Image"
          />
        </div>
      </div>

      <div className=" hidden  xl:flex justify-center items-center bg-[#faf3f2;]">
        <div className="py-[102px] flex-col justify-start items-center gap-[45px] inline-flex">
          <div className="w-6 h-6 relative">
            <img
              src={InstraIcon}
              alt="Instragram Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#83635c] text-[80px] font-light font-['Cormorant'] uppercase leading-[48px]">
            Follow us
          </div>
          <div className="w-[744px] text-center text-[#83635c] text-[32px] font-light font-['Cormorant'] uppercase leading-loose">
            ON INSTAGRAM and other social networks
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="px-12 py-6 bg-[#a4775e] justify-center items-center gap-2 flex">
              <div className="text-white text-xl font-medium font-cormorant uppercase leading-normal tracking-wide">
                Instagram
              </div>
            </div>
            <div className="h-[72px] px-12 py-6 border border-[#83635c] justify-center items-center gap-2 flex">
              <div className="w-[124px] text-center text-[#83635c] text-xl font-medium font-cormorant uppercase leading-normal tracking-wide">
                Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
