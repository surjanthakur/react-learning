import "./App.css";
import TodoForm from "./components/addTodo";
import Todos from "./components/todo";
import Store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={Store}>
        <TodoForm />
        <Todos />
      </Provider>
    </>
  );
}

export default App;
