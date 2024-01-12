import "./App.css";
import { useGlobalContext } from "./components/Contact";
// import Pagination from "./components/Pagination";
// import Search from "./components/Search";
// import Stories from "./components/Stories";
import "bootstrap/dist/css/bootstrap.min.css";
import UseeffictAPI from "./components/UseeffictAPI";

function App() {
  const data = useGlobalContext();
  return (
    <>
      <UseeffictAPI />
      {/* <Search />
      <Pagination />
      <Stories /> */}
    </>
  );
}

export default App;
