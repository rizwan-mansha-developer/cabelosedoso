import BgImage from "../../../../src/assets/OurServices/BgImage.png";
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
      title: "VENDA DE CABELO NATURAL",
      description:
        "Transforme o seu visual com extensões luxuosas e perucas feitas à medida e aplicadas no Paraíso das Princesa. Explore a nossa coleção, disponíveis em diversas texturas e cores para combinar com o seu estilo único",
    },
    {
      image: Est,
      title: "EXTENSÕES COM CABELO NATURAL",
      description:
        "Aumente o comprimento e volume do seu cabelo com as nossas extensões de cabelo natural de alta qualidade",
    },
    {
      image: Tra,
      title: "TRANÇAS",
      description:
        "Experimente diferentes estilos de tranças, desde as clássicas às mais modernas",
    },
    {
      image: Cor,
      title: "CORTE E TRATAMENTO",
      description:
        "Cuide do seu cabelo com os nossos serviços de corte profissional e tratamentos revitalizantes",
    },
    {
      image: Col,
      title: "COLORAÇÃO",
      description:
        "Dê vida ao seu cabelo com as nossas opções de coloração, desde tons naturais a cores vibrantes",
    },
    {
      image: Cui,
      title: "CUIDADOS COM CABELO NATURAL",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },
  ];

  return (
    <div className=" bg-white text-black min-h-screen pt-[280px]">
      <h1 className="text-3xl font-semibold p-6 text-center md:text-left border-l border-[#FAF6F2]">
        OUR SERVICES
      </h1>

      <div className=" md:flex md:flex-col">
        {/* Main feature - always visible */}
        <div className="w-full relative ">
          <img
            src={BgImage}
            alt="Woman with blonde hair"
            className="hidden sm:block relative rounded-lg min-h-[592px] w-full object-fill z-0"
          />
          <img
            src={BgMobile}
            alt="Woman with blonde hair"
            className="block sm:hidden relative rounded-lg min-h-[592px] w-full object-fill z-0"
          />

          <div className="absolute bottom-[12%] md:w-1/2 md:min-h-full md:bottom-[1%]  z-10 bg-[#1e1e1e]/40 backdrop-blur-sm  text-white gap-y-[32px] rounded-b-lg">
            <h2 className="text-2xl font-normal  pt-[28px] leading-7 font-cormorant  px-[24px]">
              {services[0].title}
            </h2>
            <p className=" mt-2 font-mulish  font-light px-[24px] pb-[40px] leading-normal ">
              {services[0].description}
            </p>
          </div>
        </div>

        {/* Grid of services - visible on tablet and desktop */}
        <div className="">
          <div className="hidden sm:block md:grid md:w-1/2 lg:w-1/3 grid-cols-2 gap-4 p-6">
            {services.slice(1).map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="relative aspect-square">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div class="z-10 min-w-full   max-w-[360px] h-10 justify-between items-center inline-flex px-2 ">
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
        <div className="bg-[#b08d76] text-white px-[24px] py-[32px] gap-y-[64px] ">
          <div className="gap-y-[4px]">
            <h2 className="text-white text-[38px] font-light font-['Cormorant'] uppercase leading-loose tracking-widest">
              -15% DESCONTO
            </h2>
            <p className="text-[#ffd8d0] text-2xl font-light font-['Cormorant'] uppercase leading-loose">
              NA SUA PRIMEIRA VISITA
            </p>
          </div>
          <div class="h-16 justify-between items-center flex">
            <div class="text-white text-2xl font-normal font-cormorant uppercase leading-[64px] tracking-wide">
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
