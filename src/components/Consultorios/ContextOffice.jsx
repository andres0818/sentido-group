import React, { createContext, useState } from "react";

export const officeContext = createContext();
export const officeProvider = createContext();

const ContextOffice = ({ children }) => {
  const [isAvailable, setIsAvailable] = useState("available");
  const [User, setUser] = useState("");

  function officeStatus(consultorio) {
    setIsAvailable("unAvailable");

    const hour = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];

    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );

    if (objetoExistente) {
      objetoExistente.status = "available";
      objetoExistente.profesional = User;
      objetoExistente.hour = hour;
    } else {
      listaObjetos.push({
        id: consultorio.id,
        status: "available",
        profesional: User,
        hour: hour,
      });
    }

    localStorage.setItem("objetos", JSON.stringify(listaObjetos));
  }

  function ClearStatusOffice(consultorio) {
    setIsAvailable("available");

    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];

    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );

    if (objetoExistente) {
      const index = listaObjetos.indexOf(objetoExistente);
      listaObjetos.splice(index, 1);
      localStorage.setItem("objetos", JSON.stringify(listaObjetos));
    }
  }

  const state = { isAvailable };
  const dispatch = { setUser, officeStatus, ClearStatusOffice };

  return (
    <officeContext.Provider value={state}>
      <officeProvider.Provider value={dispatch}>
        {children}
      </officeProvider.Provider>
    </officeContext.Provider>
  );
};

export default ContextOffice;
