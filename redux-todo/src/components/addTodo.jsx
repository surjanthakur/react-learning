import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-full max-w-md flex items-center justify-center gap-3 mt-10 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-700 shadow-md"
    >
      <input
        type="text"
        className="flex-1 bg-transparent text-white placeholder-gray-400 border border-zinc-700 rounded-xl py-2 px-4 text-base outline-none focus:border-[#ACFE65] focus:ring-2 focus:ring-[#ACFE65]/40 transition-all duration-200"
        placeholder="✍️ Write a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#ACFE65] text-[#141C18] font-semibold px-5 py-2 rounded-xl hover:bg-[#bfff6d] transition-all duration-200 active:scale-95 shadow hover:shadow-lg"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
