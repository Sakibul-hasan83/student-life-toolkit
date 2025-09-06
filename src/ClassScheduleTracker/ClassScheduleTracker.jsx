import React, { useState } from "react";

const ClassScheduleTracker = () => {
  const days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",];
  const times = ["08:00–09:00","09:00–10:00","10:00–11:00","11:00–12:00","12:00–13:00","13:00–14:00","14:00–15:00","15:00–16:00","16:00–17:00","17:00–18:00"];

  const [routines, setRoutines] = useState([]);

  const handleRoutine = (e) => {
    e.preventDefault();
    const form = e.target;
    const routineData = {
      courseName: form.coursename.value,
      day: form.day.value,
      time: form.time.value,
      teacherName: form.teachername.value,
      classRoom: form.classroom.value,
      color: form.color.value,
    };
    setRoutines(prev => [...prev, routineData]);
    form.reset();
  };

  const handleClearAll = () => setRoutines([]);

  //  Simple print (PDF হবে browser print/save as PDF)
  const handlePrint = () => {
    window.print();
  };

  return (
  <div className="mt-20">
      <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col w-full">
        <div className="text-center flex flex-col md:flex-row justify-between gap-3 w-full">
          <h1 className="text-4xl font-bold">Routine Creation</h1>
          <div className="flex flex-row gap-4">
            <button className="btn rounded-lg font-bold" onClick={handlePrint}>
              Print / Download PDF
            </button>
            <button className="btn rounded-lg font-bold bg-red-600 text-white" onClick={handleClearAll}>
              Clear All
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="shadow-2xl w-full mt-4">
          <form className="card-body lg:flex-row" onSubmit={handleRoutine}>
            <div className="form-control">
              <label className="label"><span className="label-text">Course Name</span></label>
              <input type="text" name="coursename" placeholder="Course Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">Select Day</label>
              <select name="day" className="select select-bordered">
                {days.map((day,i)=><option key={i} value={day}>{day}</option>)}
              </select>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Time</span></label>
              <select name="time" className="select select-bordered" required>
                <option value="">Select Time</option>
                {times.map((time,i)=><option key={i} value={time}>{time}</option>)}
              </select>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Teacher Name</span></label>
              <input type="text" name="teachername" placeholder="Teacher Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Classroom</span></label>
              <input type="text" name="classroom" placeholder="Classroom" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Color</span></label>
              <input type="color" name="color" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>

        {/* Routine Table */}
     <div className="overflow-x-auto mt-6 w-full">
  <table className="border-collapse border-2 border-black w-full text-[10px] sm:text-xs md:text-sm lg:text-base">
    <thead>
      <tr>
        <th className="border-2 border-black p-1 sm:p-2 md:p-3">Day</th>
        {times.map((time,i)=>
          <th key={i} className="border-2 border-black p-1 sm:p-2 md:p-3">{time}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {days.map((day,dIndex)=>(
        <tr key={dIndex}>
          <td className="border-2 border-black font-bold p-1 sm:p-2 md:p-3">{day}</td>
          {times.map((time,tIndex)=>{
            const routine = routines.find(r=>r.day===day && r.time===time);
            return (
              <td key={tIndex} 
                className="border-2 border-black text-center p-1 sm:p-2 md:p-3" 
                style={{backgroundColor: routine ? routine.color:"white"}}>
                {routine ? (
                  <div>
                    <p className="font-bold">{routine.courseName}</p>
                    <p>{routine.teacherName}</p>
                    <p>{routine.classRoom}</p>
                  </div>
                ): null}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  </div>
  );
};

export default ClassScheduleTracker;
