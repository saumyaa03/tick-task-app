import React, {useRef } from "react";
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
    <form
      className="input-form"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
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
  );
};

export default InputField;
