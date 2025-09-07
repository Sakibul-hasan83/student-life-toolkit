import React, { useState, useEffect } from "react";

const StudyPlanner = () => {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [plans, setPlans] = useState([]);

  // Fetch all plans
  useEffect(() => {
    fetch("http://localhost:5000/studyplans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  //  Add new plan
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = { subject, priority, deadline };

    fetch("http://localhost:5000/studyplans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlan),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlans([...plans, { ...newPlan, _id: data.insertedId }]);
        setSubject("");
        setPriority("Medium");
        setDeadline("");
      });
  };

  // Delete plan
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/studyplans/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setPlans(plans.filter((plan) => plan._id !== id));
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700 mt-20">
        📚 Study Planner
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-2xl max-w-lg mx-auto space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Subject/Topic</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter subject name"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select select-bordered w-full"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Plan
        </button>
      </form>

      {/* Plans List */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">📌 Your Plans</h2>
        <div className="grid gap-4">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{plan.subject}</h3>
                <p className="text-sm text-gray-500">
                  Deadline: {plan.deadline}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    plan.priority === "High"
                      ? "bg-red-500"
                      : plan.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {plan.priority}
                </span>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(plan._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyPlanner;
