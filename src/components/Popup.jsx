import React from "react";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-green-600 text-white p-6 rounded-2xl shadow-xl w-80 text-center animate-scaleIn">
        <h2 className="text-lg font-semibold">Profile Updated Successfully</h2>
        
        <button
          onClick={onClose}
          className="mt-5 bg-white text-green-700 font-semibold px-6 py-2 rounded-xl shadow hover:bg-green-50 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
