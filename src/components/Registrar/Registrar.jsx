import React, { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

import "./Registrar.scss";
import { profesionales } from "../../profesionales";
import { Toast } from "../../sweetAlert./sweetAlert";

const Registrar = () => {
  const [data, setData] = useState({});

  const handlerChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const createUser = async (e) => {
    e.preventDefault();

    // Consulta para verificar si ya existe el usuario
    const patientRef = doc(db, "patient", data.identificacion);
    const docSnapshot = await getDoc(patientRef);

    if (docSnapshot.exists()) {
      // Si el documento ya existe, mostrar un mensaje de error y salir de la función
      alert("El paciente ya existe en la base de datos");
      return;
    }

    // Si el documento no existe, crear el nuevo usuario y agregar la cita
    await setDoc(patientRef, {
      name: data.nombre,
      identificacion: data.identificacion,
      edad: data.edad,
      email: data.email,
      direccion: data.direccion,
      fechaNacimiento: data.fechaNacimiento,
      celular: data.celular,
      fechaIngreso: data.fechaIngreso,
      contactoEmergencia: data.contactoEmergencia,
      valorConsulta: data.valorConsulta,
      profesional: data.profesional,
    })
      .then(() => {
        setDoc(doc(db, "diary", data.identificacion), {
          citas: [
            {
              fecha: data.fechaIngreso,
              profesional: data.profesional,
              valorConsulta: data.valorConsulta,
              name: data.nombre,
            },
          ],
        })
          .then(() => {
            Toast.fire({
              icon: "success",
              title: `Cita agendada para el ${data.fechaIngreso}`,
            });
          })
          .catch((err) =>
            Toast.fire({
              icon: "error",
              title: err.message,
            })
          );
      })
      .catch((err) =>
        Toast.fire({
          icon: "error",
          title: err.message,
        })
      );
  };

  return (
    <div className="px-12">
      <h1 className="text-center text-6xl font-bold text-green-600">
        Ingreso Pacientes
      </h1>
      <form onSubmit={(e) => createUser(e)}>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Informacion Personal
        </h2>
        <div className="flex flex-row justify-between">
          <input
            onChange={handlerChange}
            required
            name="nombre"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Nombre"
          />
          <input
            onChange={handlerChange}
            required
            name="identificacion"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Identificación"
          />
          <input
            onChange={handlerChange}
            required
            name="edad"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Edad"
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            onChange={handlerChange}
            required
            name="email"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handlerChange}
            required
            name="direccion"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Dirección"
          />
          <input
            onChange={handlerChange}
            required
            name="fechaNacimiento"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="date"
            placeholder="Fecha de Nacimiento"
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            onChange={handlerChange}
            required
            name="celular"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Celular"
          />
          <input
            onChange={handlerChange}
            required
            name="fechaIngreso"
            className=" shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="date"
            placeholder="Fecha de Ingreso"
          />
          <input
            onChange={handlerChange}
            required
            name="contactoEmergencia"
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Contacto de Emergencia"
          />
        </div>

        <h1 className="text-2xl font-bold text-green-600 mt-16 mb-4">
          Datos del Profesional
        </h1>
        <div className="flex flex-row ">
          <input
            onChange={handlerChange}
            name="valorConsulta"
            className="shadow-xl bg-gray-100 w-1/3  rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Valor Consulta"
          />
          <select
            className="shadow-xl bg-gray-100 w-1/3  rounded-md text-2xl m-4 px-4 py-3"
            name="profesional"
            onChange={handlerChange}
            defaultValue="default" // corrección aquí
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

          <input className="w-1/3 m-4 px-4 py-3" disabled />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 mt-4 px-8  py-3 rounded-3xl text-4xl font-bold text-white flex justify-center items-center"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registrar;
