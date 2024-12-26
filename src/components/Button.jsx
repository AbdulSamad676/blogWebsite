import React from "react";

function Button({ children, type = "submit", className = "", props }) {
  return (
    <button className={`px-4 py-2 bg-blue-500 ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
