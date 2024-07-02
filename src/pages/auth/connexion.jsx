import React from 'react'
import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";


export const Connexion = () => {
  return (
    <div className="flex">
    <div className="w-1/4 h-screen"></div>
    <div className="flex flex-col justify-start items-center w-2/4">
      <h2 className="text-6xl">Se Connecter</h2>
      <input className="w-full p-5 m-5 bg-slate-300" type="text" placeholder="Adresse mail" />
      <input className="w-full p-5 m-5 bg-slate-300"  type="password" placeholder="Mot de passe" />
      <Link to="/dashbord" className="w-full">
        <button className="bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-full">
          Se Connecter
        </button>
      </Link>
      <Link to="/connexion" className="w-full">
        <button className="bg-black  my-5 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold w-full">
          Continuer avec Google
          <SlSocialGoogle className="mx-5" />
        </button>
      </Link>
    </div>
    <div className="w-1/4 h-screen"></div>
  </div>

  )
}
