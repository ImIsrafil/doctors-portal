import React from 'react'

const Service = ({service, setTreatment}) => {
    const {name, slote} = service;
  return (
    <div className='text-center'>
      <h3 className='text-xl text-secondary my-4 capitalize'>{name}</h3>
      <p className='text-sm text-accent my-2'>{slote[0]}</p>
      <p className='text-bold text-sm text-accent mb-4'>Available Slote {slote.length}</p>
      <label disabled={slote.length ? false : true} htmlFor="booking-modal" onClick={() => setTreatment(service)} className="btn border-0 text-white bg-gradient-to-r from-secondary to-primary">
        Book Appointment
      </label>
    </div>
  )
}

export default Service
