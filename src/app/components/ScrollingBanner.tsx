import React from "react";
import { archiveData } from "@/app/archive/archiveData";

const ScrollingBanner = () => {
  const latestArticles = archiveData.slice(0, 2);
  return (
    <div
      className="w-[100%] h-10
       flex items-center
       overflow-x-hidden text-nowrap whitespace-nowrap
       text-black font-thin
       bg-bone"
    >
      <p
        className="font-normal
        animate-infinite-scroll
        keyframes-infinite-scroll"
      >
        Latest Work :
        {latestArticles.map((article, index) => (
          <span key={index} className="px-5 underline cursor-pointer">
            {article.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrollingBanner;
