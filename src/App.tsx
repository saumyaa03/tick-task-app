import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const [focused, setFocused] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
      // clear the input now
      setTodo("");
    }
  };

  return (
    <div className={`App ${focused ? "dark" : ""}`}>
      <span className="heading">TICK-TASK</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
        setFocused={setFocused}
      />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
