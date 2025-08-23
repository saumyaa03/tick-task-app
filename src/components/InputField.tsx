import React from 'react';
import '../styles/styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  // const InputField: React.FC<Props> = ({todo, setTodo}) => { // alternative style

  console.log(todo);

  return (
    <form className='input-form'> 
      <input 
        type='text' 
        placeholder='Enter a task' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='input-box'
      />
      <button type='submit' className='input-submit'>Go</button>
    </form>
  );
};

export default InputField;
