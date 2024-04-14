"use client";
import React, { useState, useEffect, useRef } from "react";
import { archiveData } from "@/app/archive/archiveData";
import ScrollToTop from "./components/ScrollToTop";
import Article from "./components/Article";
import LoadingDots from "./components/LoadingDots";

const PAGE_SIZE = 6;

const Page = () => {
  const [articles, setArticles] = useState(archiveData.slice(0, PAGE_SIZE));
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(archiveData.length > PAGE_SIZE);
  const loaderRef = useRef(null);

  const fetchMoreArticles = () => {
    const nextPage = page + 1;
    const startIndex = page * PAGE_SIZE;
    const nextSetOfArticles = archiveData.slice(
      page * PAGE_SIZE,
      nextPage * PAGE_SIZE
    );
    setArticles((prev) => [...prev, ...nextSetOfArticles]);
    setPage(nextPage);
    setHasMore(startIndex + PAGE_SIZE < archiveData.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreArticles();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [page]);

  return (
    <section>
      <ul className="flex flex-wrap">
        {articles.map((article, index) => (
          <Article article={article} key={index} index={index} />
        ))}
      </ul>
      {hasMore && (
        <div ref={loaderRef} className="h-20 relative">
          <LoadingDots/>
        </div>
      )}
      <ScrollToTop />
    </section>
  );
};

export default Page;
