import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-global_bg h-60 flex flex-col items-center justify-between">
      <div>
        <Image
          src="/logo.png"
          alt="img for the footer"
          width={224}
          height={60}
          className="mx-auto mt-10"
        />
        <div className="logos-container text-[white] flex justify-center gap-9 mt-6">
          <i className="fa-brands fa-instagram fa-lg"></i>
          <i className="fa-brands fa-x-twitter fa-lg"></i>
          <i className="fa-brands fa-facebook-f fa-lg"></i>
          <i className="fa-brands fa-linkedin-in fa-xl"></i>
        </div>
      </div>
      <p className="text-[white] mb-2 text-xs">Ⓒ 2020, MazzaFC - Systems & Outsourcing</p>
    </footer>
  );
};

export default Footer;
