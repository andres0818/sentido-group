import { Route, Routes } from "react-router-dom";
import Consultorios from "./components/Consultorios/Consultorios";
import NavBar from "./components/NavBar/NavBar";
import Citas from "./components/Citas/Citas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Consultorios />} />
        <Route path="/citas" element={<Citas />} />
      </Route>
    </Routes>
  );
}

export default App;
