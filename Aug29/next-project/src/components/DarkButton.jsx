export const DarkButton = ({ button }) => {
  return (
    <div className=" flex justify-center">
      <button className="w-28 h-8 rounded-2xl  font-normal text-white text-center dark:bg-[#374151]"></button>
    </div>
  );
};

const LightButton = ({ button }) => {
  return (
    <div className=" flex justify-center">
      <button className="w-28 h-8 rounded-2xl  font-normal text-black text-center bg-slate-300 dark:bg-white"></button>
    </div>
  );
};
