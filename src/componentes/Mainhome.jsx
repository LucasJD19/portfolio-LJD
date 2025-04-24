import React from "react";

const Mainhome = ({datos}) => {
    console.log(datos);
  return (
    <main className="d-flex justify-content-center align-items-center flex-column flex-grow-1 main-bg">
      <div className="card text-center shadow-lg p-4 bg-dark" style={{ maxWidth: '24rem' }}>
        <img src="/imagenmia.jpeg" className="card-img-top rounded-circle mx-auto" alt="imagen" />
        <div className="card-body">
          <p className="card-title" style={{ fontSize: "1.3rem", color: "white", fontWeight: "bold" }}>{`${datos.nombre} ${datos.apellido}`}</p>
          <p className="card-text">{datos.descripcion}</p>
          <p className="mt-4" style={{ fontSize: "1.3rem", color: "white", fontWeight: "bold" }}>Lenguajes:</p>
          <p className="card-text">{datos.lenguajes}</p>
          <p className="mt-4" style={{ fontSize: "1.3rem", color: "white", fontWeight: "bold" }}>Mi mascota:</p>
          <p>Nombre: {datos.mascota.nombre}</p>
          <p>Raza: {datos.mascota.raza}</p>
          <p>Edad: {datos.mascota.edad} año</p>
        </div>
      </div>
    </main>
  );
};

export default Mainhome;
