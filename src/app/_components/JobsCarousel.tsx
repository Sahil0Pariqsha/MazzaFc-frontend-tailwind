import React from "react";
import JobsCarouselCard from "./_cards/JobsCarouselCard";

export interface jobsInfo {
  title: string;
  skills: string[];
  location: string;
  remote: string;
}

const JobsInfo: jobsInfo[] = [
  {
    title: "Desenvolvedor Fullstack Pleno React Native",
    skills: ["Node.js", "React Native"],
    location: "Localização",
    remote: "Remoto: Sim",
  },
  {
    title: "Desenvolvedor Fullstack Pleno React Native",
    skills: ["Node.js", "React Native"],
    location: "Localização",
    remote: "Remoto: Sim",
  },
  {
    title: "Desenvolvedor Fullstack Pleno React Native",
    skills: ["Node.js", "React Native"],
    location: "Localização",
    remote: "Remoto: Sim",
  },
  {
    title: "Desenvolvedor Fullstack Pleno React Native",
    skills: ["Node.js", "React Native"],
    location: "Localização",
    remote: "Remoto: Sim",
  },
  {
    title: "Desenvolvedor Fullstack Pleno React Native",
    skills: ["Node.js", "React Native"],
    location: "Localização",
    remote: "Remoto: Sim",
  },
  {
    title: "Desenvolvedor Fullstack Pleno React Native",
    skills: ["Node.js", "React Native"],
    location: "Localização",
    remote: "Remoto: Sim",
  },
];

const JobsCarousel = () => {
  return (
    <div className="flex h-[650px] md:h-[490px] flex-col md:flex-row bg-[#FA002D] md:bg-[url('/carousel-bg.png')] bg-center bg-no-repeat bg-cover text-[white] overflow-scroll custom-scroll my-36">
      <div className="flex flex-col justify-center ml-8 my-10 md:ml-[200px] mr-[20px] absolute -z-1 md:relative">
        <h1 className="text-[36px] md:text-[48px] font-bold whitespace-nowrap">
          Vagas recentes
        </h1>
        <p className="text-[18px] ml-4">Construa uma carreira com a gente</p>
      </div>
      <div className="flex items-center mt-40 md:mt-0">
        {JobsInfo.map((curElem, index) => (
          <JobsCarouselCard
            key={index}
            title={curElem.title}
            skills={curElem.skills}
            location={curElem.location}
            remote={curElem.remote}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsCarousel;
