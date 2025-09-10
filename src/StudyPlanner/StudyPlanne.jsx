import React, { useState, useEffect } from "react";

const StudyPlanner = () => {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [plans, setPlans] = useState([]);

  // Fetch plans
  useEffect(() => {
    fetch("https://studenttoolkitserver.vercel.app/plans") // Deploy হলে URL change করুন
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  // Add plan
  const handleAdd = async (e) => {
    e.preventDefault();
    const newPlan = { subject, priority, deadline };

    const res = await fetch("https://studenttoolkitserver.vercel.app/plans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlan),
    });

    if (res.ok) {
      const data = await res.json();
      setPlans([...plans, data]);
      setSubject("");
      setPriority("Medium");
      setDeadline("");
    }
  };

  // Delete plan
  const handleDelete = async (id) => {
    await fetch(`https://studenttoolkitserver.vercel.app/plans/${id}`, { method: "DELETE" });
    setPlans(plans.filter((p) => p._id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Study Planner</h1>

      {/* Form */}
      <form onSubmit={handleAdd} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Enter Subject/Topic"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Plan
        </button>
      </form>

      {/* Plans List */}
      <ul className="mt-6 space-y-3">
        {plans.map((plan) => (
          <li
            key={plan._id || plan.subject}
            className="flex justify-between items-center border p-4 rounded shadow-sm bg-gray-50"
          >
            <div>
              <p className="font-semibold text-lg">{plan.subject}</p>
              <p className="text-sm text-gray-600">
                Priority: <span className={`font-bold ${plan.priority === 'High' ? 'text-red-500' : plan.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{plan.priority}</span> | Deadline: {plan.deadline}
              </p>
            </div>
            <button
              onClick={() => handleDelete(plan._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyPlanner;
