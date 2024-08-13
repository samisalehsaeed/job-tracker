//Components
import StarterPage from "../components/StarterPage";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StarterPage />}></Route>
        {/* <Route path="*" Component={App}></Route> */}
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
