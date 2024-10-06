// src/components/AIQuizzCreator.jsx
import React, { useEffect, useState } from "react";

const AIQuizzCreator = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this URL with the actual Gemini API endpoint
  const API_URL = "https://api.gemini.com/quiz"; // Example URL

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuizzes(data); // Assuming the response is in the desired format
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [API_URL]);

  if (loading) {
    return <div>Loading quizzes...</div>;
  }

  if (error) {
    return <div>Error fetching quizzes: {error}</div>;
  }

  return (
    <div className="quiz-container">
      <h2 className="text-2xl font-bold mb-4">AI Quiz Creator</h2>
      {quizzes.length > 0 ? (
        quizzes.map((quiz, index) => (
          <div key={index} className="quiz-item mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">{quiz.question}</h3>
            <ul className="list-disc pl-5">
              {quiz.answers.map((answer, i) => (
                <li key={i} className="text-gray-700">
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div>No quizzes available.</div>
      )}
    </div>
  );
};

export default AIQuizzCreator;
