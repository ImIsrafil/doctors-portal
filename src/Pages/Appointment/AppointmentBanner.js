import React from "react";
import chairImg from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <img
          src={chairImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="dentist chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
