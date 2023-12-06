import Image from "next/image";
import React from "react";

interface CardData {
  url: string;
  title: number;
  description: string;
}

const ServicesCard = ({ url, title, description }: CardData) => {
  return (
    <div className="bg-global_bg rounded-[20px] text-[white] w-[340px] h-[370px] flex flex-col items-center p-2 text-center">
      <div className="flex flex-col justify-center h-40">
        <Image
          src={url}
          alt="services card"
          height={10}
          width={140}
          className=""
        />
      </div>
      <h1 className="text-[48px] mx-4">{`+${title}`}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
