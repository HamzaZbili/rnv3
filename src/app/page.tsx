import wine from "@/app/images/wine.png";
import bao from "@/app/images/bao.jpeg"
import sandwich from "@/app/images/sandwich.jpeg";
import Link from "next/link";


const navigators = {
  about: {
    name: "About",
    image: wine.src,
    link: "/about",
    color: "border-[#c08c73]",
    secondaryColor: "bg-[#785444]",
  },
  archive: {
    name: "Archive",
    image: sandwich.src,
    link: "/archive",
    color: "border-[#588c8c]",
    secondaryColor: "bg-[#385454]",
  },
  contact: {
    name: "Contact",
    image: bao.src,
    link: "/contact",
    color: "border-[#d9d9d9]",
    secondaryColor: "bg-[#888484]",
  },
};

export default function Home() {
  return (
    <main>
      <h1 className="font-light text-xl sm:text-2xl md:text-4xl px-5 sm:px-20 md:px-32 pt-10 xs:pt-5">
        Hey, I'm Rachel. I've been writing about food (and travel, and other
        bits and bobs) for over five years. I currently write for different
        publications, including{" "}
        <span className="italic">
          Palate Magazine, Travel Mag, HiP Paris, and Paris Unlocked
        </span>
      </h1>
      <section className="flex flex-col sm:flex-row mt-10">
        <Navigator navigator={navigators.about} />
        <div>
          <Navigator navigator={navigators.archive} />
          <Navigator navigator={navigators.contact} />
        </div>
      </section>
    </main>
  );
}

interface NavigatorProps {
  navigator: Navigator;
}
type Navigator = {
  image: string;
  name: string;
  color: string;
  secondaryColor: string;
  link: string;
};
function Navigator({ navigator }: NavigatorProps) {
  const { image, name, color, secondaryColor,link } = navigator;

  return (
    <div
      className={`relative h-[80vw] cursor-pointer overflow-hidden
    ${
      name === "About" ? "sm:w-[60vw] sm:h-[50vw]" : "sm:w-[40vw] sm:h-[25vw]"
    }`}
    >
      <div
        className={`flex items-center justify-center overflow-hidden
      relative max-h-[100%] max-w-[100%] border-[1.5rem] sm:border-[3rem]
      ${color}`}
      >
        <img src={image} alt={name} />
      </div>
      <Link href={link}>
        <div
          className={`absolute top-0 left-0 w-[110%] h-[100%] 
  transition duration-200 opacity-0 hover:opacity-100
  p-8 sm:p-12 -translate-x-3 hover:translate-x-0
  flex flex-col justify-center
  ${secondaryColor}`}
        >
          <h4 className="text-zinc-400 font-light">View</h4>
          <h4 className="text-3xl text-white">{name}</h4>
        </div>
      </Link>
    </div>
  );
}
