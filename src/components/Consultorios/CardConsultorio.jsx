import React, { useContext, useEffect, useState } from "react";
import StatusOffice from "./StatusOffice";
import { officeContext } from "./ContextOffice";

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

const CardConsultorio = ({ ...props }) => {
  const { isAvailable } = useContext(officeContext);
  const { consultorio } = props;
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState("");
  const [cardStyle, setCardStyle] = useState(COLORAVAILABLE);

  useEffect(() => {
    let listaObjetos = JSON.parse(localStorage.getItem("objetos")) || [];
    const objetoExistente = listaObjetos.find(
      (objeto) => objeto.id === consultorio.id
    );
    listaObjetos.find(
      (objeto) => objeto.id === consultorio.id && setCardStyle(COLORUNAVAILABLE)
    );

    if (objetoExistente) {
      setData(objetoExistente);
    } else {
      setData("");
    }
  }, [isAvailable, consultorio.id]);

  return (
    <>
      <div
        onClick={() => setIsModal(!isModal)}
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
      </div>
      {isModal && (
        <StatusOffice
          setData={setData}
          consultorio={consultorio}
          setIsModal={setIsModal}
          isModal={isModal}
          COLORAVAILABLE={COLORAVAILABLE}
          COLORUNAVAILABLE={COLORUNAVAILABLE}
          setCardStyle={setCardStyle}
        />
      )}
    </>
  );
};

export default CardConsultorio;
