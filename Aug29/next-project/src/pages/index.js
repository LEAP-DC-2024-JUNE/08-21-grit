import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Experience from "../components/Experience";
import About from "../components/About";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {" "}
        {/* Padding to ensure the Header is not hidden under the Navbar */}
        <Header />
      </main>
      <main className="pt-16">
        {" "}
        <About />
      </main>
      <main className="pt-16">
        {" "}
        <Experience />
      </main>
      <div className="pt-16">
        <div className=" text-center">
          <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black">
            Work
          </button>
        </div>
        <div className=" text-center pt-6">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <Work />
    </>
  );
}

// const arr = [1, 5, 3, 4, 100];

// let sum = 0;

// arr.map((element) => {
//   sum = sum + element;
// });

// console.log(sum);

// // for (let i = 0; i < arr.length; i++) {
// // sum = sum + arr[i];
// // }
