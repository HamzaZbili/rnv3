"use client";
import React, { useEffect, useState } from "react";
import { archiveData } from "@/app/archive/archiveData";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <ul className="flex flex-wrap">
        {archiveData.map((article, key) => {
          return (
            <li
              key={key}
              className={`${article.color}
            text-white font-light w-[100vw]
            ${
              key !== 0 ? "p-3 sm:p-5" : "pt-3"
            } flex flex-col justify-between items-center
            ${key % 3 !== 0 && "sm:w-[50vw]"}`}
            >
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={article.image}
                  alt={article.name}
                  className={`${key !== 0 && "max-h-[40rem]"}`}
                />
              </Link>

              <Link
                href={article.link}
                target="_blank"
                className={`self-start my-3 ${key === 0 && "ml-3 sm:ml-5"}`}
                rel="noopener noreferrer"
              >
                <h5>{article.name}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
      <ScrollToTop />
    </section>
  );
};

export default page;

function ScrollToTop() {

 const [scrollY, setScrollY] = useState(0);
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(()=>{
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  return (
    <div
      className={` fixed bottom-[2rem] right-[2rem] bg-bone rounded-full transition-opacity duration-300 
    ${scrollY > 700 ? "opacity-80 w-10 h-10" : "opacity-0 h-0 w-0"}`}
    >
      <div
        className="flex justify-center items-center z-50
            rounded-md cursor-pointer "
        onClick={scroll}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="40px" height="40px">
          <g>
            <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
            <path d="m15.29 10.29-8 8L8.7 19.7l7.3-7.29 7.29 7.29 1.41-1.41-8-8a1 1 0 0 0-1.41 0z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
