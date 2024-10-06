// src/components/PresentationTemplate.jsx
import React from "react";
import "tailwindcss/tailwind.css";
import styles from "../styles/Huellas.module.css";
import stylesGlass from "../styles/Glass.module.css"; // Importa el archivo CSS correctamente
import Slider from "./Slider";

const PresentationTemplate = ({ title, description, slides }) => {
  return (
    <div
      className={`pt-50 flex flex-col items-center justify-center py-10 px-10 bg-gradient-to-b from-[#34cf6d] to-[#3F7E44] ${styles.huellas_bg}`}
    >
        <h2 className="text-3xl font-bold text-black mb-6">{title}</h2>
        <p className="text-lg text-black mb-10 px-36">{description}</p>

      <div
        className={`max-w-2xl flex justify-center items-center h-100 bg-[#3F7E44] rounded-md border-black border-2 ${stylesGlass.glassStyle}`}
      >
        <div className="py-10 w-full">
          <Slider slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default PresentationTemplate;
