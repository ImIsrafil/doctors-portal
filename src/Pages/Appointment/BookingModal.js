import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const [user] = useAuthState(auth);
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(treatment.name, slot, treatment._id);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setTreatment(null)}
          >
            ✕
          </label>
          <h3 className="font-bold text-lg uppercase">
            Booking for: {treatment.name}
          </h3>
          <form
            className="grid grid-col-1 justify-items-center gap-4 mt-4"
            onSubmit={handleBooking}
          >
            <input
              name="date"
              type="text"
              defaultValue={date ? format(date, "PP") : ""}
              readOnly
              className="input w-full max-w-xs"
            />
            <select name="slot" className="select w-full max-w-xs">
              {
                treatment.slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              value={user?.displayName}
              readOnly
              type="text"
              placeholder="Your Name?"
              className="input w-full max-w-xs"
            />
            <input
              name="email"
              value={user?.email}
              readOnly
              type="email"
              placeholder="Your Email?"
              className="input w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Your Email?"
              className="input w-full max-w-xs btn border-0 text-white bg-gradient-to-r from-secondary to-primary"
            />
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
