import { useState } from "react";

// const Hook = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => {
//     setClick(!click); //! huvisagchiig dandaa esreg utgaar ni solino *boolen ashiglaj bga ued
//   };
//   return (
//     <div className="p-[20px]">
//       <button
//         onClick={handleClick}
//         style={{
//           // background: text == "on" ? "green" : "red",

//           border: "1px solid white",
//           padding: "10px",
//         }}
//         className={`${click ? "bg-green-600" : "bg-red-600"}`}
//       >
//         {click ? "on" : "off"}
//       </button>
//     </div>
//   );
// };

// export default Hook;

const Hook = () => {
  const [text, setText] = useState("On");
  const handleClick = () => {
    if (text == "on") {
      setText("off");
    } else {
      setText("on");
    }
  };
  return (
    <div className="p-[20px]">
      <button
        onClick={handleClick}
        style={{
          // background: text == "on" ? "green" : "red",

          border: "1px solid blue",
          padding: "10px",
        }}
        className={`${text == "on" ? "bg-green-600" : "bg-red-600"}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Hook;
