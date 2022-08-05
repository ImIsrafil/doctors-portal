import React from 'react'
import PrimaryButton from '../Shared/PrimaryButton'
import appointmentBgImg from '../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <div style={{
      background: `url(${appointmentBgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} className='mt-40 px-10 py-12 flex justify-center'>
      <div className='max-w-sm min-w-[300px] text-center'>
        <h4 className='text-base font-bold text-secondary'>Contact Us</h4>
        <h3 className='text-2xl font-[600] text-white mt-2 mb-5'>Stay Connected With Us</h3>
        <form action="">
          <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
          <input type="text" placeholder="Your Address" className="input input-bordered w-full max-w-sm my-4" />
          <textarea rows="5" maxLength="300" className="textarea textarea-bordered w-full max-w-sm mb-3" placeholder="Your Message"></textarea>
          {
            <PrimaryButton type={"submit"}>Submit</PrimaryButton>
          }
        </form>
      </div>
    </div>
  )
}

export default ContactUs
