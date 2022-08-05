import React from 'react'
import quoteImg from '../../assets/icons/quote.svg';
import people1Img from '../../assets/images/people1.png'
import people2Img from '../../assets/images/people2.png'
import people3Img from '../../assets/images/people3.png'
import Review from './Review';

const reviews = [
  {
    name: 'Willeam Watson',
    photo: people1Img,
    quote: 'Great treatment I have ever seen, Their doctors are very firendly, They has digital care system',
    city: 'California',
  },
  {
    name: 'Shopia',
    photo: people2Img,
    quote: 'Great treatment I have ever seen, Their doctors are very firendly, They has digital care system',
    city: 'California',
  },
  {
    name: 'Taylor Swift',
    photo: people3Img,
    quote: 'Great treatment I have ever seen, Their doctors are very firendly, They has digital care system',
    city: 'California',
  },
]

const Testimonials = () => {
  return (
    <section className='m-auto mt-28 max-w-screen-xl px-8'>
      <div className='flex items-center flex-col lg:flex-row gap-10'>
        <div className='flex-1 order-2 lg:order-1'>
            <h4 className='text-base font-bold text-secondary py-3'>Testimonial</h4>
            <h3 className='text-4xl text-accent font-[400]'>What Our Patients Says</h3>
        </div>
        <img className='max-w-[192px] order-1 lg:order-2' src={quoteImg} alt="" />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 px-12 mt-12'>
        {
          reviews.map((review, index) => (
            <Review key={(index + review.name)} review={review} />
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials
