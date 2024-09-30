// export default function Home() {
//   fetch("https://dev.to/api/articles")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   return (
//     <div className="flex justify-center">
//       <div>Hello</div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function Home() {
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      <div>Hello</div>
    </div>
  );
}
