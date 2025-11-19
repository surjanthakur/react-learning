import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoItem from './components/allTodo';
import TodoForm from './components/todoForm';
import { TodoContextProvider } from './context/todoContext';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    let newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
    };
    setTodos(newTodo);
  };

  const updateTodo = (todo, id) => {
    const updateList = todos.map((t) =>
      t.id === id ? { ...t, task: todo } : t
    );
    setTodos(updateList);
  };

  const toggleComplete = (id) => {
    const updateList = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updateList);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContextProvider
      value={{ addTodo, removeTodo, updateTodo, toggleComplete, todos }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
