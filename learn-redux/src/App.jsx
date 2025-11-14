import "./App.css";
import Todos from "./components/todos";
import AddTodo from "./components/todoForm";
import {Store} from "./app/store";
import {Provider} from "redux"

function App() {
  return <>
<Provider store={Store}>
  <AddTodo/>
  <Todos/>
</Provider>
  </>;
}

export default App;
