import React, { useState } from 'react';
import { SlArrowDownCircle } from "react-icons/sl";
const BudgetTracker = () => {

// state

const [income,setIncome]=useState(0);
const [expense,setExpense]=useState(0);




// handleIncome
  const handleIncome =(e)=>{
e.preventDefault()
const form = e.target;
const addIncome = Number(form.income.value);

if(addIncome>0)
{
setIncome(income+addIncome)
}


form.reset()

  }
// handleExpense

const handleExpense = (e) => {
  e.preventDefault();
  const form = e.target;
  const addExpense = Number(form.expense.value);
  const currentBalance = income - expense; 

  if(addExpense > currentBalance){
    alert("⚠️ You don't have enough balance!");
  } else if(addExpense > 0){
    setExpense(expense + addExpense);
  }


  form.reset();
};




  const mainBalance = income-expense


  return (
  <div className='m-4 items-center text-center mt-20'>
{/* buttons */}
                                   <div><h1 className='text-4xl font-bold'>Personal Budget Tracker</h1></div>
                                 <div>
                                           <div className='grid grid-cols-4 p-10 gap-4'>
                                              <button className='btn '>Dashboard</button>
                                              <button  className='btn'>Transactions</button>
                                              <button className='btn'>Budgets</button>
                                              <button className='btn'>Savings</button>
                                           </div>
{/* data input form */}
                                           <div className='my-10d '>
                                            
                                                         
                                                                    <div className='flex flex-row justify-around md:flex md:flex-row md:justify-center md:items-center'>
                                                                      <form className="card-body flex flex-row justify-around gap-4 md:flex md:flex-row md:justify-start  items-center text-left" onSubmit={handleIncome}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Add Income</span>
          </label>
          <input type="number" name='income' placeholder="income" className="input input-bordered" required />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary" >Add</button>
        </div>
      </form>

{/* add expense */}
                                                        <form className="card-body flex flex-row justify-around gap-4 md:flex md:flex-row md:justify-start  items-center text-left" onSubmit={handleExpense}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Add Expense</span>
          </label>
          <input type="number" name='expense' placeholder="expense" className="input input-bordered" required />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary" >Add</button>
        </div>
      </form>
                                                                    </div>

                                              
                                           </div>
                                 </div>

                                   <div className='grid grid-cols-2 md:grid md:grid-col-4 lg:grid lg:grid-cols-4 justify-around gap-5 lg:gap-10'>
                                    {/* total income cards */}
                                               <div className='border-l-8 rounded-xl p-4  shadow-lg border-l-green-500 bg-[#f8f8f8]'>
                                                              <div className='flex flex-row justify-between items-center '>
                                                                      <h2>Total Income </h2> 
                                                                      <SlArrowDownCircle className='' />
                                                              </div>
                                                              <div className='text-2xl font-bold text-green-400'>
                                                                ${income}
                                                              </div>
                                                              <div>
                                                                1 income transactions
                                                              </div>
                                               </div>


                                               {/* total expenses card */}

                                               <div className='border-l-8 rounded-xl p-4  shadow-lg border-l-red-500 bg-[#f8f8f8]'>
                                                              <div className='flex flex-row justify-between items-center '>
                                                                      <h2>Total Expense </h2> 
                                                                      <SlArrowDownCircle className='' />
                                                              </div>
                                                              <div className='text-2xl font-bold text-red-400'>
                                                                ${expense}
                                                              </div>
                                                              <div>
                                                                1 income transactions
                                                              </div>
                                               </div>


                                               {/* Current Balance card */}

                                               <div className='border-l-8 rounded-xl p-4  shadow-lg border-l-yellow-500 bg-[#f8f8f8]'>
                                                              <div className='flex flex-row justify-between items-center '>
                                                                      <h2>Main Balance </h2> 
                                                                      <SlArrowDownCircle className='' />
                                                              </div>
                                                              <div className='text-2xl font-bold text-blue-400'>
                                                                ${mainBalance}
                                                              </div>
                                                              <div>
                                                                1 income transactions
                                                              </div>
                                               </div>

                                               {/* Spending Status card
                                        */}


                                           <div className='border-l-8 rounded-xl p-4  shadow-lg border-l-blue-500 bg-[#f8f8f8]'>
                                                              <div className='flex flex-row justify-between items-center '>
                                                                      <h2>Total Income </h2> 
                                                                      <SlArrowDownCircle className='' />
                                                              </div>
                                                              <div>
                                                                $80000.00
                                                              </div>
                                                              <div>
                                                                1 income transactions
                                                              </div>
                                               </div>
                                   </div>


{/* Budget OverView */}
                      
                                         
{/* Savings Goals */}
  </div>
  );
}

export default BudgetTracker;
