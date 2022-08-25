import { format } from 'date-fns'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Service from './Service';
import BookingModal from './BookingModal'
import Loading from '../Shared/Loading';

const AvailableAppointments = ({date}) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, 'PP');
  const {data: services, isLoading, refetch} = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res => res.json())
 );

  if(isLoading) {
    return <Loading />
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //   .then(res => res.json())
  //   .then(data => setServices(data));
  // }, [formatedDate]);

  return (
    <div className='px-10 py-20'>
      <h1 className='text-secondary text-2xl font-[400] text-center'>Available Appointments On {date?format(date, 'PP'): ''}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
        {
          services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
        }
      </div>
      { treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal> }
    </div>
  )
}

export default AvailableAppointments
