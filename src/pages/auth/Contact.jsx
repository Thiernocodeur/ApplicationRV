import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLock, FaSave, FaEdit } from 'react-icons/fa';
import barra from "../../assets/thierno.jpeg"
import imgUser from "../../assets/user.png"; // assuming you have an image for the user

export const Contact = () => {
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">Rendez-vous</h2>
        <div className="flex justify-center items-center bg-blue-200 p-4 rounded-lg">
          <div className="flex-shrink-0">
            <img src={barra} alt="User" className="w-20 h-20 rounded-full mr-4" />
          </div>
          <div className="text-center w-full">
            <h3 className="text-2xl">Mon Compte</h3>
          </div>
        </div>
        <form className="max-w-md mx-auto mt-10 space-y-8">
          <h2 className="text-xl font-semibold mb-4">THIERNO BARRA DIALLO</h2>
          
          <div className="relative">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Adresse"
            />
            <label className="absolute left-3 -top-3.5 text-gray-600 text-sm">
              {formData.address && `Adresse: ${formData.address}`}
            </label>
            <FaEdit className="absolute right-3 top-2 text-gray-400" />
          </div>
          
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Téléphone"
            />
            <label className="absolute left-3 -top-3.5 text-gray-600 text-sm">
              {formData.phone && `Téléphone: ${formData.phone}`}
            </label>
            <FaEdit className="absolute right-3 top-2 text-gray-400" />
          </div>
          
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Adresse e-mail"
            />
            <label className="absolute left-3 -top-3.5 text-gray-600 text-sm">
              {formData.email && `Adresse e-mail: ${formData.email}`}
            </label>
            <FaEdit className="absolute right-3 top-2 text-gray-400" />
          </div>
          
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mot de passe"
            />
            <label className="absolute left-3 -top-3.5 text-gray-600 text-sm">
              {formData.password && 'Mot de passe: ••••••••'}
            </label>
            <FaEdit className="absolute right-3 top-2 text-gray-400" />
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
