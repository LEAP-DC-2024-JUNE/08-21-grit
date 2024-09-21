// Assignment 1: Filter Even NumbersTask: Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.function filterEvenNumbers(numbers) {  // Use filter to return only even numbers}// Exampleconsole.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

//   Assignment 2: Filter Strings by LengthTask: Write a function filterByLength that takes an array of strings and a number n. It should return a new array with only the strings that have more than n characters.function filterByLength(strings, n) {  // Use filter to return strings longer than n characters}// Exampleconsole.log(filterByLength(["apple", "banana", "kiwi", "pear"], 4)); // ["apple", "banana"]

//     Assignment 3: Filter Objects by PropertyTask: Write a function filterByAge that takes an array of objects, each representing a person with name and age properties. The function should return a new array containing only the people who are 18 or older.function filterByAge(people) {  // Use filter to return people aged 18 or older}// Exampleconst people = [  { name: "John", age: 17 },  { name: "Jane", age: 22 },  { name: "Tom", age: 15 },  { name: "Emma", age: 30 },];console.log(filterByAge(people)); // [{ name: "Jane", age: 22 }, { name: "Emma", age: 30 }]

//       Assignment 4: Filter Products by AvailabilityTask: Write a function filterAvailableProducts that takes an array of products, where each product is an object with name, price, and available properties. It should return a new array containing only the products that are available (available: true).function filterAvailableProducts(products) {  // Use filter to return only available products}// Exampleconst products = [  { name: "Laptop", price: 1200, available: true },  { name: "Phone", price: 800, available: false },  { name: "Tablet", price: 400, available: true },];console.log(filterAvailableProducts(products)); // [{ name: "Laptop", price: 1200, available: true }, { name: "Tablet", price: 400, available: true }]

//         Assignment 5: Filter Students Who PassedTask: Write a function filterPassingStudents that takes an array of students, where each student is an object with name and grade properties. Return a new array containing only the students who scored 60 or more.function filterPassingStudents(students) {  // Use filter to return students with grade >= 60}// Exampleconst students = [  { name: "Alice", grade: 58 },  { name: "Bob", grade: 72 },  { name: "Charlie", grade: 85 },  { name: "David", grade: 45 },];console.log(filterPassingStudents(students)); // [{ name: "Bob", grade: 72 }, { name: "Charlie", grade: 85 }]

const Home = () => {
  const array = [
    {
      name: "Suvd",
      age: 18,
    },
    {
      name: "Alungoo",
      age: 17,
    },
    {
      name: "David",
      age: 19,
    },
  ];

  const filteredArray = array.filter((element) => element.age >= 18);

  return (
    <div className="p-10 gap-4">
      <h1
        className="font-bold text-xl
      "
      >
        Nasand hursen humuus
      </h1>
      <div>
        {filteredArray.map((person, index) => {
          return (
            <div key={index}>
              <p>{person.name}</p>
              <span>{person.age}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

// const array = [1, 2, 3, 4];

// const filteredArray = array.filter((element) => {
//   return element > 2;
// });

// console.log(filteredArray);

// const Home = () => {
//   const [age, setAge] = useState(18);
//   [
//     {
//       name: "Suvd",
//       age: 18,
//     },
//     {
//       name: "Alungoo",
//       age: 17,
//     },
//     {
//       name: "Dul",
//       age: 19,
//     },
//   ];
// };
// const filteredArray = array.filter((element) => {
//   return element.age >= age;
// });
// // const handleClick = () => {
// //   setAge(0);
// // };
// const handleClickAdult = () => {
//   setAge(18);
// };
// return (
//   <div>
//     <h1>Nasand hursen humuus</h1>
//     <button className="bg-slate-300" onClick={handleClickAdult}>
//       18 aas deesh nasniih
//     </button>
//     <div>
//       {filteredArray.map((person) => {
//         return (
//           <div>
//             <p>{person.name}</p>
//             <span>{person.age}</span>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// );

// export default Home;
