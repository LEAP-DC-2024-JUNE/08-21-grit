// const Assignment2 = () => {
//   const array = ["apple", "banana", "kiwi", "pear"];
//   let n = 4;
//   const filteredArray = array.filter((element) => {
//     return element.length > n;
//   });

//   return (
//     <div>
//       <div>Filter Strings by Length</div>
//       {filteredArray.map((element) => {
//         return <p>{element}</p>;
//       })}
//     </div>
//   );
// };

// export default Assignment2;

import { useState } from "react";

const Assignment2 = () => {
  const [value, setValue] = useState(0);
  const array = ["apple", "banana", "kiwi", "pear"];
  const filteredArray = array.filter((element) => {
    return element.length > value;
  });
  const handleChangeValue = (param1) => {
    setValue(param1);
  };
  return (
    <div>
      <div>Filter Strings by Length</div>

      <button
        className="border-2 bg-white"
        onClick={() => handleChangeValue(4)}
      >
        4
      </button>

      <button
        className="border-2 bg-white"
        onClick={() => handleChangeValue(2)}
      >
        2
      </button>

      <button
        className="border-2 bg-white"
        onClick={() => handleChangeValue(5)}
      >
        5
      </button>

      {filteredArray.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};

export default Assignment2;

// Assignment 2: Filter Strings by Length

// Task: Write a function filterByLength that takes an array of strings and a number n. It should return a new array with only the strings that have more than n characters.

// function filterByLength(strings, n) {
//   // Use filter to return strings longer than n characters
// }

// // Example
// console.log(filterByLength(["apple", "banana", "kiwi", "pear"], 4)); // ["apple", "banana"]
