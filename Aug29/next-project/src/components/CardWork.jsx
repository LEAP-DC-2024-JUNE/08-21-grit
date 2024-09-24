import Image from "next/image";
import { Button } from "./Button";
import { DarkButton } from "./DarkButton";
import { useTheme } from "next-themes";

const Card = (props) => {
  const { title, description, imgSrc, tags, reverse } = props;
  // const props = { title: "work", description: "black" };
  // console.log(props.description);
  const { theme } = useTheme();
  if (reverse === true) {
    return (
      <div className="flex flex-col lg:flex-row-reverse drop-shadow-md rounded-xl bg-white dark:bg-gray-950 dark:drop-shadow-2xl ">
        <div className="bg-gray-50 dark:bg-gray-700 border-r rounded-t-xl p-12 lg:rounded-none lg:rounded-r-xl border-gray-100 dark:border-gray-50">
          {<Image src={imgSrc} width={480} height={384} />}
        </div>
        <div className=" flex flex-col gap-6 p-8 lg:p-12 flex-1 rounded-b-xl lg:rounded-none lg:rounded-l-xl dark:bg-gray-800">
          <div className="font-bold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </div>
          <p className="font-light text-base text-gray-700 dark:text-gray-300">
            {description}
          </p>

          <div className="flex gap-[8px] flex-wrap">
            {/* {tags.map((tag) => {
              return (
                <span className="rounded-xl bg-gray-200 px-5 py-1 font-medium text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              );
            })} */}
          </div>
          <div>{theme == "dark" ? <DarkButton /> : <Button />}</div>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col drop-shadow-md rounded-xl bg-white dark:bg-gray-950 dark:drop-shadow-2xl ">
        <div className="bg-gray-50 dark:bg-gray-700 border-r flex-1 flex justify-center rounded-t-xl p-12">
          {<Image src={imgSrc} width={480} height={384} />}
        </div>
        <div className=" flex flex-col gap-6 p-8 lg:p-12 flex-1 rounded-b-xl lg:rounded-none lg:rounded-r-xl">
          <div className="font-bold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </div>
          <div className="font-light text-base text-gray-700 dark:text-gray-300">
            {description}
          </div>

          <div className="flex gap-[8px] flex-wrap">
            {/* {tags.map((tag, index) => {
              return (
                <span className="rounded-xl bg-gray-200 px-5 py-1 font-medium text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              );
            })} */}
          </div>
          <div>{theme == "dark" ? <DarkButton /> : <Button />}</div>
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
