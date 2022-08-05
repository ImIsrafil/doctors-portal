import React from 'react'
import InfoCard from './InfoCard';
import clockImg from '../../assets/icons/clock.svg';
import markerImg from '../../assets/icons/marker.svg';
import phoneImg from '../../assets/icons/phone.svg';

const infoCardsDesc = [
  {
    name: 'time',
    title: 'Opening Hours',
    desc: '08:00 AM - 08:00 PM'
  },
  {
    name: 'location',
    title: 'Visit Our Location',
    desc: 'Brooklyn, NY-10036, United States'
  },
  {
    name: 'phone',
    title: 'Contact Us',
    desc: '+000 1237473'
  }
]

const Info = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-8 max-w-screen-xl m-auto'>
      <InfoCard infoCardsDesc={infoCardsDesc[0].name === 'time'?infoCardsDesc[0]: {}} img={clockImg} bgColorClass={"bg-gradient-to-l from-primary to-secondary"} />
      <InfoCard infoCardsDesc={infoCardsDesc[1].name === 'location'?infoCardsDesc[1]: {}} img={markerImg} bgColorClass={"bg-accent"} />
      <InfoCard infoCardsDesc={infoCardsDesc[2].name === 'phone'?infoCardsDesc[2]: {}} img={phoneImg} bgColorClass={"bg-gradient-to-l from-primary to-secondary"} />
    </div>
  )
}

export default Info
