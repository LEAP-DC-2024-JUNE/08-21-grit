// const array = [2, -3, 5, 6, -8, 10];
// let i = 0;
// let sum = 0;
// while (i < array.length) {
//   debugger;
//   if (array[i] > 0) {
//     if (array[i] % 2 == 0) {
//       sum = sum + array[i];
//     }
//   }
//   i++;
// }
// console.log(sum);

//Array Map Exercises

//Bodlogo1

// function doubleNumbers(arr) {
//   return arr.map((num) => num * 2);
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//Bodlogo2
// function stringItUp(arr) {
//   return arr.map(String);
// }

// console.log(stringItUp([2, 5, 100]));

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // //Bodlogo3
// // function capitalizeNames(arr) {
// //   return arr.map((name) => {
// //     // Capitalize the first letter and make the rest lowercase
// //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// //   });
// // }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// // Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]

// //Bodlogo4
// function namesOnly(arr) {
//   return arr.map((name) => person.name);
// }

// console.log(
//   namesOnly([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
//   ])
// );
// Output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//Bodlogo 5
// function whoCango(arr) {
//   return arr.map((person) => {
//     if (person.age >= 18) {
//       return `${person.name} can go to The Matrix`;
//     } else {
//       return `${person.name} is under age!!`;
//     }
//   });
// }

// console.log(
//   whoCango([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// Bodlogo6; (undefined asuuh)
function readyToPutInTheDOM(arr) {
  return arr.map((person) => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
  });
}

console.log(
  readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);
// Output: [
//   "<h1>Angelina Jolie</h1><h2>80</h2>",
//   "<h1>Eric Jones</h1><h2>2</h2>",
//   "<h1>Paris Hilton</h1><h2>5</h2>",
//   "<h1>Kayne West</h1><h2>16</h2>",
//   "<h1>Bob Ziroll</h1><h2>100</h2>",
// ];
