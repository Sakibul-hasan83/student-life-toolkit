import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthenticaitonElements.jsx/AuthContext';

const Navbar = () => {



  const links=<>
    <Link className='text-black  md:font-bold' to={"/"}>Home</Link>
  </>
  const {user,logout}=useContext(AuthContext)
  const location = useLocation()    
  const navigate = useNavigate()  
  const textColor=location.pathname === "/" ? "text-white":"text-black" ;

  const handleLogout=()=>{
    logout()
    // .then(result => console.log("succesfully logut"))
    // .catch(error => console.log(error.message))
    
    navigate("/")

  }
  return (
    <div>
      <div className={`navbar fixed top-0 left-0 z-50 shadow-xl  ${textColor}`}>
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
  {links}
      </ul>
    </div>
    <a className="btn btn-ghost  md:text-2xl lg:text-4xl font-bold ">Student Life Toolkits</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end flex flex-row gap-4 mr-4">
    {
      user ?      <><button onClick={handleLogout}>Logout</button></>:<><Link to={"/register"} className='btn'>Register</Link>
    <Link to={"/login"} className='btn '>Login</Link>
</>
    }
  </div>
</div>
    </div>
  );
}

export default Navbar;
