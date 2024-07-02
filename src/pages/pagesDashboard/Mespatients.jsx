import React from 'react';
import { FaUser, FaEye } from 'react-icons/fa';
import { TopNav } from '../../components/TopNav';

export const Mespatients = () => {
  const patients = [
    { prenom: 'Thierno', nom: 'Barra' },
    { prenom: 'Aliou', nom: 'Ba' },
    { prenom: 'Aisse', nom: 'Bakhoum' },
    { prenom: 'Amina', nom: 'Dieng' }
  ];

  return (
    <div>
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h3 className="text-3xl font-bold text-sky-500">Mes Patients</h3>
        <FaUser className="text-3xl font-bold text-sky-500" />
      </div>
      <div className="max-w-lg mx-auto">
        <table className="table-auto w-full border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 py-2 px-4">Prénom</th>
              <th className="border border-slate-600 py-2 px-4">Nom</th>
              <th className="border border-slate-600 py-2 px-4">Profil</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="border border-slate-600 py-2 px-4 flex items-center">
                  <FaUser className="text-sky-600 mr-2" />
                  {patient.prenom}
                </td>
                <td className="border border-slate-600 py-2 px-4">{patient.nom}</td>
                <td className="border border-slate-600 py-2 px-4 text-right">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-md flex items-center justify-center space-x-2">
                    <FaEye />
                    <span>Voir</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
