import Image from "next/image";
import Card from "./CardWork";
import Ubcab from "../Icons/Ubcab.png";
import Mentorhub from "../Icons/Mentorhub.png";
import iToim from "../Icons/iToim.png";

const Work = () => {
  return (
    <div>
      <div className="w-full px-20 py-24 bg-gray">
        <div className="px-8 flex flex-col gap-12">
          <div className="flex flex-col justify-center">
            <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black dark:bg-[#374151] ">
              Work
            </button>
          </div>
          <div className=" text-center pt-6 text-sm sm:text-base md:text-lg lg:text-x mb-2">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="flex flex-col items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Work;
