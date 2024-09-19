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

  const availableProducts = products.filter((product) => {
    return product.available == true;
  });

  return (
    <div>
      <h1>Filter Products by Availability</h1>
      <button>Idevhitei baraa</button>
      <button>Duussan baraa</button>
      <div>
        {availableProducts.map((product) => {
          return (
            <div>
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
