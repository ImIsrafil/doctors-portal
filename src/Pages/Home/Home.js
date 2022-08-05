import React from 'react'
import Footer from '../Shared/Footer'
import AppointmentReview from './AppointmentReview'
import Banner from './Banner'
import ContactUs from './ContactUs'
import Info from './Info'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services></Services>
      <AppointmentReview />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
