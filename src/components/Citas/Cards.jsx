import React, { useContext } from "react";
import { DateContext } from "./ContextCitas";
import { useNavigate } from "react-router-dom";
import "./spinner.css";

const Cards = () => {
  const { data } = useContext(DateContext);

  const navigate = useNavigate();

  return (
    <div className="w-ful flex-wrap flex ">
      {data?.length > 0 ? (
        data.map((e, index) => {
          const { name, valorConsulta, profesional, userId, fecha } = e;
          return (
            <div
              key={index}
              onClick={() => navigate(`/citas/${userId}`)}
              className="bg-green-600/60 max-w-xs  p-4 w-1/3 m-1 rounded-xl"
            >
              <h1 className=" font-bold mb-4 text-3xl text-center">{name}</h1>
              <div className="flex mb-1 flex-wrap ">
                <h2 className="w-1/2 text-xl font-bold">Psicólogo:</h2>
                <h2 className="w-1/2 text-xl">{profesional}</h2>
              </div>
              <div className="flex mb-1 flex-wrap ">
                <h2 className="w-1/2 text-xl font-bold">Valor:</h2>
                <h2 className="w-1/2 text-xl">${valorConsulta}</h2>
              </div>
              <div className="flex mb-1 flex-wrap ">
                <h2 className="w-1/2 text-xl font-bold">Fecha</h2>
                <h2 className="w-1/2 text-xl">{fecha}</h2>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className=" mt-12 text-gray-500 text-3xl text-center w-full">
          Resultado no encontrado
        </h1>
      )}
    </div>
  );
};

export default Cards;
