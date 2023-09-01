import React from 'react'

const Image = ({ logo, alt }) => {
  return (
    <div className="">
      <img
        src={logo}
        alt={alt}
        className="w-full h-[500px] object-contain transition ease-in-out duration-500"
      />
    </div>
  )
}

export default Image
