import React from "react";
import "../styles/styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos-list">
      {todos.map((t) => (
        // <li key={t.id}>{t.todo}</li>
        <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
