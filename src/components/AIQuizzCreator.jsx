// src/components/AIQuizzCreator.jsx
import React, { useState } from "react";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import QuizGenerator from "./QuizGenerator";
import API_KEY from "../data/apiData"; // Importa la API Key


const AIQuizzCreator = ({ data }) => {
  const [story, setStory] = useState("");
  const dataSlides = data.slides;
  let topicsDescriptions = "";
  for (let index = 0; index < dataSlides.length; index++) {
    topicsDescriptions += `${dataSlides[index].description}\n`;
  }


  // Ensure you use REACT_APP_API_KEY
  const apiKey = API_KEY;
    console.log(API_KEY);
  
  const genAI = new GoogleGenerativeAI(apiKey);

  const schema = {
    description: "List of questions",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        question: {
          type: SchemaType.STRING,
          description: "Question",
          nullable: false,
        },
        optionA: {
          type: SchemaType.STRING,
          description: "Option A",
          nullable: false,
        },
        optionB: {
          type: SchemaType.STRING,
          description: "Option B",
          nullable: false,
        },
        optionC: {
          type: SchemaType.STRING,
          description: "Option C",
          nullable: false,
        },
      },
      required: ["question", "optionA", "optionB", "optionC"],
    },
  };

  if (!apiKey) {
    return <div>Error: API Key is not defined.</div>;
  }

  const handleGenerateStory = async () => {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });
    const prompt = `Escribe 10 preguntas de 3 opciones multiples sobre el tema de ${data.title}, que contiene la descripción de ${data.description}, y además contiene los siquientes topicos en las siguiente slides ${topicsDescriptions}`; // The prompt for the generation

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();
      text = JSON.parse(text);
      setStory(text);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  /*const quizData = [
    {
      optionA:
        "Las variaciones climáticas eran naturales, pero desde el siglo XVIII, el uso de combustibles fósiles ha aumentado significativamente los gases de efecto invernadero.",
      optionB:
        "El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos.",
      optionC:
        "Las huellas del pasado son vitales para entender cómo nuestro planeta ha respondido a los cambios climáticos a lo largo de la historia.",
      question:
        "Según el texto, ¿cuál es la principal causa del cambio climático actual?",
    },
    {
      optionA: "El aumento del nivel del mar.",
      optionB: "La disminución de las precipitaciones.",
      optionC: "El aumento de las temperaturas.",
      question:
        "Uno de los efectos más notables del cambio climático en el siglo XXI es:",
    },
    {
      optionA: "Las capas de hielo.",
      optionB: "Los anillos de árboles.",
      optionC: "Todas las anteriores.",
      question:
        "Las investigaciones sobre el clima pasado se basan en el análisis de:",
    },
    {
      optionA: "El siglo XX.",
      optionB: "El siglo XIX.",
      optionC: "El siglo XVIII.",
      question:
        "En qué siglo comenzaron las investigaciones que alertaron sobre el aumento de dióxido de carbono y metano en la atmósfera?",
    },
    {
      optionA: "Para comprender la resiliencia de los ecosistemas.",
      optionB:
        "Para comprender la capacidad de adaptación de las sociedades humanas.",
      optionC: "Todas las anteriores.",
      question:
        "El estudio de las huellas del pasado nos brinda información valiosa para:",
    },
    {
      optionA: "Para monitorear el CO2 en Mauna Loa.",
      optionB: "Para estudiar el impacto humano en el clima.",
      optionC: "Para crear el IPCC (Órgano Científico).",
      question:
        "El estudio de Charles David Keeling en 1956 tenía como objetivo:",
    },
    {
      optionA: "Protocolo de Kioto.",
      optionB: "Acuerdo de París.",
      optionC: "Ambas son correctas.",
      question:
        "Los acuerdos internacionales para reducir las emisiones incluyen:",
    },
    {
      optionA:
        "Que las sociedades humanas son capaces de adaptarse a los cambios climáticos.",
      optionB:
        "Que la acción humana es la principal causa del cambio climático actual.",
      optionC:
        "Que el cambio climático es un fenómeno natural que no se puede controlar.",
      question:
        "De acuerdo con el texto, ¿qué conclusión podemos sacar sobre el cambio climático?",
    },
    {
      optionA: "El IPCC (Órgano Científico) fue creado en 1988.",
      optionB:
        "Las investigaciones sobre el cambio climático se iniciaron en el siglo XIX.",
      optionC:
        "El cambio climático es un fenómeno reciente sin antecedentes históricos.",
      question:
        "Según el texto, ¿cuál de las siguientes afirmaciones es correcta?",
    },
    {
      optionA: "Para identificar patrones climáticos históricos.",
      optionB:
        "Para comprender el impacto del cambio climático en la vida humana.",
      optionC: "Para predecir con precisión el clima futuro.",
      question:
        "La investigación de los anillos de árboles, sedimentos y capas de hielo tiene como objetivo principal:",
    },
  ];*/

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold">AI QUIZ CREATOR</h2>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-[#3F7E44] rounded-md"
          onClick={handleGenerateStory}
        >
          Crear Preguntas
        </button>
        {story && <QuizGenerator quizData={story} />}
      </div>
    </>
  );
};

export default AIQuizzCreator;
