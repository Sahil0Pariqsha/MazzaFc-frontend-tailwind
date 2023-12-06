import React from "react";
import ServicesCard from "./_cards/ServicesCard";

const Services = () => {
  interface CardData {
    img: string;
    title: number;
    description: string;
  }

  const cardData: CardData[] = [
    {
      img: "/services-1.png",
      title: 150,
      description: "Profissionais já contratados",
    },
    {
      img: "/services-2.png",
      title: 100,
      description: "Clientes já atendidos",
    },
    {
      img: "/services-3.png",
      title: 1200,
      description: "Profissionais no banco de dados",
    },
  ];
  return (
    <section className="flex gap-5 lg:justify-center my-10 p-3 overflow-x-scroll custom-scroll">
      <div className="flex flex-row gap-5">
        {cardData.map((curElm: CardData, index) => (
          <ServicesCard
            key={index}
            url={curElm.img}
            title={curElm.title}
            description={curElm.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
