import { useState } from "react";

// const Hook = () => {
//   const [name, setName] = useState("Suvd");

//   const handleClick = () => {
//     setName("Test");
//   };

//   return (
//     <div>
//       <p>{name}</p>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// };

// export default Hook;

// const Home = () => {
//   const [name, setName] = useState("Suvd");
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setName(1);
//     setCount(100);
//   };

//   return (
//     <div>
//       <p>{name}</p>
//       <p>{count}</p>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// };

// export default Home;

// Click hiisen tootoigoo button dree garch irne
const Home = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div className="p-20">
      <button
        className="border-2 border-blue-300 p-1 m-2 w-[120px] cursor-pointer hover:bg-blue-300 "
        onClick={handleClick}
      >
        {number} times clicked
      </button>
    </div>
  );
};

const Hook = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className=" flex gap-4">
      <p className="font-bold ">Count: {count}</p>
      <button className="border-2 p-1 border-white" onClick={handlePlus}>
        +
      </button>
      <button className="border-2 p-1 border-white" onClick={handleMinus}>
        -
      </button>
    </div>
  );
};

export default Home;
