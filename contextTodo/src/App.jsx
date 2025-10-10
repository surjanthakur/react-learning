import { useState, useEffect } from "react";
import "./App.css";
import { TodoContextProvider } from "./context/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  // add todo func
  const addTodo = (todo) => {
    setTodos((prev) => ({ id: Date.now(), ...todo, ...prev }));
  };

  // update todo func
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? { todo: todo.todo } : prevtodo
      )
    );
  };

  // delete todo func
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // check if todo complete or not
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <TodoContextProvider
        value={{ addTodo, updateTodo, deleteTodo, todos, toggleComplete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
