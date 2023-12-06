import React from "react";
import ProjectCard from "./_cards/ProjectCardOdd";

export interface iProjects {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}

const projects: iProjects[] = [
  {
    title: `Desenvolvimento de sistemas <span style="color: #FA002D;">web</span> e <span style="color: #FA002D;">mobile</span>`,
    description:
      "Trabalhamos no desenvolvimento de sistemas web, mobile e integração de banco de dados, sob medida e sob demanda. As tecnologias principais são php, c#, react native, angular.js, react.js, node.js, java, entre outras. O desenvolvimento de sistemas tem as seguintes modalidades:Desenvolvimento de projeto, da análise a implantação; Desenvolvimento de projeto, desenvolvimento e implantação; Desenvolvimento de demandas pontuais em sistemas legados; Sustentação de sistemas reativa ou preditiva",
    image: "/projects-1.png",
  },
  {
    title: `Maximizando sua produtividade <span style="color: #FA002D;">Outsourcing</span>`,
    description:
      "Buscamos profissionais no mercado de trabalho para atuar em nossos clientes. O profissional passa por uma seleção, testes e avaliações para identificar se o perfil do candidato é compatível com o perfil da vaga de nossos clientes. O profissional pode ser contratado das seguintes maneiras: PJ ou CLT por nós e alocado dentro do escritório do cliente; PJ ou CLT por nós e atuando em nosso escritório com demandas do cliente",
    image: "/projects-2.png",
  },
  {
    title: `Sustentação de sistemas <span style="color: #FA002D;">legados</span> e <span style="color: #FA002D;">aplicativos</span>`,
    description:
      "Trabalhamos no conhecimento dos sistemas legado de nossos clientes para que possamos dar o suporte, pequenos ajustes e desenvolvimento necessário para a evolução e continuidade dos mesmos. Montamos e adequamos a equipe de sustentação conforme a realidade de cada empresa. Linguagens que atendemos na sustentação: .Net, C#, PHP e React Native",
    image: "/projects-3.png",
  },
  {
    title: `Seleção com <span style="color: #FA002D;">precisão hunting</span>`,
    description:
      "Buscamos profissionais no mercado de trabalho para os nossos clientes contratarem internamente. O profissional passa por uma seleção, testes e avaliações para identificar se o perfil do candidato é compatível com o perfil da vaga de nossos clientes. O profissional pode ser contratado da seguinte maneira: PJ ou CLT vinculado ao cliente, e atuando dentro das dependências do cliente",
    image: "/projects-4.png",
  },
];

const Projects = () => {
  return (
    <div className="mt-[120px]">
      {projects.map((curElm: iProjects, index) => (
        <ProjectCard
          key={index}
          title={curElm.title}
          description={curElm.description}
          image={curElm.image}
          reversed={index % 2 === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default Projects;
