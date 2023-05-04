import { Route, Routes } from "react-router-dom";
import Consultorios from "./components/Consultorios/Consultorios";
import NavBar from "./components/NavBar/NavBar";
import Citas from "./components/Registrar/Registrar";
import Registrar from "./components/Registrar/Registrar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Consultorios />} />
        <Route path="/registrar" element={<Registrar />} />
      </Route>
    </Routes>
  );
}

export default App;
