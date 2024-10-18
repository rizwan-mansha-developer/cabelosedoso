import React from "react";
import ProfileImg from "/src/assets/Testimonials/ProfileImg.svg";
import LeftArrow from "/src/assets/OurServices/LeftArrow.svg";
import RightArrow from "/src/assets/OurServices/RightArrow.svg";
import StarIcon from "/src/assets/Testimonials/Star.svg";
import BrownStarIcon from "/src/assets/Testimonials/BrownStar.svg";
const Testimonials = () => {
  return (
    <div className="relative min-w-full max-w-[1440px] mx-auto px-4 sm:px-[30px] py-8 sm:py-0 sm:space-y-[80px]">
      <div className="flex items-center justify-between mt-[80px] mb-[24px] space-x-5">
        <h1 className="uppercase font-cormorant leading-[40px] text-[#494040]  text-[32px] font-normal  sm:mx-[30px] pl-[16px] border-l-[#DDC3BB]   md:text-left border-l border-[#FAF6F2]">
          Testimonials
        </h1>
        <div className="hidden sm:flex ">
          <h4 className="mr-1">Google Reviews</h4>
          <span className="flex md:mr-1">
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={StarIcon}
                  alt="Star Icon"
                  className="object-contain w-6 h-6"
                />
              ))}
          </span>
          <h5 className=""> 4.9</h5>
        </div>
      </div>
      <div className="min-w-full h-[416px] px-4 md:px-[24px] py-16 md:py-[100px] bg-[#faf6f2] flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch h-[200px] flex-col justify-center items-center gap-10 flex">
          <div className="self-stretch h-[88px] flex-col justify-center items-center gap-4 flex">
            <img className="w-12 h-12 rounded-full" src={ProfileImg} />
            <div className="self-stretch text-center text-[#83635c] text-2xl font-normal font-['Cormorant'] uppercase leading-normal">
              Maria Santos
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:flex flex-col justify-center items-center gap-2 w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40  ">
              <img src={LeftArrow} alt="" className="" />
            </div>

            <div className="md:px-[32px] lg:px-[25%] self-stretch text-center text-[#494040] text-base font-light font-['Mulish'] leading-normal">
              I have been a very satisfied client for over 20 years. Fatumata
              became a really good friend. Plus, she is an expert in her line of
              work.
            </div>
            <div className="hidden sm:flex flex-col justify-center items-center gap-2  w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40  ">
              <img src={RightArrow} alt="" className="" />
            </div>
          </div>
        </div>
        <div className=" my-2 sm:my-0 min-w-full   max-w-[360px] h-10 justify-between sm:justify-center items-center inline-flex  px-2 ">
          <div className="sm:hidden w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40 flex flex-col justify-center items-center gap-2 ">
            <img src={LeftArrow} alt="" className="" />
          </div>
          <div className="justify-start items-center gap-12 flex">
            <div className="flex text-center text-[#bba39b] text-base font-light font-mulish leading-normal">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <img
                    key={index}
                    src={StarIcon}
                    alt="Star Icon"
                    className="object-contain w-6 h-6"
                  />
                ))}
            </div>
          </div>
          <div className="sm:hidden w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40 flex flex-col justify-center items-center gap-2 ">
            <img src={RightArrow} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="lg:px-[150px] lg:space-y-[32px] xl:px-[250px] 2xl:px-[370px]">
        <div className="py-[16px] md:py-[32px] md:flex md:justify-center">
          <span className="text-[#83635c] lg:text-nowrap text-[16px] md:text-[32px] font-light font-['Cormorant'] uppercase leading-[48px]">
            É cliente?
          </span>
          <span className="text-[#83635c] lg:text-nowrap text-[16px] md:text-[32px] font-normal font-['Cormorant'] uppercase leading-[48px]">
            {" "}
          </span>
          <span className="text-[#83635c] text-[16px] md:text-[32px] font-light font-['Cormorant'] uppercase leading-[48px]">
            Deixe o seu comentário
          </span>
        </div>
        <div className="min-w-full max-w-[360px] h-[270px] p-6 border border-[#ddc3ba]/40 flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <img
                    key={index}
                    src={BrownStarIcon}
                    alt="Brown Star Icon"
                    className="object-contain w-6 h-6"
                  />
                ))}
            </div>
            <div className="text-center text-[#494040] text-[14px] font-light font-mulish leading-normal">
              Elecioneaa classificação
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-center text-[#83635c] text-base font-light font-['Mulish'] leading-normal">
              A few things to consider in your review
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="px-2 py-0.5 bg-[#efede7] justify-start items-start gap-2 flex">
                <div className="text-center text-[#494040] text-sm font-light font-['Mulish'] leading-normal">
                  Service Requested
                </div>
              </div>
              <div className="px-2 py-0.5 bg-[#efede7] justify-start items-start gap-2 flex">
                <div className="text-center text-[#494040] text-sm font-light font-['Mulish'] leading-normal">
                  Quality
                </div>
              </div>
              <div className="px-2 py-0.5 bg-[#efede7] justify-start items-start gap-2 flex">
                <div className="text-center text-[#494040] text-sm font-light font-['Mulish'] leading-normal">
                  Vibe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-[221px] lg:px-[150px] xl:px-[160px] 2xl:px-[184px]">
          <div class="min-w-full   h-[72px] mt-[16px] px-12 py-6 bg-[#a4775e] justify-center items-center gap-2 inline-flex">
            <div class="text-white text-xl font-medium font-['Cormorant'] uppercase leading-normal tracking-wide">
              Deixar comentários
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
