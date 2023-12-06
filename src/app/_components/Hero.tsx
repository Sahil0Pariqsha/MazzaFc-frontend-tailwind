import Image from "next/image";
import React from "react";

const Hero = () => {
  // console.log(process.env.DB_USER);

  return (
    <div>
      <div className="hero-section flex justify-between items-center text-[white] bg-[#FA002D] md:bg-[url('/hero-bg.png')] bg-center bg-no-repeat bg-cover gap-8 py-[20px]">
        <div className="hero-left px-[20px] lg:pl-[180px] items-center flex flex-col flex-1 w-[350px] lg:w-fit">
          <h1 className="text-[34px] md:text-[40px] lg:text-[48px] font-bold my-[77px] md:my-0 pl-0 md:pl-12 lg:pl-0">
            Desenvolvimento de Sistemas Web e Mobile
          </h1>
          <p className="text-[18px] pl-[9px] my-[30px] md:my-0">
            Atuamos no desenvolvimento de sistemas web, mobile e integração de
            banco de dados, sob medida e sob demanda.
          </p>
          <button className="px-[45px] py-[18px] bg-[white] text-[black] outline-none font-bold rounded-md mt-[40px] ml-0 md:ml-[12px]  md:self-start">
            SABER MAIS AGORA
          </button>
        </div>
        <div className="hero-right mr-[40px] hidden md:block">
          <Image
            src="/hero-img.png"
            alt="hero section products"
            height={10}
            width={601}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
