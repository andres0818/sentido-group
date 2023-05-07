import React from "react";
import icon from "../../img/usuario (1).png";

export const Profile = ({ user }) => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex justify-center">
        <img className="w-1/3" src={icon} alt="user icon" />
      </div>
      {user && (
        <div className="w-1/2 flex flex-col justify-start ">
          <h1 className="text-4xl font-bold">{user.name}</h1>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">
              Identificación:
            </h2>
            <h2 className="text-xl">{user.identificacion}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Email:</h2>
            <h2 className="text-xl">{user.email}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Celular:</h2>
            <h2 className="text-xl">{user.celular}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Dirección:</h2>
            <h2 className="text-xl">{user.direccion}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">
              Fecha de Nacimineto:
            </h2>
            <h2 className="text-xl">{user.fechaNacimiento}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Valor:</h2>
            <h2 className="text-xl">${user.valorConsulta}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
