import Image from "next/image";
const Card2 = (props) => {
  const { imgSrc, title, description, time } = props;
  return (
    <div className=" inline-block  bg-white h-[420px] lg:h-[288px] lg:grid lg:grid-cols-3 dark:bg-[#1F2937] rounded-xl ">
      <div className="my-4 justify-start pl-8">
        {<Image src={imgSrc} width={102} height={28} />}
      </div>

      <div className="my-4 text-start pl-8  lg:text-end lg:pr-8 lg:order-2">
        {time}
      </div>
      <div className="pl-8 flex flex-col p-[3px] lg:order-1">
        <div className="my-4 text-xl">{title}</div>
        <div className="my-4 list-disc text-sm">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
