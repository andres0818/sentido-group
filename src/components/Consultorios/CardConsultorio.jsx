import React, { useContext, useEffect, useState } from "react";
import StatusOffice from "./StatusOffice";
import { officeContext, officeProvider } from "./ContextOffice";

const CardConsultorio = ({ ...props }) => {
  const { isAvailable, cardStyle } = useContext(officeContext);
  const { officeStatus } = useContext(officeProvider);
  const { consultorio } = props;
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];
    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );
    setData(objetoExistente);

    if (objetoExistente) {
      officeStatus(consultorio);
    }
  }, [isAvailable, consultorio.id]);



  return (
    <div
    onClick={()=>setIsModal(!isModal)}
      className={`max-w-md w-full h-60 p-4  rounded-2xl flex  flex-col justify-between cursor-pointer ${cardStyle.bg}`}
    >
      <div>
        <h3
          className={`text-6xl font-bold ${cardStyle.text}`}
        >{`Consultorio ${consultorio.id}`}</h3>
        <h3 className={`text-2xl ${cardStyle.text}`}>{consultorio.nombre}</h3>
        {data?.profesional && (
          <div className="flex justify-between">
            <h3 className="text-white text-lg ">{data.profesional}</h3>
            <h3 className="text-white text-lg pr-16">{data.hour}</h3>
          </div>
        )}
      </div>
      <h1 className={`text-5xl font-bold  text-center ${cardStyle.status}`}>
        Disponible
      </h1>
      {isModal && <StatusOffice setIsModal={setIsModal} isModal={isModal}/>}
    </div>
  );
};

export default CardConsultorio;
