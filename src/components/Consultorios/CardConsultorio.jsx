import React from "react";

const CardConsultorio = ({ ...props }) => {
  return (
    <div className="max-w-md w-full h-60 p-4 bg-green-600/60 rounded-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-6xl font-bold">{`Consultorio ${props.consultorio.id}`}</h3>
        <h3 className="text-2xl">{props.consultorio.nombre}</h3>
      </div>
      <h1 className="text-5xl font-bold text-white text-center">Disponible</h1>
    </div>
  );
};

export default CardConsultorio;
