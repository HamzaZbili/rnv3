import Link from "next/link";
import React from "react";

interface ArticleProps {
  article: { name: string; image: string; link: string; color: string };
  index: number
}

const Article:React.FC<ArticleProps> = ({ article, index }) => {
  return (
    <li
      className={`${article.color}
            text-white font-light w-[100vw]
            ${
              index !== 0 ? "p-3 sm:p-5" : "pt-3"
            } flex flex-col justify-between items-center
            ${index % 3 !== 0 && "sm:w-[50vw]"}`}
    >
      <Link href={article.link} target="_blank" rel="noopener noreferrer">
        <img
          src={article.image}
          alt={article.name}
          className={`${index !== 0 && "max-h-[40rem]"}`}
        />
      </Link>

      <Link
        href={article.link}
        target="_blank"
        className={`self-start my-3 ${index === 0 && "ml-3 sm:ml-5"}`}
        rel="noopener noreferrer"
      >
        <h5>{article.name}</h5>
      </Link>
    </li>
  );
};

export default Article;
