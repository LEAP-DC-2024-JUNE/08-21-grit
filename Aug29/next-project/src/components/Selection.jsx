import Image from "next/image";

const Selection = () => {
  return (
    <div className="flex gap-4">
      <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
        Mountain
      </button>
      <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
        Beaches
      </button>
      <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
        Birds
      </button>
      <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
        Food
      </button>
    </div>
  );
};

export default Selection;
