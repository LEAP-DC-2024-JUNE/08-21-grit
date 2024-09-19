import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Experience from "@/components/Experience";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useTheme } from "next-themes";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      {/* <Skills />
      <Experience />
      <Work /> */}
      <Contact />
    </div>
  );
};

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <About />
//       <Skills />
//       <Experience />
//       <Work />
//       <Contact />
//     </>
//   );
// }
export default Home;
// const arr = [1, 5, 3, 4, 100];

// let sum = 0;

// arr.map((element) => {
//   sum = sum + element;
// });

// console.log(sum);

// // for (let i = 0; i < arr.length; i++) {
// // sum = sum + arr[i];
// // }
