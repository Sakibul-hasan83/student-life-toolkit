import React, { useContext } from 'react';
import routineLogo from "../assets/routine.png"
import budgetLogo from "../assets/budget.png"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthenticaitonElements.jsx/AuthContext';
// #DDF4E7
// #67C090
// #26667F
// #124170
const ScheduleCard = () => {
  const navigate = useNavigate()

const {user}=useContext(AuthContext)


// handle routine 
const handleRoutine=()=>{

  if(!user){
     navigate("/login",{state:{from:"/classscheduletracker"}})
  }
  else{   
    navigate("/classscheduletracker")
  }
}


// handle budgettracker
const handleBudget =()=>{

if(!user){navigate("/login",{state:{from:"/budgetracker"}})}

else{
  navigate("/budgetracker")
}

}



  return (
    <div className=' flex flex-col justify-around gap-5  md:grid md:grid-cols-3 lg:grid lg:grid-cols-3   p-5  '>


{/* 
        1st card */}
       <div className="card bg-[#f1f1f1] text-black items-center ">
        <img src={routineLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Rourtine Create</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end ">
    <button    className='btn bg-[#67C090] text-white ' onClick={handleRoutine}> Click for Create Routine</button>
    </div>
  </div>
</div>      

{/* 2nd card */}

   <div className="card bg-[#f1f1f1] text-black items-center">
           <img src={budgetLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Budget Tracker</h2>
    <p>Calculate Yout Budget .</p>
    <div className="card-actions justify-end">
      <button className='btn bg-[#67C090] text-white' to={"/budgetracker"} onClick={handleBudget}>Click For Budget Tracker</button>
    </div>
  </div>
</div>    


{/* 3rd card */}

   <div className="card bg-[#f1f1f1]   text-black items-center">
      <img src={budgetLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Rourtine Create</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end">
        <Link className='btn bg-[#67C090] text-white'>Clicke for Create routine </Link>
    </div>
  </div>
</div>    

{/* 3rd card */}

   <div className="card bg-[#f1f1f1]   text-black items-center">
      <img src={budgetLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Rourtine Create</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end">
        <Link className='btn bg-[#67C090] text-white'>Clicke for Create routine </Link>
    </div>
  </div>
</div>    

{/* 3rd card */}

   <div className="card bg-[#f1f1f1]  text-black items-center">
      <img src={budgetLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Rourtine Create</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end">
        <Link className='btn bg-[#67C090] text-white'>Clicke for Create routine </Link>
    </div>
  </div>
</div>    



{/* 4th card */}

   <div className="card bg-[#f1f1f1]  text-black items-center">
      <img src={budgetLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Rourtine Create</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end">
        <Link className='btn bg-[#67C090] text-white'>Clicke for Create routine </Link>
    </div>
  </div>
</div>    
    </div>
  );
}

export default ScheduleCard;
