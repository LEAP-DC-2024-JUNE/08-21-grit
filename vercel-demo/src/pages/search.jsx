import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const people = [
    {
      name: "Billy",
      age: 20,
      class: "Leap-Dc",
    },
    {
      name: "Anar",
      age: 20,
      class: "Leap-Dc",
    },
    {
      name: "Suvd",
      age: 20,
      class: "Leap-Dc",
    },
    {
      name: "Alungoo",
      age: 20,
      class: "Leap-Dc",
    },
  ];
  const filteredValue = people.filter((person) => {
    let inputValueLower = inputValue.toLowerCase();
    let personNameLower = person.name.toLowerCase();
    return personNameLower.includes(inputValueLower);
    // return person.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        className="border-2 "
        onChange={(event) => setInputValue(event.target.value)}
      />
      {filteredValue.length == 0
        ? people.map((person) => {
            return (
              <div className="border-2 ">
                <p>{person.name}</p>
                <p>{person.class}</p>
              </div>
            );
          })
        : filteredValue.map((person) => {
            return (
              <div className="border-2 ">
                <p>{person.name}</p>
                <p>{person.class}</p>
              </div>
            );
          })}
    </div>
  );
};

export default Search;
