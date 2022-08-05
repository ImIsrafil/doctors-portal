import React from 'react'
import fluorideImg from '../../assets/images/fluoride.png';
import cavityImg from '../../assets/images/cavity.png';
import whiteningImg from '../../assets/images/whitening.png';
import Service from './Service';
import ServiceReview from './ServiceReview';



const services = [
    {
        name: 'Flouride Treatment',
        img: fluorideImg,
        desc: 'Treatment will have to provide for your happy life and you Smile',
    },
    {
        name: 'Cavity Filling',
        img: cavityImg,
        desc: 'Treatment will have to provide for your happy life and you Smile',
    },
    {
        name: 'Teeth Whitening',
        img: whiteningImg,
        desc: 'Treatment will have to provide for your happy life and you Smile',
    },
];

const Services = () => {
  return (
    <div className='m-auto mt-32 max-w-screen-xl'>
      <div className='text-center py-8'>
        <h3 className='uppercase font-bold text-secondary text-lg'>Our Services</h3>
        <h2 className='capitalize font-[600] text-accent text-3xl mt-3'>Services We Provide</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {
            services.map((service, index) => <Service key={index} service={service} />)
        }
      </div>
      <div>
        <ServiceReview />
      </div>
    </div>
  )
}

export default Services
