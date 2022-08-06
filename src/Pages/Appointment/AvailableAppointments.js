import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Service from './Service';
import BookingModal from './BookingModal'

const AvailableAppointments = ({date}) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data));
  }, []);

  return (
    <div className='px-10 py-20'>
      <h1 className='text-secondary text-2xl font-[400] text-center'>Available Appointments On {date?format(date, 'PP'): ''}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
        {
          services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
        }
      </div>
      { treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal> }
    </div>
  )
}

export default AvailableAppointments
