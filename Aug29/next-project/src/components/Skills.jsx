import Image from "next/image";
import Html from "../Icons/logo-html.png";
import Css from "../Icons/css.png";
import Js from "../Icons/Tech.png";
import React from "../Icons/React.png";
import Next from "../Icons/next.png";
import Tailwind from "../Icons/Tailwind.png";
import Figma from "../Icons/icon-figma.png";
import Firebase from "../Icons/firebase.png";
import Git from "../Icons/icon-git.png";

const Skills = () => {
  return (
    <div className="mt-8">
      <div className=" flex flex-col items-center">
        <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center">
          Skills
        </button>
        <p className="mt-6">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex justify-center gap-16 mt-16">
        <div className="flex flex-col items-center">
          <Image src={Html} width={64} height={64} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={Css} width={64} height={64} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={Js} width={64} height={64} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={React} width={52} height={52} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={Next} width={50} height={50} />
        </div>

        <div className="flex flex-col items-center">
          <Image src={Tailwind} width={64} height={64} />
        </div>

        <div className="flex flex-col items-center text-pretty text-slate-500 w-8">
          <Image src={Figma} width={50} height={50} />
          <p>Figma</p>
        </div>
        <div className="flex w-20 mb-3 ">
          <Image src={Firebase} />
        </div>
        <div className="flex flex-col items-center  text-slate-500 w-10">
          <Image src={Git} width={64} height={66} />
          <p>git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
