import Image from "next/image";
// import { Button } from "./Button";

const Card = (props) => {
  const { title, description, imgSrc, reverse } = props;
  // const props = { title: "work", description: "black" };
  // console.log(props.description);
  if (reverse === true) {
    return (
      <div className="w-[1152px] h-[480px]">
        <div className="flex flex-row-reverse ">
          <div className=" flex mt-24">
            {<Image src={imgSrc} width={440} height={520} />}
          </div>
          <div className=" text-center w-[600px] h-[364px] gap-[48px] opacity-100 flex flex-col pl-24 pt-24">
            <div className="font-bold">{title}</div>
            <div className="pr-24">{description}</div>
          </div>
        </div>
        {/* {buttons.map((button) => {
          return <Button button={button} />;
        })} */}
      </div>
    );
  }
  return (
    <div className="w-[1152px] h-[480px]">
      <div className="flex gap-16 ">
        <div className=" flex mt-24">
          {<Image src={imgSrc} width={440} height={520} />}
        </div>
        <div className=" text-center w-[600px] h-[364px] opacity-100 flex flex-col pl-24 pt-24">
          <div className="font-bold">{title}</div>
          <div className="text-center w-[600px] h-[364px]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

/* <div>
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
      </div> */
