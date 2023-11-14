import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useParams } from "react-router-dom";

const History = ({ user }) => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  async function buscarEnFirebase() {
    const q = query(collection(db, "diary"), where("userId", "==", id));
    const querySnapshot = await getDocs(q);
    // Devolver los resultados de la consulta
    const nuevosDatos = querySnapshot.docs.map((doc) => doc.data());
    setData(nuevosDatos);
  }

  useEffect(() => {
    buscarEnFirebase();
  }, []);

  return     <div className="w-ful flex-wrap flex p-10">
  {data?.length > 0 ? (
    data.map((e, index) => {
      const { name, valorConsulta, profesional, fecha } = e;
      return (
        <div
          key={index}
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
</div>;
};

export default History;
