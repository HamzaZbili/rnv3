"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Footer = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = React.useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setIsShareOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className="flex justify-between px-3 sm:px-20 md:px-32 font-light text-lg sm:text-2xl md:text-4xl border-t py-10 border-black">
      <p>&copy; All rights reserved</p>
      <nav className="grid grid-cols-2 gap-x-1 gap-y-2 xs:gap-x-5 md:gap-x-10">
        <h4 className="text-sm sm:text-lg md:text-xl">Social</h4>
        <div></div>
        <Link
          href={"https://www.instagram.com/writefood/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        <Link
          href={"https://www.linkedin.com/in/rachel-naismith/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <a
          ref={shareRef}
          className="relative"
          onClick={() => setIsShareOpen(!isShareOpen)}
        >
          Share
          <Share isShareOpen={isShareOpen} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

function Share({ isShareOpen }: { isShareOpen: boolean }) {
  const url = "rachelnaismith.com";
  const [isShareHidden, setIsShareHidden] = useState(true);

  const mediaShareList = [
    {
      name: "LinkedIn",
      button: LinkedinShareButton,
      icon: "https://s3.eu-west-2.amazonaws.com/rachel-naismith-images/site-images/social-media-icons/linkedin.png",
    },
    {
      name: "Facebook",
      button: FacebookShareButton,
      icon: "https://s3.eu-west-2.amazonaws.com/rachel-naismith-images/site-images/social-media-icons/facebook.png",
    },
    {
      name: "Email",
      button: EmailShareButton,
      icon: "https://s3.eu-west-2.amazonaws.com/rachel-naismith-images/site-images/social-media-icons/email.png",
    },
    {
      name: "Twitter",
      button: TwitterShareButton,
      icon: "https://s3.eu-west-2.amazonaws.com/rachel-naismith-images/site-images/social-media-icons/twitter.png",
    },
    {
      name: "WhatsApp",
      button: WhatsappShareButton,
      icon: "https://s3.eu-west-2.amazonaws.com/rachel-naismith-images/site-images/social-media-icons/whatsapp.png",
    },
  ];

  useEffect(() => {
    if (!isShareOpen) {
      setTimeout(() => {
        setIsShareHidden(!isShareOpen);
      }, 200);
    } else {
      setIsShareHidden(!isShareOpen);
    }
  }, [isShareOpen]);

  return (
    <div
      className={`transition-all duration-200  ${
        isShareOpen
          ? "opacity-100 -translate-y-[1.5rem]"
          : "opacity-0 translate-y-[1rem]"
      }`}
    >
      {!isShareHidden && (
        <ul
          className="absolute top-0  z-50 -translate-y-[100%] -translate-x-[60%]
       bg-gray-100 shadow-lg
   px-8 w-[16rem] border border-gray-200 rounded-md text-[.9rem] font-[510]"
        >
          {mediaShareList.map((media, key) => {
            const ButtonComponent = media.button;
            return (
              <li
                key={key}
                className="border-b py-2 hover:opacity-50 transition duration-150"
              >
                <ButtonComponent url={url} className="flex items-center">
                  <img
                    src={media.icon}
                    alt={media.name + "logo"}
                    className="h-6 mr-3"
                  />
                  Share on {media.name}
                </ButtonComponent>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
