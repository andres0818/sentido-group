import { Route, Routes } from "react-router-dom";
import Consultorios from "./components/Consultorios/Consultorios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Consultorios />} />
    </Routes>
  );
}

export default App;
