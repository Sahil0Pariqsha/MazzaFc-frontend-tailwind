import Image from "next/image";
import React from "react";
import { iProjects } from "../Projects";

const ProjectCard = ({ title, description, image, reversed }: iProjects) => {
  return (
    <div
      className={`flex justify-between px-12 md:px-28 lg:px-40 ${
        reversed ? "" : "lg:flex-row-reverse"
      } flex-col lg:flex-row`}
    >
      <div className="flex-[0.5] flex items-center justify-center">
        <Image src={image} alt="project thumbnails" width={500} height={500} />
      </div>
      <div className="flex-[0.5]">
        <h1
          className="text-[28px] md:text-[36px] font-bold text-[white] my-10 lg:my-16 -mt-4 md:-mt-0"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="text-[18px] text-[white] mb-10 lg:mb-0 -mt-6 md:-mt-0">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
