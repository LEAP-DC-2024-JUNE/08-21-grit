import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Brand from "./pages/brand";
import Products from "./pages/products";
import Home from "./pages/home";

// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <link to={"/about"}>Go to about page</link>
//       <link>Go to brand page</link>
//       link
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = "Suvdaa";
//   if (name == "Suvdaa") {
//     return <div>Hello</div>;
//   } else {
//     return <div>User not found</div>;
//   }
// }

// export default App;
