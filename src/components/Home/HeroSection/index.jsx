import React, { useState } from "react";
import CaroSlider from "../HeroSlider/CaroSlider";
import LocationIcon from "/src/assets/HeroAssets/location.svg";
import ParkingIcon from "/src/assets/HeroAssets/parking.svg";
import MetroIcon from "/src/assets/HeroAssets/metro.svg";
import ImagesGrid from "./ImagesGrid";

const SliderContent = [
  {
    id: 1,
    icon: LocationIcon,
    title: "Address:",
    detail1: "Rua Aquiles Machado 5",
    detail2: "1900-077 Lisboa",
  },
  {
    id: 2,
    icon: ParkingIcon,
    title: "Parking:",
    detail1: "Parqueamento ",
    detail2: "Junto ao salão",
  },
  {
    id: 3,
    icon: MetroIcon,
    title: "Metro:",
    detail1: "Estação de Metro ",
    detail2: "junto salão",
  },
];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      
      <div className="relative min-w-full max-w-[1920px] h-auto overflow-hidden bg-cover font-mulish">
        
        {/* Background Image  */}
        <div className="block w-full h-screen bg-cover object-cover bg-hero-mobile md:bg-hero-tablet xl:bg-hero-desktop bg-no-repeat "></div>

        
        <div className="absolute bottom-0 md:bottom-16 xl:bottom-[10%]  left-0 w-full customMd:mx-[24px] h-auto p-4 lg:pl-[250px]  lg:pt-[311px]">
          <div className="font-cormorant text-white   p-6 md:p-0 customMd:w-[762px] lg:w-[816px]">
            <h2 className="font-light   text-[52px]     customMd:text-[112px]  md:text-[104px] lg:text-[120px] 2xl:text-[120px] leading-[64px] md:leading-[110px] italic uppercase text-nowrap">
              Cabelo Sedoso
            </h2>
            <h3 className="font-normal text-[24px] md:text-[48px] xl:text-[48px] leading-[28px] md:leading-[52px] xl:leading-[46px] uppercase">
              Não acontece por acaso Acontece por marcação
            </h3>
          </div>

          <div className="w-full px-auto md:py-[56px] xl:py-0 xl:pt-[64px] xl:pb-[50px]">
            <button className="w-full md:w-auto h-[72px] bg-[#A5775E] py-[24px] px-[48px] text-[20px] leading-[24px] text-white font-cormorant">
              FAZER MARCAÇÃO
            </button>
          </div>

          
          <div className="max-w-full ">
            <div className="block sm:hidden pt-[48px] pb-[72px]">
              <CaroSlider SliderContent={SliderContent} />
            </div>
            <ImagesGrid SliderContent={SliderContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
