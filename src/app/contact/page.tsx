'use client';
import React, { useRef, useState } from "react";
import breakfast from "@/app/contact/images/breakfast.jpeg";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const page = () => {
  return (
    <section className="py-14 text-center ">
      <h1 className="my-10 text-4xl font-semibold">Contact</h1>
      <p className="font-light px-5 sm:px-10 md:text-lg">
        You can reach me via email at rmnaismith@me.com, by phone +33767055092
        or via Instagram @writefood. Alternatively, leave me a message below!
      </p>
      <div className="mt-20 flex flex-col sm:flex-row lg:mx-20">
        <Image
          src={breakfast.src}
          alt="breakfast"
          className="m-5 w-[stretch] sm:max-w-[50vw]"
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default page;

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
      from_name: "",
      user_email: "",
      message: "",
    });

      const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  const sendEmail = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true)
    if (form.current) {
      await emailjs
        .sendForm(
          "service_gmail",
          "template_7pox7u2",
          form.current,
          "W0N1bfuoRR6HUFC3p"
        )
        .then(
          (result: { text: any }) => {
          setIsEmailSent(true)
           setFormData({
             from_name: "",
             user_email: "",
             message: "",
           });
          },
          (error: { text: any }) => {
            setError(true)
            console.log(error.text);
          }
        );
    }
    setIsLoading(false);
  };

  const handleCloseMessage = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setError(false)
    setIsEmailSent(false)
  }
  return (
    <form
      className="flex flex-col m-5 font-extralight text-black w-[stretch]"
      ref={form}
      onSubmit={sendEmail}
    >
      <input
        placeholder="Name"
        type="text"
        name="from_name"
        className="border border-black p-[1rem]"
        value={formData.from_name}
        onChange={handleInputChange}
        required
      />
      <input
        placeholder="Email"
        name="user_email"
        type="email"
        value={formData.user_email}
        onChange={handleInputChange}
        required
        className="border-x border-black  p-[1rem]"
      />
      <textarea
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
        className="border border-black mb-5 p-[1rem] min-h-[8rem]"
      />
      <button
        type="submit"
        value="Send"
        className="border bg-white
      border-black px-[1rem] py-[.5rem] font-light text-left w-fit"
      >
        {isLoading ? "Sending ..." : "Send Message"}
      </button>
      <aside
        className={`transition-all duration-200 fixed top-[5rem]  right-[2rem]
      ${isEmailSent || error ? "translate-x-0" : "translate-x-20"}`}
      >
        {isEmailSent || error ? (
          <div
            className={` flex justify-between w-40 bg-white shadow-md p-3 transition-all duration-200`}
          >
            {isEmailSent ? (
              <span>email sent</span>
            ) : (
              <span>email not sent</span>
            )}
            <button onClick={handleCloseMessage}>
              X
            </button>
          </div>
        ) : null}
      </aside>
    </form>
  );
};
