import { Todo } from "../model";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdDone } from "react-icons/md";
import "../styles/styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo }) => {
  return (
    <form className="todos-single">
      <span className="todos-single-text">{todo.todo}</span>
      <div>
        <span className="icon"><MdDone /></span>
        <span className="icon"><MdDelete /></span>
        <span className="icon"><CiEdit /></span>
      </div>
    </form>
  );
};

export default SingleTodo;
