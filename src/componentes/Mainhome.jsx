import React from "react";

const Mainhome = ({datos}) => {
  return (
    <div>
      <div className="card">
        <img src="/imagenmia.jpeg" alt="imagen" />
        <h2>{`${datos.nombre} ${datos.apellido}`}</h2>
        <p>{datos.descripcion}</p>
        <h3>Mi mascota:</h3>
        <p>Nombre: {datos.mascota.nombre}</p>
        <p>Raza: {datos.mascota.raza}</p>
        <p>Edad: {datos.mascota.edad} año</p>
      </div>
    </div>
  );
};

export default Mainhome;
