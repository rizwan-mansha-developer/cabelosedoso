import React, { useState } from "react";
import Logo from "/src/assets/Footer/Logo.svg";
import TextLogo from "/src/assets/Footer/TextLogo.svg";
import FbIcon from "/src/assets/Footer/FbIcon.svg";
import InstraIcon from "/src/assets/Footer/InstraIcon.svg";
import WhatsappIcon from "/src/assets/Footer/WhatsappIcon.svg";
import { HiMenu, HiX } from "react-icons/hi";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer className="min-w-full overflow-hidden bg-[#faf7f5] text-[#494040] text-sm font-light font-mulish tracking-normal py-[50px] relative">
      <div className="max-w-[1920px] mx-auto px-4 customMd:px-[50px] lg:px-[13%]">
        {/* Footer Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[40px]">
          {/* Brand and Message */}
          <div>
            <div className="flex max-w-full gap-x-5">
              <img
                src={Logo}
                alt="Logo Icon"
                className="lg:w-[35%] xl:w-[50%] xl:h-[16px] object-contain"
              />
              <img
                src={TextLogo}
                alt="Text Logo"
                className=" w-[60%] object-contain"
              />
            </div>
            <div className="pt-[56px] pb-[24px] text-[#494040] text-base font-bold font-mulish leading-normal">
              Caros visitantes!
            </div>
            <p>
              Entre no nosso salão e deixe-nos transformar os seus sonhos de
              beleza em realidade
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="Facebook">
                <img
                  src={FbIcon}
                  alt="Logo Icon"
                  className="w-full object-contain"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={InstraIcon}
                  alt="Logo Icon"
                  className="w-full object-contain"
                />
              </a>
              <a href="#" aria-label="WhatsApp">
                <img
                  src={WhatsappIcon}
                  alt="Logo Icon"
                  className="w-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-2 hidden md:block">
            <div className="w-[331px] text-[#494040] text-base font-bold font-mulish leading-normal">
              Links
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Follow Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Horário (Opening Hours) */}
          <div className="space-y-2 hidden md:block">
            <div className="w-[331px] text-[#494040] text-base font-bold font-mulish leading-normal">
              Horário
            </div>
            <ul className="space-y-2">
              <li>Monday: 10:00 — 19:30</li>
              <li>Tuesday: 10:00 — 19:30</li>
              <li>Wednesday: 10:00 — 19:30</li>
              <li>Thursday: 10:00 — 19:30</li>
              <li>Friday: 10:00 — 19:30</li>
              <li>Saturday: 10:00 — 19:30</li>
              <li>Sunday: CLOSED</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-2">
            <div className="flex justify-between mb-[40px]">
              <div className="w-[331px] text-[#494040] text-base font-bold font-mulish leading-normal">
                Contact
              </div>

              <div className="flex items-center md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                  {isMenuOpen ? (
                    <HiX className="w-6 h-6 text-[#494040]" />
                  ) : (
                    <HiMenu className="w-6 h-6 text-[#494040]" />
                  )}
                </button>
              </div>
            </div>
            <p>Address: Rua Aquiles Machado 5, 1900-077 Lisboa</p>
            <p>Phone: +123 456 7890</p>
            <p>WhatsApp: +123 456 7890</p>
            <p>Email: hello@sitename.com</p>
          </div>
        </div>

        {/* Mobile Menu Dropdown within Footer */}
        {isMenuOpen && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#faf7f5] flex flex-col items-start py-4 space-y-4 z-10 px-6 shadow-lg border-t border-[#494040]">
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={toggleMenu}
                className="flex justify-end  sm:hidden focus:outline-none"
              >
                {isMenuOpen ? (
                  <HiX className="w-6 h-6 text-[#494040]" />
                ) : (
                  <HiMenu className="w-6 h-6 text-[#494040]" />
                )}
              </button>
              <div className="flex ">
                {/* Column 2: Links */}
                <div className="">
                  <div className="w-[331px] text-[#494040] text-base font-bold font-mulish leading-normal">
                    Links
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                    <li>
                      <a href="#">Follow Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Horário (Opening Hours) */}
              <div className="space-y-2 ">
                <div className="w-[331px] text-[#494040] text-base font-bold font-mulish leading-normal">
                  Horário
                </div>
                <ul className="space-y-2">
                  <li>Monday: 10:00 — 19:30</li>
                  <li>Tuesday: 10:00 — 19:30</li>
                  <li>Wednesday: 10:00 — 19:30</li>
                  <li>Thursday: 10:00 — 19:30</li>
                  <li>Friday: 10:00 — 19:30</li>
                  <li>Saturday: 10:00 — 19:30</li>
                  <li>Sunday: CLOSED</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer Bottom: Copyright and Links */}
        <div className="mt-[40px] flex justify-between items-center">
          <p>© PARAÍSO DAS PRINCESAS 2024</p>
          <div className="space-x-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
