import "./App.css";
import { useGlobalContext } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import UseeffictAPI from "./components/UseeffictAPI";

function App() {
  const data = useGlobalContext();
  return (
    <>
      <UseeffictAPI />
     
    </>
  );
}

export default App;
