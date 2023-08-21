import React from 'react'
import Widget from './Widget'
import { division_1, division_2, division_3 } from '../assets'

const Section = () => {
  return (
    <div className="my-9" id="division">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-dimForest text-[25px] font-semibold">
          OUR DIVISIONS
        </h2>
        <p className="text-gray-600 text-[20px]">
          With a vision and a collaborative spirit, our divisions synergize to
          create a holistic approach to addressing challenges and seizing
          opportunities.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between  ">
        <Widget
          title="Currency Production"
          image={division_1}
          info="We print the Nigerian Currency (Naira) on behalf of the Nigerian Central Bank."
          hasModal={false}
          link={'currency'}
        />
        <Widget
          title="Conventional Security Prints"
          image={division_2}
          info="Stamps, Labels, Certificates, Real Estate Documents, Shipping Documents etc ."
          type="security"
          hasModal={true}
        />
        <Widget
          title="Digital Security Solutions"
          image={division_3}
          info="Security Features on Digitalized Certificates, Identity Solutions, QR codes etc."
          type="digital"
          hasModal={true}
        />
      </div>
    </div>
  )
}

export default Section
