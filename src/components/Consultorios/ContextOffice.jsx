import React, { createContext,  useState } from "react";

export const officeContext = createContext();
export const officeProvider = createContext();

const COLORAVAILABLE = {
  bg: "bg-green-600/60",
  text: "text-neutral-950",
  status: "text-white",
};
const COLORUNAVAILABLE = {
  bg: "bg-red-600/60",
  text: "text-white",
  status: "text-neutral-950",
};

const ContextOffice = ({ children }) => {
  const [cardStyle, setCardStyle] = useState(COLORAVAILABLE);
  const [isAvailable, setIsAvailable] = useState("available");

  function officeStatus(consultorio) {
    setCardStyle(COLORUNAVAILABLE);

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
      objetoExistente.profesional = "Johana Henao";
      objetoExistente.Hour = hour;
    } else {
      listaObjetos.push({
        id: consultorio.id,
        status: "available",
        profesional: "Johana Henao",
        hour: hour,
      });
    }

    localStorage.setItem("objetos", JSON.stringify(listaObjetos));
  }

  function ClearStatusOffice(consultorio) {
    setIsAvailable("available");
    setCardStyle(COLORAVAILABLE);

    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];

    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );

    if (objetoExistente) {
      objetoExistente.status = "unavailable";
      delete objetoExistente.profesional;
      delete objetoExistente.Hour;
    } else {
      listaObjetos.push({
        id: consultorio.id,
        status: "unavailable",
      });
    }

    localStorage.setItem("objetos", JSON.stringify(listaObjetos));
  }

  const state = {  cardStyle, isAvailable };
  const dispatch = {  officeStatus, ClearStatusOffice };

  return (
    <officeContext.Provider value={state}>
      <officeProvider.Provider value={dispatch}>
        {children}
      </officeProvider.Provider>
    </officeContext.Provider>
  );
};

export default ContextOffice;
