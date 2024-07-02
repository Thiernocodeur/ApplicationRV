import React from 'react';
import { FaEnvelope, FaPhone, FaLock, FaSave, FaEdit } from 'react-icons/fa';
import { TopNav } from '../../components/TopNav';

export const Moncompte = () => {
  return (
    <>
      <TopNav />
      <div className="mt-10 text-center mb-8"> {/* Ajoute une marge supérieure pour espacer le contenu du TopNav */}
        <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between">
          <h3 className="flex items-center">
            <FaLock className="mr-2" /> {/* Icône de verrou à gauche du titre */}
            THIERNO BARRA DIALLO
          </h3>
          <FaPhone className="ml-2" /> {/* Icône de téléphone à droite du titre */}
        </div>
        <form className="max-w-md mx-auto mt-4 space-y-4"> {/* Ajoute une marge en haut du formulaire */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full py-2 px-4 focus:outline-none"
            />
            <FaEdit className="ml-2" /> {/* Icône d'édition à droite du champ */}
          </div>
          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              className="w-full py-2 px-4 focus:outline-none"
            />
            <FaEdit className="ml-2" /> {/* Icône d'édition à droite du champ */}
          </div>
          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full py-2 px-4 focus:outline-none"
            />
            <FaEdit className="ml-2" /> {/* Icône d'édition à droite du champ */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 w-full"
          >
            <FaSave />
            <span>Enregistrer</span>
          </button>
        </form>
      </div>
    </>
  );
};
