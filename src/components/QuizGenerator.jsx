// src/components/QuizGenerator.jsx
import React, { useState } from 'react';
import styles from '../styles/Glass.module.css';

const QuizGenerator = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    // In this example, we assume the correct answer is always optionB for simplicity
    const correctAnswer = 'optionB';

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer('');
    } else {
      setShowScore(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className={`max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg ${styles.glassStyle}`}>
  {showScore ? (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-600">Quiz Comepletado!</h2>
      <p className="text-lg mt-4">
        Tu puntaje: {score} de {quizData.length}
      </p>
      <button
        onClick={handleResetQuiz}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Reiniciar Quiz
      </button>
    </div>
  ) : (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">
        Pregunta {currentQuestionIndex + 1}
      </h2>
      <p className="mt-4 text-black">
        {quizData[currentQuestionIndex].question}
      </p>
      <div className="flex flex-col items-start mt-6 space-y-4">
        <label className="w-full block bg-[#34cf6d] p-3 rounded-md border-[#3F7E44] border-2">
          <input
            type="radio"
            name="answer"
            value="optionA"
            checked={selectedAnswer === 'optionA'}
            onChange={() => handleAnswerSelection('optionA')}
            className="mr-2"
          />
          {quizData[currentQuestionIndex].optionA}
        </label>
        <label className="w-full block bg-[#34cf6d] p-3 rounded-md border-[#3F7E44] border-2">
          <input
            type="radio"
            name="answer"
            value="optionB"
            checked={selectedAnswer === 'optionB'}
            onChange={() => handleAnswerSelection('optionB')}
            className="mr-2"
          />
          {quizData[currentQuestionIndex].optionB}
        </label>
        <label className="w-full block bg-[#34cf6d] p-3 rounded-md border-[#3F7E44] border-2">
          <input
            type="radio"
            name="answer"
            value="optionC"
            checked={selectedAnswer === 'optionC'}
            onChange={() => handleAnswerSelection('optionC')}
            className="mr-2"
          />
          {quizData[currentQuestionIndex].optionC}
        </label>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selectedAnswer}
        className={`mt-6 py-2 px-4 rounded text-white ${
          selectedAnswer ? 'bg-[#FA8207] hover:bg-white' : 'bg-gray-400'
        } transition duration-300`}
      >
        Siguiente
      </button>
    </div>
  )}
</div>

  );
};

export default QuizGenerator;
