import "./App.css";
import TodoForm from "./components/todoForm";
import Todo from "./components/todo";
import { Provider } from "react-redux";
import Store from "./app/store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <TodoForm />
        <Todo />
      </Provider>
    </>
  );
}

export default App;
