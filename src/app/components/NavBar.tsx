"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [scrollShow, setScrollShow] = useState("top-0");
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const hambugerbars = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-200`;
  const navButton = `text-gray-600 hover:underline hover:text-black cursor-pointer px-3 my-1`;

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos < currentScrollPos && currentScrollPos > 75) {
        setIsOpen(false);
        setScrollShow("-top-[90px]");
      } else {
        setScrollShow("top-0");
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    <header
      className={`fixed ${scrollShow} w-full right-0 z-[900]
      transition-top duration-300 bg-bone `}
    >
      <div
        className={`absolute w-full z-40  h-[3.2rem] border-b border-black
      flex items-center justify-between transition-top duration-300 ease-in-out
      pl-10 sm:pl-20  pr-5 sm:pr-10 bg-bone`}
      >
        <Link className="font-bold text-xl sm:text-2xl cursor-pointer" href="/">
          Rachel Naismith
        </Link>
        {/* hamburger bars */}
        <div className={`flex flex-col transition-color duration-200 `}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col place-self-end px-3 justify-center items-end group z-50"
          >
            <div
              className={`${hambugerbars} ${
                isOpen && "rotate-45 translate-y-3 group-hover:opacity-100"
              }`}
            />
            <div className={`${hambugerbars} ${isOpen && "opacity-0"}`} />
            <div
              className={`${hambugerbars} ${
                isOpen && "-rotate-45 -translate-y-3  group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        {/* hamburger bars */}
      </div>
      {/* menu */}
      <nav className="relative">
        <ul
          className={`w-full z-20 absolute grid grid-cols-2
       text-xl sm:text-3xl bg-white border-b border-black transition-all 
       pl-10 sm:pl-20 py-3 font-light
        ${!isOpen ? "-top-[4rem]" : "top-[3.2rem]"}`}
        >
          <Link href={`/`} className={navButton}>
            Home
          </Link>
          <Link href={`/about`} className={navButton}>
            {" "}
            About
          </Link>
          <Link href={`/archive`} className={navButton}>
            {" "}
            Archive
          </Link>

          <Link href={`/contact`} className={navButton}>
            {" "}
            Contact
          </Link>
        </ul>
      </nav>
      {/* menu */}
    </header>
  );
};

export default NavBar;
