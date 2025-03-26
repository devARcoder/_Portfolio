import React from "react";
import { IoClose } from "react-icons/io5";
const Modal = ({ isOpen, onClose, title, description, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 z-50">
      {/* Overlay with Blur Effect */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-transparent border border-gray-100 p-6 rounded-lg shadow-lg z-10 w-96 flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-500">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-4">GitHub Repository Link</a>
        <button
          className="px-4 py-2 text-3xl text-white"
          onClick={onClose}
        >
          <IoClose />
        </button>
        
      </div>
    </div>
  );
};

export default Modal;
