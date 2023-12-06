import React from "react";
import { jobsInfo } from "../JobsCarousel";

const JobsCarouselCard = ({ title, skills, location, remote }: jobsInfo) => {
  return (
    <div className="">
      <div className="w-[340px] bg-gradient-to-b from-[#1F1F1F] to-[#000] shadow-lg text-[white] m-2 rounded-[30px] ml-2 md:ml-0 md:rounded-lg mb-14 md:mb-0">
        <h1 className="mx-[22px] mb-[25px] pt-[30px] font-bold text-[24px]">
          {title}
        </h1>
        <div className="flex gap-2 mx-[22px]">
          {skills.map((curElem, index) => (
            <div
              className="border border-[#FA002D] rounded-md px-[14px] py-[12px]"
              key={index}
            >
              {curElem}
            </div>
          ))}
        </div>
        <div className="m-[22px] text-[14px]">
          <i className="fa-solid fa-location-dot mr-[15px]"></i>
          <span>{location}</span>
        </div>
        <div className="m-[22px] pb-[60px] text-[14px]">
          <i className="fa-solid fa-briefcase mr-[10px]"></i>
          <span>{remote}</span>
        </div>
        <div className="text-[18px] text-center pb-[50px]">
          <span className="mr-[15px]">Ver detalhes</span>
          <i className="fa-solid fa-chevron-right text-[#FA002D] "></i>
        </div>
      </div>
    </div>
  );
};

export default JobsCarouselCard;
