import React from 'react'
import Widget from './Widget'
import { d_conventional, d_offering, d_print } from '../assets'

const Section = () => {
  return (
    <div className="my-9" id="division">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-dimForest text-[25px] font-semibold">
          OUR SECURED PRODUCT OFFERINGS
        </h2>
        <p className="text-gray-600 text-[20px] text-center w-[70%]">
          With a vision and a collaborative spirit, our offerings synergize to
          create a holistic approach to address mechanical and chemical
          tampering, counterfeiting, and forgery while seizing opportunities in
          the market space.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between  ">
        {/* <Widget
          title="Currency Production"
          image={division_1}
          info="We print the Nigerian Currency (Naira) on behalf of the Nigerian Central Bank."
          hasModal={false}
          link={'currency'}
        /> */}

        <Widget
          title="Conventional Security Prints"
          image={d_conventional}
          info="Products are conventional in nature and do not include service offerings and not digital for instance Certificates."
          type="security"
          hasModal={true}
        />

        <Widget
          title="Digital Print Solutions"
          image={d_print}
          info="Printed security solutions that are physical in nature and also have digital products for instance QR Codes."
          type="security"
          hasModal={true}
        />
        <Widget
          title="Digital Security Offerings"
          image={d_offering}
          info="Security Solutions that may not produce any physically printed documents/materials but offers services."
          type="digital"
          hasModal={true}
        />
      </div>
    </div>
  )
}

export default Section
