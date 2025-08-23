import React, { useState } from "react";
import "../styles/styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
}


const InputField = ({ todo, setTodo, handleAdd, setFocused}: Props) => {
  // const InputField: React.FC<Props> = ({todo, setTodo}) => { // you can use either

  return (
    <form className="input-form" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onFocus={() => setFocused(true)} // mark focused
        onBlur={() => setFocused(false)} // remove the blur
      
        className="input-box"
      />
      <button type="submit" className="input-submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
