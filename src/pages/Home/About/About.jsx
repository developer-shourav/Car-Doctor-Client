import React from "react";
import aboutPerson from "../../../assets/images/about_us/person.jpg";
import aboutParts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={aboutPerson} className="w-3/4 shadow-lg rounded-lg  " />
          <img src={aboutParts} className="w-1/2 shadow-2xl rounded-lg border-8 border-white  absolute right-16 top-1/2" />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-[#FF3811] font-bold text-xl">About Us</h3>
          <h1 className="text-5xl font-bold lg:w-2/3 leading-tight">We are qualified & of experience in this field</h1>
          <p className="">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn-main hover:text-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
