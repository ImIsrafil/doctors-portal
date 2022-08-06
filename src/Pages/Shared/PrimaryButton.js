import React from 'react'

const PrimaryButton = ({children, type, link, disabled, onClickFunction}) => {
  return (
    <button onClick={onClickFunction} disabled={disabled?disabled:false} type={type?type:""} className="btn border-0 text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
  )
}

export default PrimaryButton
