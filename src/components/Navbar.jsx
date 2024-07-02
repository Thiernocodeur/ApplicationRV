import React from 'react'
import logo from '../assets/RVS 1.png';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className='flex  justify-between items-center'> 
    <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
        <ul className="flex">
            <li>
              <Link to="/"> Accueil</Link>
            </li>
            <li className="mx-20">
              <Link to="/about">Mes Rendes-vous</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

           
        </nav>
        <div>
        <Link to="/connexion">
            <button className="bg-sky-600 p-4 rounded-xl text-white">
              Connexion
            </button>
          </Link>
          <Link to="/connexion">
            <button className="mx-10 bg-black p-4 rounded-xl text-white">
              Déconnexion
            </button>
          </Link>

            </div>
           
    </div>
    <Outlet/>
    </>
  )
}
