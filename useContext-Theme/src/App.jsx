import "./App.css";
import Card from "./components/card";
import { ThemeContextProvider } from "./context/contextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider value={{ theme }}>
        <Card />
      </ThemeContextProvider>
    </>
  );
}

export default App;
