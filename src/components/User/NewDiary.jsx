import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Firebase/firebase";
import { profesionales } from "../../profesionales";

const NewDiary = ({ user }) => {
  const [data, setData] = useState({});

  const newDiary = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "diary"), {
      userId: user.identificacion,
      fecha: data.fecha,
      profesional: data.profesional,
      valorConsulta: user.valorConsulta,
      name: user.name,
    });
  };

  const handlerChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4">
      <form onSubmit={(e)=>newDiary(e)} className="flex bg-gray-200">
        <label className="absolute left-6" htmlFor="fehca">
          Fecha
        </label>
        <input
          onChange={handlerChange}
          required
          name="fecha"
          className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
          type="date"
          placeholder="Fecha de Nacimiento"
        />
        <select
          className="shadow-xl bg-gray-100 w-1/3  rounded-md text-2xl m-4 px-4 py-3"
          name="profesional"
          onChange={handlerChange}
          defaultValue="default"
          required
        >
          <option value="default" disabled>
            Profesional
          </option>
          <option value={profesionales.johana}>{profesionales.johana}</option>
          <option value={profesionales.camilo}>{profesionales.camilo}</option>
          <option value={profesionales.andrea}>{profesionales.andrea}</option>
          <option value={profesionales.cristina}>
            {profesionales.cristina}
          </option>
        </select>
        <button
          type="submit"
          className=" w-1/5 shadow-xl rounded-md text-2xl m-4 px-4 py-3 bg-green-500 hover:bg-green-600"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
export default NewDiary;
