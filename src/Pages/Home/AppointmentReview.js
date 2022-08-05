import React from "react";
import doctorImg from "../../assets/images/doctor-small.png";
import appointmentBgImg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const AppointmentReview = () => {
  return (
    <div style={{
      background: `url(${appointmentBgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top left bottom right'
    }} className="hero py-0 mt-48 w-full">
      <div className="hero-content flex-col lg:flex-row py-0">
        <div className="flex-1 hidden lg:flex justify-center">
          <img src={doctorImg} className="max-w-md mt-[-70px] rounded-lg" alt="" />
        </div>
        <div className="flex-1 my-12">
          <h3 className="text-secondary text-base font-bold">Appointment</h3>
          <h1 className="text-3xl font-[500] mt-4 text-white">
            Make an Appointment Today
          </h1>
          <p className="py-6 text-gray-100">
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

export default AppointmentReview;
