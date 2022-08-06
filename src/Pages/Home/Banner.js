import React from "react";
import chairImg from "../../assets/images/chair.png";
import bannerBgImg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div style={{
      background: `url(${bannerBgImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className="hero py-10 lg:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={chairImg}
          className="max-w-xl w-[90%] rounded-lg shadow-2xl"
          alt=""
        />
        <div className="flex-1 px-10">
          <h1 className="text-6xl text-accent font-[700]">Your New Smile Start Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {
            <PrimaryButton>Get Started</PrimaryButton>
          }
        </div>
      </div>
    </div>
  );
};

export default Banner;
