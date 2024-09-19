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
    <div className=" w-[375px] h-[500px] justify-between px-[64px] py-[16px]  items-center	lg:container lg:px-[96px] lg:py-[80px] ">
      <div className=" flex flex-col items-center">
        <div className=" flex flex-col items-center ">
          <button className="w-[105px] h-[28px] rounded-[12px] bg-[#E5E7EB] items-center font-normal text-black text-center ">
            Skills
          </button>
        </div>
        <p className="mt-6">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <section className=" grid grid-cols-3 gap-8 justify-center items-center mt-16">
        <div>
          <div className="flex flex-col items-center">
            <Image src={Html} width={64} height={64} />
          </div>
          <div className="flex flex-col items-center">
            <Image src={Css} width={64} height={64} />
          </div>
          <div className="flex flex-col items-center">
            <Image src={Js} width={64} height={64} />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <Image src={React} width={64} height={64} />
          </div>
          <div className="flex flex-col items-center">
            <Image src={Next} width={64} height={64} />
          </div>

          <div className="flex flex-col items-center">
            <Image src={Tailwind} width={64} height={64} />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center text-pretty text-slate-500 w-8">
            <Image src={Figma} width={64} height={64} />
            <p>Figma</p>
          </div>
          <div className="flex w-20 mb-3 ">
            <Image src={Firebase} />
          </div>
          <div className="flex flex-col items-center  text-slate-500 w-10">
            <Image src={Git} width={64} height={64} />
            <p>git</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
