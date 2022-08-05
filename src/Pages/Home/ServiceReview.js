import React from 'react'
import treatmentImg from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const ServiceReview = () => {
  return (
    <div className="hero bg-white mt-28">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className='flex-1 flex justify-center lg:justify-end'>
        <img src={treatmentImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    </div>
    <div className='flex-1 text-accent'>
      <h1 className="text-5xl font-[600]">Exceptional Dental Care, On Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {
        <PrimaryButton>Get Started</PrimaryButton>
      }
    </div>
  </div>
</div>
  )
}

export default ServiceReview
