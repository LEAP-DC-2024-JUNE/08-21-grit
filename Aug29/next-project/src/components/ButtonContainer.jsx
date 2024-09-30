const ButtonContainer = (props) => {
  const { buttons = [] } = props;
  return (
    <div className=" flex flex-wrap lg:w-[500px] gap-2 mt-6 justify-center">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center"
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
