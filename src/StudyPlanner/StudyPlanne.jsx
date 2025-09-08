import React, { useState, useEffect } from "react";

const StudyPlanner = () => {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [plans, setPlans] = useState([]);

  // Fetch plans
  useEffect(() => {
    fetch("http://localhost:5000/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  // Handle Add
  const handleAdd = async (e) => {
    e.preventDefault();
    const newPlan = { subject, priority, deadline };

    await fetch("http://localhost:5000/plans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlan),
    });

    setPlans([...plans, newPlan]);
    setSubject("");
    setPriority("Medium");
    setDeadline("");
  };

  // Handle Delete
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/plans/${id}`, { method: "DELETE" });
    setPlans(plans.filter((p) => p._id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-40">
      <h1 className="text-2xl font-bold mb-4">📚 Study Planner</h1>

      {/* Form */}
      <form onSubmit={handleAdd} className="space-y-3">
        <input
          type="text"
          placeholder="Enter Subject/Topic"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Plan
        </button>
      </form>

      {/* Plans List */}
      <ul className="mt-6 space-y-2">
        {plans.map((plan) => (
          <li
            key={plan._id || plan.subject}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="font-semibold">{plan.subject}</p>
              <p className="text-sm">
                Priority: {plan.priority} | Deadline: {plan.deadline}
              </p>
            </div>
            <button
              onClick={() => handleDelete(plan._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
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
