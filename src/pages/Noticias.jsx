import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";

export const Noticias = () => {
  const items = [
    {
      image:
        "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/02-10-2024_UNEP_Ambassador_Charly2.jpg/image350x235cropped.jpg",
      description:
        "Charly Alberti: Cuando la música y el medio ambiente se cruzan en el corazón. Tras años de activismo en Argentina y en toda América Latina, el baterista de Soda Stereo ha sido nombrado por la agencia medioambiental de las Naciones Unidas como su primer embajador de buena voluntad.",
      link: "https://news.un.org/es/interview/2024/10/1533221",
    },
    {
      image:
        "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/16-05-2024-UNICEF-Tuvalu-01.jpg/image1170x530cropped.jpg",
      description:
        "Sólo una acción drástica para reducir las emisiones puede limitar la subida del nivel del mar.",
      link: "https://news.un.org/es/story/2024/09/1533076",
    },
    {
      image:
        "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/2bf5/live/302fe950-7d1b-11ef-a8f7-6510b893a4f7.jpg.webp",
      description:
        "El huracán Helene se degrada a tormenta postropical y deja decenas de muertos en su paso por EE.UU.",
      link: "https://www.bbc.com/mundo/articles/c4gdeyp9dvxo",
    },
    {
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1760024-gettyimages-479053132.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      description:
        "El deshielo de los glaciares obliga a Suiza e Italia a redefinir parte de su frontera. Parte de la frontera entre Italia y Suiza se redibujará a medida que la crisis climática derrita los glaciares que marcan el límite entre ambos países.",
      link: "https://cnnespanol.cnn.com/2024/09/30/deshielo-glaciares-suiza-italia-frontera-trax",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 p-6 rounded-lg shadow-xl max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 my-8">
          Noticias
        </h1>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              className={`flex flex-col md:flex-row items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105`}
              key={index}
            >
              <img
                src={item.image}
                alt={`Imagen noticia ${index + 1}`}
                className="w-32 h-32 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-2">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Leer más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
