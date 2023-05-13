import React, { useEffect, useState } from "react";
import icon from "../../img/usuario (1).png";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { Toast } from "../../sweetAlert./sweetAlert";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { id } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    email: user?.email,
    celular: user?.celular,
    direccion: user?.direccion,
    valorConsulta: user?.valorConsulta,
  });

  const getUser = async (id) => {
    const docRef = doc(db, "patient", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
    setData({
      email: user?.email,
      celular: user?.celular,
      direccion: user?.direccion,
      valorConsulta: user?.valorConsulta,
    });
  };

  useEffect(() => {
    setData({
      email: user?.email,
      celular: user?.celular,
      direccion: user?.direccion,
      valorConsulta: user?.valorConsulta,
    });
  }, [user]);

  useEffect(() => {
    getUser(id);
  }, [id]);

  const handlerChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const editUser = () => {
    const userId = user.identificacion;
    const userRef = doc(db, "patient", userId);

    updateDoc(userRef, {
      email: data?.email,
      celular: data?.celular,
      direccion: data?.direccion,
      valorConsulta: data?.valorConsulta,
    })
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Actualización realizada",
        });
        setIsUpdated(!isUpdated);
        getUser(id);
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex justify-center">
        <img className="w-1/3" src={icon} alt="user icon" />
      </div>
      {user && (
        <div className="w-1/2 flex flex-col justify-start ">
          {!isUpdated ? (
            <button
              onClick={() => setIsUpdated(!isUpdated)}
              className="absolute right-64 bg-red-400 text-xl px-4 py-1 rounded-xl"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={() => editUser()}
              className="absolute right-64 bg-green-400 text-xl px-4 py-1 rounded-xl"
            >
              Guardar
            </button>
          )}

          <h1 className="text-4xl font-bold">{user.name}</h1>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">
              Identificación:
            </h2>
            <h2 className="text-xl">{user.identificacion}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Email:</h2>
            {!isUpdated ? (
              <h2 className="text-xl">{data.email}</h2>
            ) : (
              <input
                name="email"
                onChange={(e) => handlerChange(e)}
                className="text-xl bg-gray-200 rounded-xl"
                value={data.email}
              />
            )}
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Celular:</h2>
            {!isUpdated ? (
              <h2 className="text-xl">{data.celular}</h2>
            ) : (
              <input
                name="celular"
                onChange={(e) => handlerChange(e)}
                className="text-xl bg-gray-200 rounded-xl"
                value={data.celular}
              />
            )}
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Dirección:</h2>
            {!isUpdated ? (
              <h2 className="text-xl">{data.direccion}</h2>
            ) : (
              <input
                name="direccion"
                onChange={(e) => handlerChange(e)}
                className="text-xl bg-gray-200 rounded-xl"
                value={data.direccion}
              />
            )}
          </div>
          <div className="mt-3 flex flex-row flex-wrap ">
            <h2 className="font-bold text-xl max-w-xs w-1/2">
              Fecha de Nacimineto:
            </h2>
            <h2 className="text-xl">{user.fechaNacimiento}</h2>
          </div>
          <div className="mt-3 flex flex-row flex-wrap">
            <h2 className="font-bold text-xl max-w-xs w-1/2">Valor:</h2>
            {!isUpdated ? (
              <h2 className="text-xl">${data.valorConsulta}</h2>
            ) : (
              <input
                name="valorConsulta"
                onChange={(e) => handlerChange(e)}
                className="text-x bg-gray-200 rounded-xl"
                value={data.valorConsulta}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
