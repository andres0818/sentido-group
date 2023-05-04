import React, { useContext } from "react";
import { officeProvider } from "./ContextOffice";

const StatusOffice = ({
  isModal,
  setIsModal,
  consultorio,
  COLORAVAILABLE,
  COLORUNAVAILABLE,
  setCardStyle,
  setData,
}) => {
  const { officeStatus, ClearStatusOffice, setUser } =
    useContext(officeProvider);

  const ocupar = () => {
    officeStatus(consultorio);
    setCardStyle(COLORUNAVAILABLE);
    setIsModal(!isModal);
    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];
    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );
    setData(objetoExistente);
  };
  const disponible = () => {
    ClearStatusOffice(consultorio);
    setCardStyle(COLORAVAILABLE);
    setIsModal(!isModal);
    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];
    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );
    setData(objetoExistente);
  };

  const userName = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="absolute w-full h-screen top-0 left-0 flex justify-center items-center  bg-gray-500/60">
      <div className="w-3/4 h-3/4 rounded-3xl flex justify-evenly items-center flex-col bg-white">
        <button
          onClick={() => setIsModal(!isModal)}
          className="absolute top-16 right-28 h-10 w-10 bg-red-600 text-white rounded-full font-bold"
        >
          X
        </button>
        <h1 className="text-green-600 font-bold text-3xl">
          Estado Del Consultorio
        </h1>
        <div className="flex gap-20 bg-gray-200 p-3 justify-center items-center rounded-md">
          <h2 className="text-2xl font-bold">Profesional</h2>
          <select
            onClick={(e) => userName(e)}
            className="text-2xl rounded-lg p-2"
          >
            <option value="" >
              seleccione
            </option>
            <option value="Johana Henao">Johana Henao</option>
            <option value="Camilo">Camilo</option>
            <option value="Andrea">Andrea</option>
            <option value="Cristina">Cristina</option>
          </select>
        </div>
        <div className="flex gap-12">
          <button
            onClick={ocupar}
            className="font-bold text-lg px-8 py-3 rounded-2xl text-white bg-red-600"
          >
            Ocupar
          </button>
          <button
            onClick={disponible}
            className="font-bold text-lg px-8 py-3 rounded-2xl text-white bg-green-600"
          >
            Disponible
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusOffice;
