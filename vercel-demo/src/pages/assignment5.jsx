import { useState } from "react";
const Assignment5 = () => {
  const [isPassed, setIsPassed] = useState(true);
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const passingStudents = students.filter((student) => {
    return isPassed ? student.grade >= 60 : student.grade < 60;
  });
  // console.log(passingStudents);
  const handlePass = (param1) => {
    setIsPassed(param1);
  };
  return (
    <div className="p-10 gap-4">
      <div>
        <p className="font-bold text-xl">Filter Students Who Passed Task</p>
        <button
          className="border-2 border-blue-300 p-1 m-2 w-[120px] cursor-pointer hover:bg-blue-300 "
          onClick={() => handlePass(true)}
        >
          Passed
        </button>
        <button
          className="border-2 border-blue-300 p-1 m-2 w-[120px] cursor-pointer hover:bg-blue-300 "
          onClick={() => handlePass(false)}
        >
          Failed
        </button>
      </div>
      <div>
        {passingStudents.map((student, index) => {
          return <p key={index}>{student.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Assignment5;
