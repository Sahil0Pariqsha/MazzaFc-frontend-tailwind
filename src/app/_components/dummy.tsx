import React, { useEffect, useState } from "react";

// Debounce function definition
function debounce<T extends (...args: any[]) => any>(
  func: T,
  timeout: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return function debouncedFn(this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  description: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <div>
      {/* Your existing JSX */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="contact-from-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="contact-from-input"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="contact-from-input"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="contact-from-input resize-none h-[218px]"
        />
        <input
          type="submit"
          value="Submit"
          className="px-[99px] py-[18px] bg-[#FA002D] text-[white] rounded-[6px] ml-1 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
