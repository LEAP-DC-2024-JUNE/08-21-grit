import Image from "next/image";
import localFont from "next/font/local";
import Glasses from "../components/Glasses";
import ConRendering from "../components/ConRendering";

export default function Home() {
  return (
    <div>
      <Glasses />
    </div>
  );
}

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
