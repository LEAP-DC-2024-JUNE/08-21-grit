import { useState } from "react";

const Assignment4 = () => {
  const products = [
    {
      name: "Laptop",
      price: 1200,
      available: true,
    },
    {
      name: "Phone",
      price: 800,
      available: false,
    },
    {
      name: "Tablet",
      price: 400,
      available: true,
    },
  ];

  const [availableProduct, setAvailableProduct] = useState(true);

  const filteredAvailable = products.filter((element) => {
    return element.available == availableProduct;
  });
  const handleClick = (param1) => {
    setAvailableProduct(param1);
  };

  return (
    <div className="p-10 gap-4">
      <h1
        className="font-bold text-xl
      "
      >
        Filter Products by Availability
      </h1>
      <button
        className="border-2 border-blue-300 p-1 m-2 w-[120px] cursor-pointer hover:bg-blue-300 "
        onClick={() => handleClick(true)}
      >
        Available
      </button>
      <button
        className="border-2 border-blue-300 p-1 m-2 w-[120px] cursor-pointer hover:bg-blue-300 "
        onClick={() => handleClick(false)}
      >
        Not Available
      </button>
      <div>
        {filteredAvailable.map((product, index) => {
          return (
            <div key={index}>
              <p>{product.name}</p>
              <span>{product.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment4;

// const Assignment4 = () => {
//   const products = [
//     {
//       name: "Laptop",
//       price: 1200,
//       available: true,
//     },
//     {
//       name: "Phone",
//       price: 800,
//       available: false,
//     },
//     {
//       name: "Tablet",
//       price: 400,
//       available: true,
//     },
//   ];

//   const availableProducts = products.filter((product) => {
//     return product.available == true;
//   });

//   return (
//     <div>
//       <h1>Filter Products by Availability</h1>
//       <div>
//         {availableProducts.map((product) => {
//           return (
//             <div>
//               <p>{product.name}</p>
//               <span>{product.price}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Assignment4;

// Assignment 4: Filter Products by Availability

// Task: Write a function filterAvailableProducts that takes an array of products, where each product is an object with name, price, and available properties. It should return a new array containing only the products that are available (available: true).

// function filterAvailableProducts(products) {
//   // Use filter to return only available products
// }

// // Example
// const products = [
//   { name: "Laptop", price: 1200, available: true },
//   { name: "Phone", price: 800, available: false },
//   { name: "Tablet", price: 400, available: true },
// ];

// console.log(filterAvailableProducts(products));
// // [{ name: "Laptop", price: 1200, available: true }, { name: "Tablet", price: 400, available: true }]
