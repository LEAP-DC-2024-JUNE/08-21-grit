import Image from "next/image";
import Card from "./CardWork";
import Ubcab from "../Icons/Ubcab.png";
import Mentorhub from "../Icons/Mentorhub.png";
import iToim from "../Icons/iToim.png";

const Work = () => {
  const datas = [
    {
      imgSrc: Ubcab,
      title: "Ubcab",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum anti psum primis faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      imgSrc: Mentorhub,
      title: "Mentorhub",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum anti psum primis faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      imgSrc: iToim,
      title: "iToim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum anti psum primis faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-black text-center pb-6">
      <div className="px-8 flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center py-4 mt-8">
          <button className=" w-28 h-8 rounded-2xl py-1 bg-slate-300 font-normal text-black dark:bg-[#CBD5E1] items-center text-center ">
            Work
          </button>
        </div>
        <div className=" text-center text-sm sm:text-base md:text-lg lg:px-[240px] lg:text-x mb-2 dark:text-white">
          Some of the noteworthy projects I have built:
        </div>
        <div className="flex flex-col gap-6">
          {" "}
          {datas.map((data, index) => {
            return <Card key={index} {...data} reverse={index % 2 == 0} />;
          })}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col items-center gap-4">
          <Card
            imgSrc={Ubcab}
            title="UBCab"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae."
          />
          <Card
            imgSrc={Mentorhub}
            title="MentorHub"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae."
            reverse={true}
          />
          <Card
            imgSrc={iToim}
            title="iToim"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae."
          />
        </div> */
}

export default Work;
