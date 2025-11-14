import { useState } from "react";
import { addTodo } from "../features/todo";
import { useDispatch } from "redux";

function AddTodo() {
  // Local state for storing the current input value
  const [inputData, setInputData] = useState("");

  // Get Redux dispatch function
  const dispatch = useDispatch();

  // Handle form submit -> add todo
  const addTodoHandler = (e) => {
    e.preventDefault();

    // Dispatch the todo to Redux store
    dispatch(addTodo(inputData));

    // Reset input after submitting
    setInputData("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* Input box for writing todo */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
        text-base outline-none text-gray-100 py-1 px-3 leading-8 
        transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />

      {/* Button to add todo */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
