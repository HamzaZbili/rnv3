import React from "react";
import { archiveData } from "@/app/archive/archiveData";
import Link from "next/link";
import Image from "next/image";

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
                <Image
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
    </section>
  );
};

export default page;
