import BgTabDesk from "../../../../src/assets/OurServices/BgTabDesk.png";
import Est from "../../../../src/assets/OurServices/Est.png";
import Col from "../../../../src/assets/OurServices/Col.png";
import Cor from "../../../../src/assets/OurServices/Cor.png";
import Cui from "../../../../src/assets/OurServices/Cui.png";
import Tra from "../../../../src/assets/OurServices/Tra.png";
import ForwardArrow from "../../../../src/assets/OurServices/ForwardArrow.svg";
import LeftArrow from "../../../../src/assets/OurServices/LeftArrow.svg";
import RightArrow from "../../../../src/assets/OurServices/RightArrow.svg";
import BgMobile from "../../../../src/assets/OurServices/BgMobile.svg";

export default function OurServices() {
  const services = [
    {
      image: Cui,
      title: "CUIDADOS COM CABELO NATURAL",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },

    {
      image: Tra,
      title: "TRANÇAS",
      description:
        "Eleve o seu visual com tranças habilmente criadas no Paraíso das Princesas. Quer esteja à procura de um novo visual audacioso ou de um estilo protetor para manter o seu cabelo natural, os nossos serviços de tranças oferecem tanto estilo como praticidade.",
    },

    {
      image: Cor,
      title: "CORTE E MODELISMO",
      description:
        "Descubra o corte de cabelo perfeito para o seu estilo e personalidade com nossos estilistas especialistas. Do clássico ao contemporâneo, criamos looks sob medida que amplificam sua beleza natural.",
    },

    {
      image: Col,
      title: "COLORAÇÃO",
      description:
        "Transforme o seu cabelo com a nossa coloração especializada. Desde destaques subtis a tons audaciosos, os nossos coloristas dão vida à sua visão. Quer procure um look natural ou uma mudança dramática, confie em nós para resultados impecáveis.",
    },
    {
      image: Est,
      title: "ESTÉTICA E BEM-ESTAR",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },
  ];

  return (
    <div className=" bg-white text-black min-h-screen ">
      <h1 className="font-cormorant leading-[40px] text-[#494040] text-[32px] font-normal mt-[80px] mb-[24px] sm:mx-[30px] pl-[16px] border-l-[#DDC3BB]   md:text-left border-l border-[#FAF6F2]">
        OUR SERVICES
      </h1>

      <div className=" md:flex md:flex-col ">
        {/* Main feature - always visible */}
        <div className="w-full relative sm:px-[30px] ">
          <img
            src={BgTabDesk}
            alt="Woman with blonde hair"
            className="hidden sm:block  relative rounded-lg min-h-[592px] w-full object-fill z-0"
          />
          {/* sm < bgMobile */}
          <img
            src={BgMobile}
            alt="Woman with blonde hair"
            className="block sm:hidden relative rounded-lg min-h-[592px] w-full object-fill z-0"
          />

          <div className="absolute  bottom-0 sm:mr-[30px]  lg:w-1/2 lg:min-h-full lg:bottom-0  z-10 bg-[#1e1e1e]/40 backdrop-blur-sm  text-white gap-y-[32px] rounded-b-lg">
            <div className="px-[24px]   lg:px-[107px] lg:pt-[150px] xl:pt-[251px]">
              <div className="lg:space-y-[20px] xl:space-y-[50px] 2xl:xl:space-y-[90px] min-w-full xl:max-w-[700px]">
                <div className="">
                  <h2 className="block xl:hidden text-2xl font-normal  pt-[28px] lg:pt-0 leading-7 font-cormorant  ">
                    VENDA DE CABELO NATURAL
                  </h2>
                  <div className="">
                    <h2 className="hidden xl:block text-xl 2xl:text-[32px] font-normal  leading-[3.3rem] xl:-leading-1  font-cormorant  ">
                      VENDA DE
                    </h2>
                    <h2 className="hidden xl:block text-2xl xl:text-[40px] 2xl:text-[64px] font-normal  leading-7   font-cormorant  ">
                      CABELO NATURAL
                    </h2>
                  </div>
                </div>
                <p className=" mt-2 lg:mt-0 font-mulish  font-light  pb-[40px] sm:pb-[32px] lg:pb-[64px] leading-normal lg:leading-[24px]">
                  Transforme o seu visual com extensões luxuosas e perucas
                  feitas à medida e aplicadas no Paraíso das Princesa. Explore a
                  nossa coleções, disponíveis em diversas texturas e cores para
                  combinar com o seu estilo único
                </p>
              </div>
              <div class="hidden  sm:mb-[53px] h-[72px] px-12 py-6 bg-[#a4775e] justify-center items-center gap-2 sm:inline-flex">
                <div class="text-white text-2xl font-normal font-cormorant uppercase leading-[64px] tracking-wide">
                  FAZER MARCAÇÃO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of services - visible on tablet and desktop */}
        <div className="">
          <div className="hidden  sm:grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-x-4  p-6 sm:p-0 sm:py-[12px] sm:px-[30px]">
            {services.map((service, index) => (
              <div key={index} className=" sm:col-span-1 lg:col-auto   flex">
                <div className="relative  w-full max-w-[340px] lg:max-w-[250px] ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg min-w-full max-w-[340px] lg:max-w-[250px] h-auto "
                  />
                </div>
                <div className="flex flex-col gap-y-[40px] p-[32px] bg-[#FAF3F2] ">
                  <h3 className="text-[#84635C] font-cormorant text-[24px] lg:text-[16px]  font-normal lg:font-semibold leading-[24px] lg:leading-none uppercase ">
                    {service.title}
                  </h3>
                  <p className="text-4 lg:text-3 font-light leading-6 line-clamp-6 sm:line-clamp-0 lg:line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Discount offer in grid - only visible on lg and up */}
            <div className="hidden lg:flex sm:col-span-1 lg:col-auto">
              <div className="bg-[#b08d76] text-white w-full flex flex-col justify-center p-[32px]">
                <div className="gap-y-[4px]">
                  <h2 className="text-white text-[38px] font-light font-['Cormorant'] uppercase leading-loose tracking-widest">
                    -15% DESCONTO
                  </h2>
                  <p className="text-[#ffd8d0] text-2xl font-light font-['Cormorant'] uppercase leading-loose">
                    NA SUA PRIMEIRA VISITA
                  </p>
                </div>
                <div className="h-16 justify-between items-center flex">
                  <div className="text-white text-nowrap text-2xl font-normal font-cormorant uppercase leading-[64px] tracking-wide">
                    FAZER MARCAÇÃO
                  </div>
                  <div className="w-10 h-10 px-3 py-4 origin-top-left border border-white/40 flex flex-col justify-center items-center gap-2">
                    <img src={ForwardArrow} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" my-2 sm:my-0 min-w-full   max-w-[360px] h-10 justify-between items-center inline-flex sm:hidden px-2 ">
          <div class="w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40 flex flex-col justify-center items-center gap-2 ">
            <img src={LeftArrow} alt="" className="" />
          </div>
          <div class="justify-start items-center gap-12 flex">
            <div class="text-center text-[#bba39b] text-base font-light font-mulish leading-normal">
              1 / 6
            </div>
          </div>
          <div class="w-10 h-10 px-3 py-4 origin-top-left  border border-[#ddc3ba]/40 flex flex-col justify-center items-center gap-2 ">
            <img src={RightArrow} alt="" className="" />
          </div>
        </div>

        {/* Discount offer - always visible */}
        <div className="bg-[#b08d76] text-white px-[24px] sm:px-0 sm:pl-[64px] sm:mx-[30px] py-[32px] gap-y-[64px] lg:hidden">
          <div className="gap-y-[4px] ">
            <h2 className="text-white text-[38px] font-light font-['Cormorant'] uppercase leading-loose tracking-widest">
              -15% DESCONTO
            </h2>
            <p className="text-[#ffd8d0] text-2xl font-light font-['Cormorant'] uppercase leading-loose">
              NA SUA PRIMEIRA VISITA
            </p>
          </div>
          <div class="h-16 justify-between sm:justify-start sm:gap-x-[55%]  items-center flex">
            <div class="text-white text-nowrap text-2xl font-normal font-cormorant uppercase leading-[64px] tracking-wide">
              FAZER MARCAÇÃO
            </div>
            <div class="w-10 h-10 px-3 py-4 origin-top-left  border border-white/40 flex flex-col justify-center items-center gap-2 ">
              <img src={ForwardArrow} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
