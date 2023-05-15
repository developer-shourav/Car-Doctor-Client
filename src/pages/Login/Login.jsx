import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const handleLogin =  event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then( result => {
      console.log(result.user);
      form.reset()
    })
    .catch( error => {
      console.log(error.message);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">
          <img src={loginImg} className="w-full " alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-color-primary rounded border-0 hover:bg-orange-600"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">New to Car Doctor ? <Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
