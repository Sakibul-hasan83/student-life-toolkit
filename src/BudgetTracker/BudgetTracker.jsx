import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Link } from 'react-router-dom';
import AuthContext from '../AuthenticaitonElements.jsx/AuthContext';

const BudgetTracker = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [token, setToken] = useState("");

  const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

  // ===== Calculate totals =====
  const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
    { name: "Balance", value: balance }
  ];

  // ===== Fetch JWT from backend =====
  useEffect(() => {
    if (!user?.uid) return;
    const fetchToken = async () => {
      try {
        const res = await fetch("https://studenttoolkitserver.vercel.app/jwt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid: user.uid, email: user.email })
        });
        const data = await res.json();
        setToken(data.token);
      } catch (err) {
        console.error("❌ Error fetching JWT:", err);
      }
    };
    fetchToken();
  }, [user]);

  // ===== Fetch user transactions =====
  useEffect(() => {
    if (!user?.uid || !token) return;
    const fetchTransactions = async () => {
      try {
        const res = await fetch(`https://studenttoolkitserver.vercel.app/budgettracker/${user.uid}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error("❌ Error fetching transactions:", err);
      }
    };
    fetchTransactions();
  }, [user, token]);

  // ===== Add transaction handler =====
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const amount = Number(e.target.amount.value);
    if (!amount || amount <= 0) return alert("Enter a valid amount");

    try {
      const res = await fetch("https://studenttoolkitserver.vercel.app/budgettracker", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ uid: user.uid, type, amount })
      });

      if (!res.ok) throw new Error("Failed to save transaction");
      const data = await res.json();
      setTransactions(prev => [...prev, { uid: user.uid, type, amount, createdAt: new Date(), _id: data.insertedId }]);
      e.target.reset();
    } catch (err) {
      console.error("❌ Error adding transaction:", err);
      alert("Error saving data");
    }
  };

  return (
    <div className="m-4 mt-20 text-center">
      <h1 className="text-4xl font-bold">Personal Budget Tracker</h1>

      {/* Top buttons */}
      <div className="flex flex-col md:grid md:grid-cols-4 p-10 gap-4">
        <Link to="/dashboard" className="btn">Dashboard</Link>
        <Link to="/transactions" className="btn">Transactions</Link>
        <Link to="/budget" className="btn">Budget</Link>
        <Link to="/savings" className="btn">Savings</Link>
      </div>

      {/* Forms */}
      <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-10 justify-center mt-8">
        <form onSubmit={e => handleSubmit(e, "income")} className="flex gap-2">
          <input type="number" name="amount" placeholder="Add Income" className="input input-bordered" required />
          <button className="btn btn-primary">Add Income</button>
        </form>
        <form onSubmit={e => handleSubmit(e, "expense")} className="flex gap-2">
          <input type="number" name="amount" placeholder="Add Expense" className="input input-bordered" required />
          <button className="btn btn-error">Add Expense</button>
        </form>
      </div>

      {/* Summary cards */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6 mt-10">
        <div className="p-4 shadow rounded bg-green-100">
          <h2>Total Income</h2>
          <div className="text-2xl font-bold text-green-500">${income}</div>
        </div>
        <div className="p-4 shadow rounded bg-red-100">
          <h2>Total Expense</h2>
          <div className="text-2xl font-bold text-red-500">${expense}</div>
        </div>
        <div className="p-4 shadow rounded bg-blue-100">
          <h2>Main Balance</h2>
          <div className="text-2xl font-bold text-blue-500">${balance}</div>
        </div>
        <div className="p-4 shadow rounded bg-yellow-100">
          <h2>Sample Savings</h2>
          <div className="text-2xl font-bold text-yellow-500">$80000</div>
        </div>
      </div>

      {/* PieChart */}
      <div className="flex justify-center mt-12">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default BudgetTracker;
