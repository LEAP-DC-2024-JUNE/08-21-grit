import { useSatate } from "react";

export const Header = () => {
  const [{ inputValue, setInputValue }] = useSatate("");
  return (
    <div>
      <p>Header</p>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};
