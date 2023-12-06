import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="my-10">
      <h1 className="text-[36px] font-bold text-[#D3D3D3] text-center my-20">
        Clientes que confiam no nosso trabalho
      </h1>
      <Image
        src="/brands.png"
        alt="all brands that we have worked with"
        width={1280}
        height={260}
        className="mx-auto"
      />
    </div>
  );
};

export default Brands;
