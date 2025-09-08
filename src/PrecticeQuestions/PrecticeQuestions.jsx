import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthenticaitonElements.jsx/AuthContext";

const PracticeQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("MCQ");
  const [difficulty, setDifficulty] = useState("Easy");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
useEffect(() => {
    fetch("http://localhost:5000/allquestions")
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        console.log("Questions fetched:", data); // check data
      })
      .catch(err => console.log(err));
}, []);


  const generateQuestion = () => {
    const filtered = questions.filter(
      q => q.category === category && q.difficulty === difficulty
    );
    if (filtered.length === 0) {
      setQuestion(null);
      setResult("No question found!");
      return;
    }
    const randomQ = filtered[Math.floor(Math.random() * filtered.length)];
    setQuestion(randomQ);
    setAnswer("");
    setResult("");
  };

  const checkAnswer = () => {
    if (!question) return;
    if (answer === question.answer) setResult("✅ Correct!");
    else setResult(`❌ Wrong! Correct answer: ${question.answer}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-40 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Practice Questions</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="select select-bordered w-32"
        >
          <option value="MCQ">MCQ</option>
          <option value="Short">Short</option>
          <option value="TrueFalse">True/False</option>
        </select>

        <select
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
          className="select select-bordered w-32"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <button
          onClick={generateQuestion}
          className="btn btn-primary"
        >
          Generate
        </button>
      </div>

      {/* Question Card */}
      {question && (
        <div className="p-4 bg-gray-50 border rounded-lg">
          <p className="text-lg font-medium mb-4">Q: {question.question}</p>

          {/* MCQ */}
          {question.category === "MCQ" && question.options && (
            <div className="flex flex-col gap-2 mb-4">
              {question.options.map((opt, i) => (
                <label key={i} className="flex items-center gap-2 p-2 border rounded hover:bg-blue-50 cursor-pointer">
                  <input
                    type="radio"
                    name="answer"
                    value={opt}
                    checked={answer === opt}
                    onChange={e => setAnswer(e.target.value)}
                    className="radio"
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}

          {/* Short/TrueFalse */}
          {(question.category === "Short" || question.category === "TrueFalse") && (
            <input
              type="text"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              placeholder="Type your answer"
              className="input input-bordered w-full mb-4"
            />
          )}

          <button
            onClick={checkAnswer}
            className="btn btn-success w-full"
          >
            Check Answer
          </button>

          {result && <p className="mt-4 text-center font-semibold">{result}</p>}
        </div>
      )}
    </div>
  );
};

export default PracticeQuestions;
