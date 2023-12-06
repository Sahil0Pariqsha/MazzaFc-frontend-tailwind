"use client";
import React, { useEffect, useState } from "react";
import { myAction } from "./action";
import ContactCard from "./_cards/ContactCard";
import { useFormState } from "react-dom";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export interface contactCard {
  title: string;
  field: string;
  email: string;
  tel: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  description: "",
};

const ContactCardInfo: contactCard[] = [
  {
    title: "Gabriel Dinardi",
    field: "Comercial",
    email: " gabriel.dinardi@mazzafc.tech",
    tel: "11 95965-0428",
  },
  {
    title: "Gabriel Dinardi",
    field: "Comercial",
    email: " gabriel.dinardi@mazzafc.tech",
    tel: "11 95965-0428",
  },
];

const Contact = () => {
  const [state, action] = useFormState(myAction, { message: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state.message) {
      setLoading(!loading);
    }
  }, [state]);

  return (
    <div>
      <h1 className="text-[36px] font-bold text-[#fff] block my-20 mt-[80px] text-center">
        Entre em contato
      </h1>
      <div className="px-4 flex items-center md:justify-center  gap-10 lg:gap-36 custom-scroll overflow-x-scroll">
        {ContactCardInfo.map((curElem, index) => (
          <ContactCard
            key={index}
            title={curElem.title}
            field={curElem.field}
            email={curElem.email}
            tel={curElem.tel}
          />
        ))}
      </div>

      <h1 className="text-[36px] font-bold text-[#D3D3D3] text-center my-20 ">
        Ou deixe sua mensagem
      </h1>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10 lg:w-5/6 mx-auto mb-40">
        <div className="contact-left flex-1">
          <div className="form-container max-w-[496px] mx-auto">
            <form
              action={async (fromData) => {
                await action(fromData);
                setLoading(true);
                const myForm = document.getElementById(
                  "my-from"
                ) as HTMLFormElement;
                myForm.reset();
              }}
              className="flex flex-col items-center justify-center mr-0 lg:mr-2 px-2"
              id="my-from"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="contact-from-input"
                pattern="[A-Za-z]{0,25}"
                title="Name should be less than 25 character"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="contact-from-input"
                title="abc@email.com"
              />
              <input
                type="tel"
                name="Telefone"
                id="Telefone"
                placeholder="Telefone"
                className="contact-from-input"
              />
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                className="contact-from-input resize-none h-[218px]"
              />
              <button
                type="submit"
                className="mt-2 h-[60px] w-full lg:w-[250px] px-[99px] py-[18px] bg-[#FA002D] active:bg-[#b80000] text-[white] rounded-[6px] ml-1 cursor-pointer w-full lg:w-fit self-center md:self-start"
              >
                {loading ? (
                    <Image
                      src="/loading.png"
                      alt="loading"
                      width={28}
                      height={0}
                      className="animate-spin w-fit mx-auto -mt-1"
                    />
                ) : (
                  "Projetos"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31558683.231993817!2d37.14313988198758!3d15.082463727372534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1701495331246!5m2!1sen!2sin"
            height="458"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[100vw] lg:w-[36vw]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
