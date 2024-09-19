import { useState } from "react";

const Form = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleFirstName = (param1) => {
    setFirstName(param1);
  };

  const handleEmail = (mail) => {
    setEmail(mail);
  };

  const submitButton = () => {
    console.log(firstName, lastName, email);
  };

  return (
    <div className="flex flex-col w-28">
      <input
        type="text"
        className="border-2 border-gray-500"
        placeholder="LastName"
        onChange={(event) => handleLastName(event.target.value)}
      />

      <input
        type="text"
        className="border-2 border-gray-500"
        placeholder="FirstName"
        onChange={(event) => handleFirstName(event.target.value)}
      />

      <input
        type="text"
        className="border-2 border-gray-500"
        placeholder="email"
        onChange={(event) => handleEmail(event.target.value)}
      />

      <button onClick={submitButton}>SignIn</button>

      {/* <input
        type="password"
        className="border-2 border-gray-500"
        placeholder="*****"
      />

      <input
        type="date"
        className="border-2 border-gray-500"
        placeholder="09/18/2024"
      />
      <input
        type="email"
        className="border-2 border-gray-500"
        placeholder="abc@gmail.com"
      />

      <input
        type="color"
        className="border-2 border-gray-500"
        placeholder="abc@gmail.com"
      />

      <input
        type="checkbox"
        className="border-2 border-gray-500"
        placeholder="abc@gmail.com"
      /> */}
    </div>
  );
};

export default Form;
