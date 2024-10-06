// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import styles from '../styles/Huellas.module.css';
import PresentationTemplate from "../components/PresentationTemplate";

const Soluciones = () => {
  const slides = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YJqtyfQZ1K-aMooIxOrehgJrQFfFyx-m6w&s ",
      description:
        "La utilización de fuentes de energía como solar, eólica, hidroeléctrica y geotérmica reduce la dependencia de combustibles fósiles y disminuye las emisiones de gases de efecto invernadero.",
    },
    {
      image:
        "https://adleragro.com/wp-content/uploads/2022/02/Sin-t%C3%ADtulo-1080-%C3%97-1920-px-Poster-horizontal-1.jpg ",
      description:
        "Técnicas como la agricultura orgánica, la permacultura y la agroecología promueven prácticas que conservan la biodiversidad, utilizan menos químicos y optimizan el uso del agua.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXF8rxUFrTV9b1utp3pLqakFY6dTuz7fVfQ&s ",
      description:
        "Fomentar el uso del transporte público, bicicletas y vehículos eléctricos ayuda a reducir la contaminación del aire y la congestión urbana.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabNtyNA-Rykx4U-aRdF-QjYlp0ghAkxlp8A&s ",
      description:
        "Edificios diseñados con materiales sostenibles, técnicas de eficiencia energética y sistemas de gestión del agua (como la recolección de agua de lluvia) minimizan el impacto ambiental.",
    },
    
  ];

  const title = "Prácticas Sostenibles para un Futuro más Verde"
  const description = "Enfrentar el cambio climático requiere adoptar prácticas sostenibles que reduzcan nuestra huella de carbono y promuevan la conservación del medio ambiente. La transición hacia fuentes de energía renovables como la solar, eólica, hidroeléctrica y geotérmica es fundamental para disminuir la dependencia de los combustibles fósiles y mitigar las emisiones de gases de efecto invernadero. Además, técnicas agrícolas como la agricultura orgánica, la permacultura y la agroecología fomentan la biodiversidad y optimizan el uso del agua, creando un ecosistema más saludable. La promoción del transporte público, el uso de bicicletas y vehículos eléctricos es esencial para reducir la contaminación del aire y aliviar la congestión urbana. Por último, la construcción de edificios con materiales sostenibles y sistemas de gestión eficiente del agua ayuda a minimizar el impacto ambiental, estableciendo un camino hacia un futuro más verde y sostenible."


  return (
    <>
      <Navbar />
      <PresentationTemplate title={title} description={description} slides={slides}/>
    </>
  );
};

export default Soluciones;
