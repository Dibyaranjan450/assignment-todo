import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold text-red-600 bg-red-100 px-4 py-2 rounded-lg shadow-sm">
        {error}
      </p>
    </div>
  );
};

export default ErrorComponent;
