import React from "react";

const Review = ({ review }) => {
  const { name, photo, quote, city } = review;
  return (
    <div className="w-full rounded-xl">
      <div className="py-5">
        <p>{quote}</p>
      </div>
      <div className="flex items-center gap-4 py-5">
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={photo} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-accent text-xl font-[600] py-1">{name}</h3>
          <h5 className="text-base text-accent">{city}</h5>
        </div>
      </div>
    </div>
  );
};

export default Review;
