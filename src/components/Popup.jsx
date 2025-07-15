import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

// const baseStyles = {
//   success: "bg-green-500",
//   error: "bg-red-500",
//   warning: "bg-yellow-500 text-black",
//   info: "bg-blue-500",
// };

const Popup = ({ message, showPopup, setShowPopup }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed top-6 right-6 z-20 max-w-xs w-full rounded-xl shadow-lg text-white px-4 py-3 flex items-center justify-between transition-all animate-fade-in-out bg-green-500">
      <span>{message}</span>

      <X
        onClick={() => setShowPopup(false)}
        className="text-red-500 cursor-pointer"
        size={24}
      />
    </div>
  );
};

export default Popup;
