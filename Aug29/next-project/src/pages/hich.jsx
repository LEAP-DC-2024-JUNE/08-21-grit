import Navbar from "../components/Navbar";
import Head from "../components/Head";
import Search from "../components/Search";
import Selection from "../components/Selection";
import Mountain from "../components/Mountain";

export default function Home() {
  return (
    <>
      <Head />
      <Search />
      <Selection />
      <Mountain />
    </>
  );
}

// import { Icon, Icon1 } from "../components/Comp-test";

// export default function Home() {
//   return (
//     <div className="text-center">
//       <Image />
//       <Image1 />
//       <HeaderDescription />
//       <HeaderTitle />
//     </div>
//   );
// }

// // import Header, { HeaderDescription, HeaderTitle } from "../components/Hicheel";

// // export default function Home() {
// //   return (
// //     <div className="text-center">
// //       <HeaderDescription />
// //       <HeaderTitle />
// //       <Header />
// //     </div>
// //   );
// // }
