import { GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/firebase";

const StatusLogin = () => {
  const [user, setUser] = useState({email:'',contraseña:'',});

  const validateUserByEmail = async (e) => {
    e.preventDefault()
    try {
      // Iniciar sesión con el correo electrónico y la contraseña proporcionados
      await signInWithEmailAndPassword(auth, user.email, user.contraseña);
  
      // Verificar si el usuario ha verificado su correo electrónico
      const currentUser = auth.currentUser; // Renombramos la variable user a currentUser
      if (currentUser && !currentUser.emailVerified) {
        // Enviar un correo electrónico de verificación
        await sendEmailVerification(currentUser);
        console.log('Se ha enviado un correo electrónico de verificación al usuario.');
      } else {
        console.log('El usuario ha verificado su correo electrónico.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlerChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user)
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-6xl text-green-500 mb-6">Iniciar sesion</h1>
          <form
            onSubmit={(e)=>validateUserByEmail(e)}
            className="flex w-full justify-center items-center flex-col gap-2"
            action=""
          >
            <input
              className="bg-gray-100 h-12 pl-4 w-full shadow-xl"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={(e) => handlerChange(e)}
            />
            <input
              className="bg-gray-100 h-12 pl-4 w-full shadow-xl"
              type="text"
              name="contraseña"
              id=""
              placeholder="Contraseña"
              onChange={(e) => handlerChange(e)}
            />
            <button type="submit" className="text-xl">
              Iniciar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StatusLogin;
