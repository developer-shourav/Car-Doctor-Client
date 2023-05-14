import React from "react";
import {BsArrowRight} from 'react-icons/bs';

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-color-primary">Price $: {price}</p>
        <div className="card-actions ms-auto">
          <button className="btn btn-outline btn-circle text-color-primary hover:bg-orange-600 hover:border-orange-600"><BsArrowRight className="text-2xl font-bold" /></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
