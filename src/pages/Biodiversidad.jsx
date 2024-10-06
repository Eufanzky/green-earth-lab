import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import b1 from "../assets/Bio1.jpg";
import b2 from "../assets/Bio2.jpg";
import b3 from "../assets/Bio3.jpg";
import b4 from "../assets/Bio4.jpg";
import b5 from "../assets/Bio5.jpg";
import b6 from "../assets/Bio6.jpg";
import b7 from "../assets/Bio7.jpg";
import b8 from "../assets/Bio8.jpg";

function Biodiversidad() {
  const items = [
    {
      image: b1,
      description:
        "El quagga era un animal de Sudáfrica que se extinguió a finales del siglo XIX. Se pensaba que era una especie propia, pero en realidad era una subespecie de cebra, parecida a una mezcla entre una cebra y un caballo. Tenía rayas en la parte delantera y su parte trasera no tenía rayas. Los científicos están intentando traer de vuelta al quagga, criando cebras que tienen genes de quagga.",
    },
    {
      image: b2,
      description:
        "El leopardo de Zanzíbar, una subespecie de leopardo, vivía en el archipiélago de Zanzíbar, en Tanzania. No está claro si realmente está extinguido, ya que ha habido avistamientos no confirmados. La extinción se debió a la creencia de que eran controlados por brujas, lo que llevó a los lugareños a cazarlos. Además, el gobierno apoyó campañas para exterminarlos. En los años 90, hubo un intento de conservación, pero llegó demasiado tarde.",
    },
    {
      image: b3,
      description:
        "El pez de mano rojo es un pariente del extinto pez de mano liso, que solía ser común en Australia hace unos 200 años. Se llama así por su parecido con brazos y manos humanas. El pez de mano liso fue declarado extinto en 2020, y solo queda un ejemplar conservado en todo el mundo.Causa de la extinciónNo se sabe con certeza por qué se extinguió, pero se cree que la pérdida de hábitat y la pesca destructiva de otras especies marinas, como las vieiras, contribuyeron a su desaparición.",
    },
    {
      image: b4,
      description:
        'También conocido como "baiji", el delfín del río Yangtze fue visto por última vez en 2002. En 2006, investigadores recorrieron 3.200 kilómetros del río para encontrar uno, pero no tuvieron éxito. Según la Conservación de Ballenas y Delfines (WDC), el baiji es el primer delfín que se extingue por culpa del ser humano, causa de la extinción. Las principales causas de su extinción fueron la sobrepesca, la contaminación, la pérdida de hábitat, la caza furtiva y el tráfico de barcos',
    },
    {
      image: b5,
      description:
        "El tilacino, también llamado tigre de Tasmania o lobo de Tasmania, era un marsupial carnívoro nocturno que comía roedores y canguros. Aunque parecían feroces, eran tímidos y fáciles de capturar.Causa de la extinciónSe cree que la extinción del tilacino fue causada por la amenaza de los dingos y la caza excesiva por parte de los humanos.",
    },
    {
      image: b6,
      description:
        'El íbice de los Pirineos se extinguió oficialmente en 2000, pero fue "resucitado" en 2009 mediante un clon hecho con ADN de muestras conservadas. La cría sobrevivió el parto, pero murió poco después por problemas en los pulmones. Causa de la extinciónLa extinción fue causada por la caza excesiva en el siglo XIX.',
    },
    {
      image: b7,
      description:
        "La cotorra de Carolina era el único pájaro de su tipo nativo de la parte oriental de EE.UU. La última cotorra murió en el zoológico de Cincinnati en febrero de 1918, poco después de la muerte de su compañera, Lady Jane.Causa de la extinciónNo hay una razón específica para su extinción, pero se cree que la deforestación, las enfermedades y la demanda de sus plumas para sombreros contribuyeron a su desaparición.",
    },
    {
      image: b8,
      description:
        "El lobo de las Malvinas, también llamado lobo antártico o zorro de las Malvinas, se extinguió a finales del siglo XIX. Era nativo de las Malvinas, cerca de Argentina, y vivía aislado hasta que los humanos llegaron y los cazaron, ya que eran muy amigables.Causa de la extinciónLa principal causa de su extinción fue la caza.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center my-10">
          Biodiversidad En Peligro
        </h1>
        <h1 className="text-4xl font-light text-center my-10">
        Animales que se han extinguido en los últimos 150 años
        </h1>

        <div className="flex flex-col gap-8 p-10">
          {items.map((item, index) => (
            <div
              className={`flex ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } w-full items-center bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105`}
              key={index}
            >
              <img
                src={item.image}
                alt={`Descripción de la imagen ${index + 1}`}
                className="aspect-auto w-full max-h-64 rounded-lg"
              />
              <p className="w-full text-lg text-gray-800 p-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Biodiversidad;
