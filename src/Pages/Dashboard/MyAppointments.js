import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
    .then(res => res.json())
    .then(data => setAppointments(data));
    }
  },[user]);
  return (
    <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        appointments?.map((appointment, index) => <tr key={index} className='hover'>
        <th>{index + 1}</th>
        <td>{appointment.treatment}</td>
        <td>{appointment.date}</td>
        <td>{appointment.slot}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
  )
}

export default MyAppointments
