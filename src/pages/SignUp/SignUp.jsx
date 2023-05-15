import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const handleSignUp =  event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = "https://media.licdn.com/dms/image/C4E03AQGTYvY1e7x3UA/profile-displayphoto-shrink_800_800/0/1638112904151?e=2147483647&v=beta&t=v9Hf-uGwvnl-wcxp2eyRcLFb7en1d6S9I3AEcuCDTv8";
    createUser(email, password)
    .then( result => {
      const user = result.user;
      console.log(user);
      addUserNameAndImage(user, name, photo)
    })
    .catch( error => {
      console.log(error.message);
    })

  }


  const addUserNameAndImage = (user, name, photo) => {
    updateProfile(user, {displayName:name, photoURL:photo})
    .then( result => {
      console.log('name photo update successful', result);
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
            <form onSubmit={handleSignUp}>
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name='name'
                  required
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
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
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">Already Registered ? <Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
