import React from "react";
import Header from "../componentes/Header";
import Mainhome from "../componentes/Mainhome";
import Footer from "../componentes/Footer";


const Home = () => {
  const alumno = {
    nombre: "Lucas",
    apellido: "Diaz",
    descripcion: "Soy estudiante de segundo año de programacion de la UTN-FRT - Lenguajes Java, Javascript",
    mascota: {
      nombre: "Apolo",
      raza: "Pastor Alemán",
      edad: 1,
    },
  };

  return (
    <div>
      <Header nombreAlumno={`${alumno.nombre} ${alumno.apellido}`} />
      <Mainhome datos={alumno} />
      <Footer/>
    </div>
  );
};

export default Home;
