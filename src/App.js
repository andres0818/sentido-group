import { Route, Routes } from "react-router-dom";
import Consultorios from "./components/Consultorios/Consultorios";
import NavBar from "./components/NavBar/NavBar";
import Citas from "./components/Citas/Citas";
import Registrar from "./components/Registrar/Registrar";
import User from "./components/User/User";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useState } from "react";
import StatusLogin from "./components/NavBar/StatusLogin";

function App() {
  const [statusLogin, setStatusLogin] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setStatusLogin(true);
    } else {
      // navigation("/");
      setStatusLogin(false);
    }
  });

  return (
    <Routes>
      <Route
        path="/"
        Component={() => <>{statusLogin ? <NavBar /> : <StatusLogin />}</>}
      >
        <Route path="/" element={<Consultorios />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/citas/:id" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
