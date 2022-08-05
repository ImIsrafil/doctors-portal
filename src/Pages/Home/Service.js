import React from "react";

const Service = ({service}) => {
    const {img, name, desc} = service
  return (
    <div className="card w-[100%] bg-base-100">
      <figure className="px-10 pt-10">
        <img
        
            className="max-h-[70px]"
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-accent">{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;
