import React from "react";
import { contactCard } from "../Contact";

const ContactCard = ({ title, field, email, tel }: contactCard) => {
  return (
    <div className="text-center text-[white] text-[24px] my-4 ">
      <div className=" h-[156px] bg-[#FA002D]"></div>
      <div className="bg-[black]">
        <h1 className="font-bold mx-[20px] pt-[40px]">{title}</h1>
        <p className="mx-[20px] py-[10px]">{field}</p>
        <p className="mx-[20px] py-[10px]">{email}</p>
        <p className="mx-[20px] pb-[30px]">{tel}</p>
      </div>
    </div>
  );
};

export default ContactCard;
