import React, { useRef } from "react";
import { InputProps } from "../interfaces/InputProps";
import "../styles/InputField.component.css";

const InputField: React.FC<InputProps> = ({ tody, setTody, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={tody}
        onChange={(e) => setTody(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
