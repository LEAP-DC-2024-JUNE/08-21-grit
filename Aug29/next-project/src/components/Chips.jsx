export const Chips = ({ chips }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {chips.map((chip, index) => {
        <button
          key={index}
          className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center"
        >
          {chip}
        </button>;
      })}
    </div>
  );
};
