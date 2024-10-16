import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "/src/assets/Navbar/Logo.svg";
import WebName from "/src/assets/Navbar/WebName.svg";
import LogoWithName from "/src/assets/Navbar/LogoWithName.svg";
import FbIcon from "/src/assets/Navbar/FbIcon.svg";
import InsIcon from "/src/assets/Navbar/InsIcon.svg";
import WhatsappIcon from "/src/assets/Navbar/WhatsappIcon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="min-w-full">
      <nav className="flex flex-col md:flex-row bg-opacity-75 px-4 customMd:px-4 lg:px-6 py-2.5 customMd:mx-[30px] lg:mx-[150px] xl:mx-0 xl:pl-[150px] 2xl:pl-[250px] lg:pt-[55px] lg:h-[63px]">
        <div className="flex justify-between  items-center w-full  xl:max-w-[1187px]">
          <div className="flex lg:gap-x-[230px] xl:gap-x-[200px] 2xl:gap-x-[350px] lg:pt-[55px]  xl:pt-0px customMd:pt-0">
            <div className="flex items-center gap-x-[11px]">
              <img
                src={Logo}
                alt="Logo Icon"
                className="object-contain w-[85px] md:w-[107px] xl:max-w-[135px] xl:h-[63px] h-[39px]"
              />
              <img
                src={WebName}
                alt="Web Name"
                className="block object-contain w-[150px] md:max-w-[189.02px] xl:w-[378.65px] h-[10.34px] xl:h-[26.11px]"
              />
            </div>

            {/* Desktop menu */}
            <ul className="hidden xl:flex items-center lg:gap-x-[48px]">
              {["Home", "Quem Somos", "Serviços", "Galeria", "Testemunhos"].map(
                (item) => (
                  <li key={item} className="list-none ">
                    <a
                      href={item === "Home" ? "/" : "#"}
                      className="block text-[16px] leading-[24px] font-light h-[24px] text-nowrap text-white hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="flex items-center xl:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <HiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isMenuOpen
              ? "fixed top-0 w-full min-h-[769px] bg-[#FFFBF1] flex flex-col items-start"
              : "hidden"
          } lg:flex md:space-x-8 min-h-full md:mt-0 md:ml-auto`}
        >
          {isMenuOpen && (
            <div className="flex justify-between pt-[17px] px-[15px] w-full lg:hidden">
              <img
                src={LogoWithName}
                alt="Logo Icon"
                className="object-contain w-[236px] h-[39px]"
              />
              <button onClick={toggleMenu} className="focus:outline-none">
                <HiX className="w-6 h-6 text-black" />
              </button>
            </div>
          )}

          {/* Mobile Navigation Links */}
          {isMenuOpen && (
            <div className="flex flex-col gap-y-[185px] ms-[40px]">
              <div className="">
                {[
                  "Home",
                  "Quem Somos",
                  "Serviços",
                  "Galeria",
                  "Testemunhos",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "/" : "#"}
                      className="block mb-[32px] text-[16px] leading-[24px] font-[300] h-[24px] text-[#494040] hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </div>

              {/* Operating Hours */}
              <div>
                <h2 className="font-bold text-[16px] leading-[24px] h-[24px] text-[#494040] mb-[24px]">
                  Horário
                </h2>
                <div className="space-y-[16px]">
                  <h3 className="text-[#494040] leading-[24px] text-[16px] h-[24px]">
                    Mon - Sat: 10:00 — 19:30
                  </h3>
                  <h4 className="text-[#494040] leading-[24px] text-[16px] h-[24px]">
                    Sun: CLOSED
                  </h4>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-x-[32px] pb-[41px]">
                <img src={FbIcon} alt="Facebook" className="h-6 w-6" />
                <img src={InsIcon} alt="Instagram" className="h-6 w-6" />
                <img src={WhatsappIcon} alt="WhatsApp" className="h-6 w-6" />
              </div>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
