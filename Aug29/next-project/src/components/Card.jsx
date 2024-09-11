import Image from "next/image";
import UbCab from "../Icons/Ubcab.png";

const Card = (props) => {
  // const props = { title: "work", description: "black" };
  // console.log(props.description);
  return (
    <div className="flex">
      <div className=" flex">
        <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black">
          {props.title}
        </button>
      </div>
      <div className="flex">
        <div className=" flex mt-24">
          <Image src={UbCab} width={440} height={520} />
        </div>
        <div className=" text-center w-[600px] h-[364px] gap-[48px] opacity-100 flex flex-col pl-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
      </div>
      <div>
        <p className="flex justify-center">UBCab</p>
        <div className=" flex justify-center ">
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            React
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Next.js
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Typescript
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Nest.js
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            PostgreSQL
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Tailwindcss
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Figma
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Cypress
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Storybook
          </button>
          <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Git
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Card;
