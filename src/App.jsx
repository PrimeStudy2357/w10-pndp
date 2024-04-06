import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForm from "./components/MyForm";
import { useAjax } from "./hooks/useAjax";
import MyQueryField from "./components/MyQueryField";

function App() {
  const { getUser } = useAjax();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <MyForm />

        <button
          onClick={() =>
            getUser().then((result) => alert(JSON.stringify(result)))
          }
        >
          2. Ajax Request
        </button>
      </div>

      {<div>
        <MyQueryField />
      </div>}
    </>
  );
}

export default App;
