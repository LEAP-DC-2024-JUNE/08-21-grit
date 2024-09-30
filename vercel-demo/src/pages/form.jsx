import { useState } from "react";

const Form = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [phone, setPhone] = useState("");

  // const [standard, setStandard] = useState("");
  // const [premium, setPremium] = useState("");
  // const [ultimate, setUltimate] = useState("");

  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleFirstName = (param1) => {
    setFirstName(param1);
  };

  const handleEmail = (mail) => {
    setEmail(mail);
  };

  const handleAddress = (param1) => {
    setAddress(param1);
  };
  const handleAddress2 = (param1) => {
    setAddress2(param1);
  };
  const handleCity = (param1) => {
    setCity(param1);
  };

  const handleState = (param1) => {
    setState(param1);
  };

  const handlePostal = (param1) => {
    setPostal(param1);
  };
  const handlePhone = (param1) => {
    setPhone(param1);
  };

  const handleRadioInput = (param1) => {
    setMembership(param1);
  };

  // const handleStandard = (param1) => {
  //   setStandard(param1);
  // };
  // const handlePremium = (param1) => {
  //   setPremium(param1);
  // };
  // const handleUltimate = (param1) => {
  //   setUltimate(param1);
  // };

  const submitButton = () => {
    console.log(
      firstName,
      lastName,
      email,
      address,
      address2,
      city,
      state,
      postal,
      phone,
      standard,
      premium,
      ultimate
    );
  };

  return (
    <div className="bg-blue-50 font-bold p-6">
      <p className="text-3xl text-purple-400 text-center justify-center">
        New Member Registration
      </p>
      <div className="text-gray-700 font-bold flex gap-8 justify-start mt-20 md:justify-center lg:justify-center p-2">
        <div>
          <p>First Name </p>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md"
            // placeholder="FirstName"
            onChange={(event) => handleFirstName(event.target.value)}
          />

          <p>Address </p>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md"
            onChange={(event) => handleAddress(event.target.value)}
          />

          <p>City </p>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md"
            onChange={(event) => handleCity(event.target.value)}
          />
        </div>

        <div>
          <p>Last Name</p>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md"
            // placeholder="LastName"
            onChange={(event) => handleLastName(event.target.value)}
          />

          <p>Address 2 </p>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md"
            onChange={(event) => handleAddress2(event.target.value)}
          />
        </div>
      </div>

      <div className="text-gray-700 font-bold flex justify-start gap-8 md:justify-center lg:justify-center p-2">
        <div>
          <p>State/Province </p>
          <select
            type="dropdown"
            className="border-2 border-gray-500 rounded-md w-28 h-7"
            onChange={(event) => handleState(event.target.value)}
          />
        </div>
        <div>
          <p>Zip/Postal Code </p>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md w-20"
            onChange={(event) => handlePostal(event.target.value)}
          />
        </div>
      </div>

      <div className="text-gray-700 font-bold flex flex-col items-start md:items-center-center lg:items-center p-2 ">
        <div>
          <p>Phone </p>
          <input
            type="number"
            className="border-2 border-gray-500 rounded-md"
            placeholder="(___) ___ - ____"
            onChange={(event) => handlePhone(event.target.value)}
          />
        </div>
        <div>
          <p>Email Address</p>
          <input
            type="text"
            className="border-2 border-gray-500"
            placeholder="email"
            onChange={(event) => handleEmail(event.target.value)}
          />
        </div>
        <div className="mt-20">
          <p>Membership Type</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="membershipType"
              value={"Standard"}
              onChange={(event) => handleRadioInput(event.target.value)}
            />
            <span>Standard</span>
            <input
              type="radio"
              name="membershipType"
              value={"Premium"}
              onChange={(event) => handleRadioInput(event.target.value)}
            />
            <span>Preimium</span>
            <input
              type="radio"
              name="membershipType"
              value={"Classic"}
              onChange={(event) => handleRadioInput(event.target.value)}
            />
            <span>Classic</span>
          </div>
        </div>
      </div>

      <div className=" flex justify-center text-gray-700 font-bold mt-8">
        <button
          className=" border-2 rounded-md border-gray-500 tracking-wider cursor-pointer hover:bg-blue-200 mb-40"
          onClick={submitButton}
        >
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Form;
