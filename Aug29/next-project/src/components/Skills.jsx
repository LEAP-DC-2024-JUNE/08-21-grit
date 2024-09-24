import Image from "next/image";
import Javascript from "../svg/Icon-Javscript";
import Typescript from "../svg/Icon-Typescript";
import React from "../svg/Icon-React";
import Next from "../Icons/Icon-Nextjs.png";
import Node from "../svg/Icon-Nodejs";
import Express from "../svg/Icon-Express";
import DarkExpress from "../svg/Icon-Dark-Express";
import { useTheme } from "next-themes";
import Nest from "../svg/Icon-Nest";
import DarkSocket from "../svg/Icon-Dark-Socket";
import Socket from "../svg/Icon-Socket";
import Postgresql from "../Icons/Icon-Postgresql.png";
import MongoDB from "../svg/Icon-Mongodb";
import Sass from "../svg/Icon-Sass";
import Tailwind from "../Icons/Icon-Tailwindcss.png";
import Figma from "../svg/Icon-Figma";
import Cypress from "../svg/Icon-Cypress";
import DarkCypress from "../svg/Icon-Dark-Cypress";
import Storybook from "../svg/Icon-Storybook";
import Git from "../svg/Icon-Git";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className=" w-full px-[16px] py-[64px]  lg:px-[80px] lg:py:[96px]  bg-[#ffffff] flex flex-col gap-[3px] dark:bg-[#030712] ">
      <div>
        <div className=" flex flex-col items-center ">
          <button className="w-[105px] h-[28px] rounded-[12px] bg-[#E5E7EB] items-center font-normal text-black text-center dark:bg-[#374151]">
            Skills
          </button>
        </div>
        <p className="mt-6 mb-12 text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <section className=" flex flex-col gap-[16px] lg:flex lg:flex-col lg:gap-[48px]">
        <div className="grid grid-cols-3 gap-[48px] lg:grid-cols-[32px] lg:flex lg:gap-[102px] ">
          <div className="flex flex-col gap-[8px] items-center">
            <Javascript />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Javascript
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Typescript />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Javascript
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <React />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              React
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Image src={Next} />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Next.js
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Node />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Node.js
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            {theme == "dark" ? <DarkExpress /> : <Express />}
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Express.js
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Nest />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Nest.js
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            {theme == "dark" ? <DarkSocket /> : <Socket />}
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Socket.js
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[48px] lg:grid-cols-[32px] lg:flex lg:gap-[96px]">
          <div className="flex flex-col gap-[8px] items-center">
            <Image src={Postgresql} />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              PostgreSQL
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <MongoDB />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              MongoDB
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Sass />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Sass/Scss
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Image src={Tailwind} />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Tailwindcss
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Figma />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Figma
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            {theme == "dark" ? <DarkCypress /> : <Cypress />}
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Sypress
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Storybook />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Storybook
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-center">
            <Git />
            <p className="font-extralight text-lg text-gray-600 dark:text-gray-300">
              Git
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
