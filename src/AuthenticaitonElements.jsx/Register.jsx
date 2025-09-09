import { useContext } from "react";
import AuthContext from "./AuthContext";

const Register = () => {
  const { newUser, logout } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const email = form.email.value; // Get email from form
    const password = form.password.value; // Get password from form

    // Create new user with Firebase Auth
    newUser(email, password)
      .then((result) => {
        // console.log("User created:", result.user);

        // Show alert message after successful registration
        alert("Successful register! Now you can login.");

        // Optionally, log out the user automatically
        logout().catch((err) => {
          // console.log("Logout error:", err.message);
        });
      })
      .catch((error) => {
        // console.log("Registration error:", error.message); // Log registration error
        alert(error.message); // Show alert if registration fails
      });

    form.reset(); // Reset the form
  };

  return (
    <div className="hero bg-base-200 min-h-screen fixed top-14">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            {/* Email input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Submit button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
