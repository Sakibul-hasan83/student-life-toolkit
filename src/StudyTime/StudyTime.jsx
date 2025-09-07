import React, { useState, useEffect } from "react";

const StudyTime = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 মিনিট study
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // Timer logic
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      if (isBreak) {
        setTimeLeft(25 * 60);
        setIsBreak(false);
      } else {
        setTimeLeft(5 * 60);
        setIsBreak(true);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">

      {/* Pomodoro Timer Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">
          {isBreak ? "🛌 Break Time" : "📚 Study Time"}
        </h2>

        <p className="text-6xl font-mono mb-6">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="btn btn-primary"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
            }}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyTime;
