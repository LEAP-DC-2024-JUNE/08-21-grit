import { useState } from "react";

// const Assignment1 = () => {
//   const [value, setValue] = useState(0);
//   const array = [1, 2, 3, 4, 5, 6, 8];
//   const evenNumberArray = array.filter((number) => {
//     return number % 2 == value;
//   });
//   const handleOdd = () => {
//     setValue(1);
//   };
//   const handleEven = () => {
//     setValue(0);
//   };

//   return (
//     <div className="p-10 gap-4">
//       <div
//         className="font-bold text-xl
//       "
//       >
//         {" "}
//         Filter Even Number
//       </div>
//       <button
//         className="border-2 border-blue-300 p-1 m-2 w-16 cursor-pointer hover:bg-blue-300 "
//         onClick={handleOdd}
//       >
//         Odd
//       </button>
//       <button
//         className="border-2 border-blue-300 p-1 m-2 w-16 cursor-pointer hover:bg-blue-300"
//         onClick={handleEven}
//       >
//         Even
//       </button>

//       {evenNumberArray.map((number) => {
//         return <p>{number}</p>;
//       })}
//     </div>
//   );
// };

// export default Assignment1;

//2-r arga (boolean)

const Assignment1 = () => {
  const [isOdd, setIsOdd] = useState(false);

  const array = [1, 2, 3, 4, 5, 6, 8];
  const evenNumberArray = array.filter((number) => {
    return isOdd == true ? number % 2 == 1 : number % 2 == 0;
  });
  const handleOdd = () => {
    setIsOdd(true);
  };
  const handleEven = () => {
    setIsOdd(false);
  };

  return (
    <div className="p-10 gap-4">
      <div
        className="font-bold text-xl
      "
      >
        {" "}
        Filter Even Number
      </div>
      <button
        className="border-2 border-blue-300 p-1 m-2 w-16 cursor-pointer hover:bg-blue-300 "
        onClick={handleOdd}
      >
        Odd
      </button>
      <button
        className="border-2 border-blue-300 p-1 m-2 w-16 cursor-pointer hover:bg-blue-300"
        onClick={handleEven}
      >
        Even
      </button>

      {evenNumberArray.map((number, index) => {
        return <p key={index}>{number}</p>;
      })}
    </div>
  );
};

export default Assignment1;

// const Assignment1 = () => {
//   const array = [1, 2, 3, 4, 5, 6, 8];
//   const evenNumberArray = array.filter((number) => {
//     return number % 2 == 0;
//   });

//   return (
//     <div>
//       <div>Filter Even Number</div>
//       {evenNumberArray.map((number) => {
//         return <p>{number}</p>;
//       })}
//     </div>
//   );
// };

// export default Assignment1;
