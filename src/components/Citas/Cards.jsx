import React, { useContext } from "react";
import { DateContext } from "./ContextCitas";
import { useNavigate } from "react-router-dom";
import "./spinner.css";

const Cards = () => {
  const { data } = useContext(DateContext);

  const navigate = useNavigate();

  return (
    <div className="w-ful justify-end  flex-wrap flex ">
      {data ? (
        data.map((e, index) => {
          const { name, valorConsulta, profesional, userId, fecha } = e;
          return (
            <div
              key={index}
              onClick={() => navigate(`/citas/${userId}`)}
              className="bg-green-600/60 max-w-xs p-4 w-1/3 m-5 rounded-xl"
            >
              <h1 className=" font-bold mb-4 text-3xl text-center">{name}</h1>
              <div className="flex mb-1 flex-wrap ">
                <h2 className="w-1/2 text-xl font-bold">Profesional:</h2>
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
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Cards;

export function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
