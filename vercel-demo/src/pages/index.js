// import Image from "next/image";
// import localFont from "next/font/local";
// import Glasses from "../components/Glasses";
// import ConRendering from "../components/ConRendering";

// export default function Home() {
//   return (
//     <div>
//       <Glasses />
//     </div>
//   );
// }

//09/17 Hook-use state

// import { useState } from "react";

// const Home = () => {
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

// import { useState } from "react";

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

// export default Home;

import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
    handleMinus = () => {
      setCount(count - 1);
    };
  };

  return (
    <div className="p-20">
      <p>Count: {count}</p>
      <button className="border-2" onClick={handlePlus}>
        +
      </button>
      <button className="border-2" onClick={handleMinus}>
        -
      </button>
    </div>
  );
};

export default Home;

// export const LoginStatus = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return <div>Logged In</div>;
//   }
//   return <div>Please Log In</div>;
// };

// const ConRendering = ({ imgSrc, title }) => {
//   return (
//     <div>
//       <div> imgSrc: {Img1}</div>
//       {title && <div> title: {Burnikk} </div>}
//     </div>
//   );
// };

// const Home = () => {
//   let age = 18;

//   return (
//     <div>
//       {age > 18 ? <div>Nasand hursen</div> : <div>Nasand hureegui</div>}{" "}
//     </div>
//   );
// };

// export default Home;

// const Home = () => {
//   let loading = true;

//   return (
//     <div>
//       {loading == true && <div>Loading</div>}
//       {loading == false && <div>Hello Leap guys</div>}
//       //tovch bichiglel
//       {loading && <div>Loading</div>}
//       {!loading && <div>Hello Leap guys</div>}
//     </div>
//   );
// };

// export default Home;
// const Home = () => {
//   let obj = {
//     name: "Suvd",
//     lastName: "Lkhagva",
//   };

//   return (
//     <div>
//       {obj.name == "Suvd" && obj.lastName == "Lkhagva" && <div>Welcome</div>}
//       {obj.name !== "Suvd" ||
//         (obj.lastName !== "Lkhagva" && <div>Nevtreh erhgui bn</div>)}
//     </div>
//   );
// };

// export default Home;
