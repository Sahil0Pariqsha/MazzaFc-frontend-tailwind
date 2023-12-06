import Image from "next/image";
import React from "react";
import { iProjects } from "../Projects";

const ProjectCard = ({ title, description, image, reversed }: iProjects) => {
  return (
    <div
      className={`flex justify-between px-40 flex-col lg:flex-row ${
        reversed ? "" : "flex-row-reverse"
      }`}
    >
      <div className="flex-[0.5] flex items-center justify-center">
        <Image src={image} alt="project thumbnails" width={500} height={500} />
      </div>
      <div className="flex-[0.5]">
        <h1
          className="text-[36px] font-bold text-[white] my-16"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="text-[18px] text-[white]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
