import React, { useReducer, useRef, useState } from "react";
import "../styles/styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  // const InputField: React.FC<Props> = ({todo, setTodo}) => { // you can use either

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input-form" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="input-box"
        />
        <button type="submit" className="input-submit">
          Go
        </button>
      </form>
      <button onClick={() => inputRef.current?.blur()}>Unfocus</button>

      </div>
    
    
  );
};

export default InputField;
