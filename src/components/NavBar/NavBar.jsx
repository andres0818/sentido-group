import React from "react";
import { Link,  Outlet, useNavigate } from "react-router-dom";
import logo from "../../img/logo 2.png";
import login from '../../img/usuario (1).png'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className=" mt-2 mb-12 flex justify-between px-12 ">
        <img className="cursor-pointer" src={logo} alt="Sentido Group" onClick={()=>navigate('/')}/>
        <div className="flex items-center justify-center gap-10">
          <Link className="text-green-600 font-bold text-2xl" to={'/'}>Consultorios</Link>
          <Link className="text-green-600 font-bold text-2xl" to={'/registrar'}>Registrar</Link>
          <Link className="text-green-600 font-bold text-2xl" to={'/citas'}>Citas</Link>
            <img className="w-12 h-12" src={login} alt="" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
