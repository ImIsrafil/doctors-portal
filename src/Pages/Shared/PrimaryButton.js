import React from 'react'

const PrimaryButton = ({children, type, link}) => {
  return (
    <button type={type?type:""} className="btn border-0 text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
  )
}

export default PrimaryButton
