import React from "react";

const Header = ({ nombreAlumno }) => {
  return (
    <header className="bg-dark text-white text-center py-3 w-100">
      <h1>Portfolio {nombreAlumno}</h1>
      <hr className="w-100 mx-auto" />
    </header>
  );
};

export default Header;
