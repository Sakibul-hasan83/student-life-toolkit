import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location =useLocation()
const navigate = useNavigate()

  const {newUser,login}=useContext(AuthContext)


const from =location.state?.from || "/"

const handleLogin=(event)=>{

event.preventDefault()
const form = event.target;
const email=form.email.value;
const password=form.password.value;
const user = {email,password}
console.log(user)

// login
login(email,password)
.then(result=>console.log(result.user))
.catch(error =>console.log(error.message))

navigate(from,{replace:true})






    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen fixed top-14 ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
     
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
}

export default Login;
