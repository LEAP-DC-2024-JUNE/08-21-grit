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

// export default Home;

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

// const Home = () => {
//   const [number, setNumber] = useState(0);

//   const handleClick = () => {
//     setNumber(number + 1);
//   };

//   return (
//     <div className="p-20">
//       <button className="border-2" onClick={handleClick}>
//         {number} times clicked
//       </button>
//     </div>
//   );
// };

// const Hook = () => {
//   const [count, setCount] = useState(0);

//   const handlePlus = () => {
//     setCount(count + 1);
//   };
//   const handleMinus = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div className=" flex gap-4">
//       <p className="font-bold ">Count: {count}</p>
//       <button className="border-2 p-1 border-white" onClick={handlePlus}>
//         +
//       </button>
//       <button className="border-2 p-1 border-white" onClick={handleMinus}>
//         -
//       </button>
//     </div>
//   );
// };

// export default Hook;

// const Hook = () => {
//   const [text, setText] = useState("On");
//   const handleClick = () => {
//     if (text == "on") {
//       setText("off");
//     } else {
//       setText("on");
//     }
//   };
//   return (
//     <div className="p-[20px]">
//       <button
//         onClick={handleClick}
//         style={{
//           // background: text == "on" ? "green" : "red",

//           border: "1px solid white",
//           padding: "10px",
//         }}
//         className={`${text == "on" ? "bg-green-600" : "bg-red-600"}`}
//       >
//         {text}
//       </button>
//     </div>
//   );
// };

// export default Hook;

const Hook = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click); //! huvisagchiig dandaa esreg utgaar ni solino *boolen ashiglaj bga ued
  };
  return (
    <div className="p-[20px]">
      <button
        onClick={handleClick}
        style={{
          // background: text == "on" ? "green" : "red",

          border: "1px solid white",
          padding: "10px",
        }}
        className={`${click ? "bg-green-600" : "bg-red-600"}`}
      >
        {click ? "on" : "off"}
      </button>
    </div>
  );
};

export default Hook;
