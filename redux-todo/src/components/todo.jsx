import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-[#141C18] flex flex-col items-center py-10 px-4">
      <h1 className="text-[#ACFE65] text-3xl font-bold mb-6 tracking-wide">
        Your Todos 📝
      </h1>

      {todos.length === 0 ? (
        <p className="text-gray-400 text-lg">No todos yet — add one!</p>
      ) : (
        <ul className="w-full max-w-md space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800/90 backdrop-blur-md border border-zinc-700 px-4 py-3 rounded-2xl shadow-md hover:shadow-lg hover:border-[#ACFE65] transition-all duration-200"
            >
              <span className="text-white text-base font-medium tracking-wide">
                {todo.text}
              </span>

              <button
                type="button"
                onClick={() => dispatch(removeTodo(todo.id))}
                className="flex items-center justify-center bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-xl transition-all duration-200 focus:outline-none"
                title="Delete Todo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21a48.108 48.108 0 00-3.478-.397m-12 .562a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m0 0a48.667 48.667 0 017.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
