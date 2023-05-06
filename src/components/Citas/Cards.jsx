import React, { useContext } from "react";
import { DateContext } from "./ContextCitas";

const Cards = () => {
  const { data } = useContext(DateContext);

  return (
    <div className="w-ful justify-end  flex-wrap flex ">
      {data.map((e, index) => {
        const { name, valorConsulta, profesional, fecha } = e;
        return (
          <div
            className="bg-green-600/60 max-w-xs p-4 w-1/3 m-5 rounded-xl"
            key={index}
          >
            <h1 className=" font-bold text-3xl text-center">{name}</h1>
            <div className="flex  flex-wrap ">
              <h2 className="w-1/2 text-xl font-bold">Profesional:</h2>
              <h2 className="w-1/2 text-xl">{profesional}</h2>
            </div>
            <div className="flex  flex-wrap ">
              <h2 className="w-1/2 text-xl font-bold">Valor:</h2>
              <h2 className="w-1/2 text-xl">${valorConsulta}</h2>
            </div>
            <div className="flex  flex-wrap ">
              <h2 className="w-1/2 text-xl font-bold">Fecha</h2>
              <h2 className="w-1/2 text-xl">{fecha}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
