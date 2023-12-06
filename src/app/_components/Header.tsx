"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  function handleNavClick() {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      document.body.classList.add("overflow-hidden"); // block scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); 
    }
  }

  return (
    <header className="bg-global_bg flex justify-center md:justify-between text-[white] z-10 px-40 py-4 sticky top-0 drop-shadow-lg h-[68px]">
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="navbar left"
          width={135}
          height={38}
          layout="fixed"
          className="cursor-pointer"
        />
      </div>
      {/* Ham-Icon */}
      <div
        className="flex md:hidden items-center absolute left-8 top-5 z-10 text-[30px] text-[#d8d8d8]"
        onClick={handleNavClick}
      >
        {openMenu ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      <div
        className={`header-right ${
          openMenu ? "" : "hidden"
        } md:flex items-center justify-center absolute  md:relative bg-global_bg `}
      >
        <ul className="flex flex-col md:flex-row  w-[100vw] h-[100vh] md:w-fit md:h-full items-center justify-center gap-28 md:gap-9">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
