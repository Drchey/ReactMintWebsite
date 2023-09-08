import React from 'react'

const Image = ({ logo, alt, lar_obj }) => {
  return (
    <div className="">
      {lar_obj ? (
        <img
          src={logo}
          alt={alt}
          className="w-full h-[100%] object-cover transition ease-in-out duration-500"
        />
      ) : (
        <img
          src={logo}
          alt={alt}
          className="w-full h-[500px] object-contain transition ease-in-out duration-500"
        />
      )}
    </div>
  )
}

export default Image
