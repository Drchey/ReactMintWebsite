import React from 'react'

const Image = ({ logo, alt }) => {
  return (
    <div>
      <img src={logo} alt={alt} className="w-full h-[300px] object-cover" />
    </div>
  )
}

export default Image
