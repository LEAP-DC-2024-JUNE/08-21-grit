const Card2 = (props) => {
  const { imgSrc, title, description, time } = props;
  return (
    <div className=" inline-block  bg-white h-[420px] lg:h-[288px] lg:grid lg:grid-cols-3 dark:bg-[#1F2937]">
      <div className="my-4 justify-start pl-8">
        {<img src={imgSrc} width={102} height={28} />}
      </div>

      <div className="my-4 text-start pl-8 lg:text-end lg:pr-8">{time}</div>
      <div className="pl-8 flex flex-col p-[3px]">
        <div className="my-4 text-xl">{title}</div>
        <div className="my-4">{description}</div>
      </div>
    </div>
  );
};

export default Card2;
