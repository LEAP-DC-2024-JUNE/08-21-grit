export const Button = ({ button }) => {
  return (
    <div className=" flex justify-center">
      <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center">
        {button}
      </button>
    </div>
  );
};
