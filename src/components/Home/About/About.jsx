import React from "react";
import AboutImg from "../../../assets/About/AboutImg.png";

const About = () => {
  return (
    <div class="relative   max-w-[1921px] w-full    h-auto   flex">
      <div class="hidden md:block  w-full bg-[#faf5f2] ">
        <img
          class="w-full  max-w-[771px] lg:min-w-full  md:h-full object-cover"
          src={AboutImg}
        />
      </div>
      <div class=" w-full  border-l border-[#FAF6F2] flex-col justify-start items-start gap-y-8  inline-flex pt-[123px] md:pt-[96px] md:pb-[120px] lg:py-[100px] 2xl:py-[156px]  customMd:pt-[96px] customMd:pl-[34px] pb-[122px] max-md:pb-0   xl:px-[150px] customMd:px-0 xl:pl-[200px]  ">
        <div class="min-w-full max-w-[700px] lg:border-l border-[#DDC3BB] mx-auto text-center md:text-start customMd:text-start customMd:pl-[34px] lg:pl-[32px]">
          <div class="text-[#494040] text-[32px] font-normal  uppercase leading-10 px-[40px] md:px-[50px]   xl:px-[0px]  mx-auto md:mx-0 font-cormorant">
            About us
          </div>
          <div class="font-mulish max-w-[668px] w-full text-[#494040] text-base font-light  leading-normal md:leading-[24px] px-[40px] pt-[32px] md:px-[50px] lg:px-[100px] xl:px-0  text-center md:text-start">
            Nutrindo a beleza de cada fio há mais de 18 anos, trazemos uma
            riqueza de experiência e paixão aos nossos clientes. No Paraíso das
            Princesas, criamos experiências personalizadas que elevam a sua
            confiança e o seu estilo. Desde a aplicação de extensões, à estética
            e criações vanguardistas, somos especializados em dar vida à sua
            visão.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
