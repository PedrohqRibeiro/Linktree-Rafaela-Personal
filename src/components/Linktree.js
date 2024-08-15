import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import logo from "../assets/Logo2.png"

const Linktree = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
        <div className="w-28 h-28 mb-8 transition-transform transform hover:scale-105">
          <img
            src={logo} // Substitua pelo caminho da logo
            alt="Logo"
            className="rounded-full w-full h-full object-cover shadow-md"
          />
        </div>
        <div className="text-center mb-6">
  <h1 className="text-2xl font-bold text-gray-800">Rafaela Orige - Personal Trainer</h1>
</div>

        <div className="flex flex-col items-center space-y-6 w-full">
          <a
            href="https://wa.me/5548996986175" // Substitua pelo link do WhatsApp
            className="flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white w-full py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-3 text-2xl" /> Fale Comigo
          </a>
          <a
            href="https://www.instagram.com/rafaelaorigepersonal?igsh=bHJoZWprdm81N2Zi" // Substitua pelo link do Instagram
            className="flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-white w-full py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mr-3 text-2xl" /> Siga-me no Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
