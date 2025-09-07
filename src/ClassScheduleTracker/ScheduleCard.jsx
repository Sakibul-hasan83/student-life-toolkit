import React, { useContext } from 'react';
import routineLogo from "../assets/routine.png"
import budgetLogo from "../assets/budget.png"
import precticeLogo from "../assets/prectice.png"
import motivation from "../assets/motivation.png"
import studyPlaneIcon from "../assets/studyplane.png"
import timeIcon from "../assets/studytime.png"

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



// handlePrecticeQuestion
const handlePrecticeQuestion =()=>{

if(!user){
       navigate("login",{state:{from:"/precticequestion"}})
}
else{
  navigate("/precticequestion")

}

}


// handleStudyPlane

const handleStudyPlane =()=>{

  if(!user){navigate("login",{state:{from:"handleStudyPlane"}})}
  else{navigate("handleStudyPlane")}
}

// handleMotivaion
const handleMotivation =()=>{
if(!user){navigate("login",{state:{from:"/motivation"}})}
else (navigate("/motivation"))
}

// handleStudyTime
const handleStudyTime =()=>{
if(!user){navigate("login",{state:{from:"/studytime"}})}
else(navigate("/studytime"))
}


  return (
    <div className=' flex flex-col justify-around gap-5  md:grid md:grid-cols-3 lg:grid lg:grid-cols-3   p-5  '>


{/* 
        1st card */}
       <div className="card bg-[#f1f1f1] text-black items-center ">
        <img src={routineLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Rourtine Create</h2>
    <p></p>
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
    <p></p>
    <div className="card-actions justify-end">
      <button className='btn bg-[#67C090] text-white' to={"/budgetracker"} onClick={handleBudget}>Click For Budget Tracker</button>
    </div>
  </div>
</div>    


{/* 3rd card */}

   <div className="card bg-[#f1f1f1]   text-black items-center">
      <img src={precticeLogo} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Prectice Questions</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className='btn bg-[#67C090] text-white' to={"/precticequestion"} onClick={handlePrecticeQuestion}>Click for Prectice Qutestins</button>
    </div>
  </div>
</div>    

{/* 4th card */}

   <div className="card bg-[#f1f1f1]   text-black items-center">
      <img src={studyPlaneIcon} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Study Planner</h2>
    <p></p>
    <div className="card-actions justify-end">
        <button className='btn bg-[#67C090] text-white' to={"/studyplanner"} onClick={handleStudyPlane}>Clicke for Study Planne </button>
    </div>
  </div>
</div>    

{/* 5th card */}

   <div className="card bg-[#f1f1f1]  text-black items-center">
      <img src={motivation} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Motivations</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end">
        <button className='btn bg-[#67C090] text-white' to={"/motivation"} onClick={handleMotivation}>Clicke for Motivations </button>
    </div>
  </div>
</div>    



{/* 6th card */}

   <div className="card bg-[#f1f1f1]  text-black items-center">
      <img src={timeIcon} alt="" className='w-20 mt-4' />
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold ">Study Time</h2>
    <p>Create routine time,teacher wise .</p>
    <div className="card-actions justify-end">
        <button className='btn bg-[#67C090] text-white' to={"/studytime"} onClick={handleStudyTime}>Clicke for Study Time </button>
    </div>
  </div>
</div>    
    </div>
  );
}

export default ScheduleCard;
