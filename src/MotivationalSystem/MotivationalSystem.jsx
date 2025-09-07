import React, { useState, useEffect } from "react";

// বাংলা Motivational Quotes
const banglaQuotes = [
  "নিজেকে ধাক্কা দাও, অন্য কেউ তোমার জন্য করবে না।",
  "কঠোর পরিশ্রম করলে অর্জনের আনন্দ আরও বেশি হবে।",
  "সাফল্য নিজের কাছে আসে না, নিজেই বের হয়ে সেটি অর্জন করতে হবে।",
  "প্রতিদিন নতুন করে চেষ্টা করো, সফলতা ধীরে ধীরে আসবে।",
  "ভয়কে ছাড়াও এগিয়ে যাও, এগুলো তোমাকে শক্তিশালী করবে।",
];

const MotivationalSystem = ({ plans }) => {
  const [quote, setQuote] = useState("");
  const [completed, setCompleted] = useState([]);

  // Random বাংলা quote
  useEffect(() => {
    const randomQuote =
      banglaQuotes[Math.floor(Math.random() * banglaQuotes.length)];
    setQuote(randomQuote);
  }, []);

  // Task complete/undo
  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const progress = plans && plans.length
    ? Math.round((completed.length / plans.length) * 100)
    : 0;

  return (
    <div className="max-w-3xl mx-auto space-y-6 mt-20">

      {/* Motivational Quote */}
      <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">🌟 আজকের প্রেরণামূলক বাক্য</h2>
        <p className="italic text-lg">{quote}</p>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-3">🎯 অগ্রগতি</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-700">
          {completed.length} / {plans?.length || 0} টাস্ক সম্পন্ন ({progress}%)
        </p>
        {progress === 100 && (
          <p className="mt-3 text-green-600 font-bold">
            ✅ অভিনন্দন! সব টাস্ক সম্পন্ন হয়েছে!
          </p>
        )}

        {/* Task List */}
        <ul className="mt-4 space-y-2">
          {plans?.map((plan) => (
            <li
              key={plan._id || plan.subject}
              className={`p-3 rounded-lg flex justify-between items-center shadow-sm ${
                plan.priority === "High"
                  ? "bg-red-100 border-l-4 border-red-500"
                  : plan.priority === "Medium"
                  ? "bg-yellow-100 border-l-4 border-yellow-500"
                  : "bg-green-100 border-l-4 border-green-500"
              }`}
            >
              <div>
                <h3
                  className={`font-semibold ${
                    completed.includes(plan._id) ? "line-through text-gray-500" : ""
                  }`}
                >
                  {plan.subject}
                </h3>
                <p className="text-sm text-gray-700">
                  Deadline: {plan.deadline}
                </p>
              </div>
              <button
                onClick={() => toggleComplete(plan._id)}
                className={`btn btn-sm ${
                  completed.includes(plan._id) ? "btn-warning" : "btn-success"
                }`}
              >
                {completed.includes(plan._id) ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MotivationalSystem;
