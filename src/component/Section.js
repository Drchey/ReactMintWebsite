import React from 'react'
import Widget from './Widget'

const Section = () => {
  return (
    <div className="my-9" id="division">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-dimForest text-[25px] font-semibold">
          OUR DIVISIONS
        </h2>
        <p className="text-gray-600 text-[20px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sed
          reiciendis unde quis odit!
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between  ">
        <Widget
          title="Currency Production"
          info="We print the Nigerian Currency (Naira) on behalf of the Nigerian Central Bank."
          hasModal={false}
          link={'currency'}
        />
        <Widget
          title="Conventional Security Prints"
          info="Stamps, Labels, Certificates, Real Estate Documents, Shipping Documents etc ."
          type="security"
          hasModal={true}
        />
        <Widget
          title="Digital Security Solutions"
          info="Advanced Security Features on Digitalized Certificates, Identity Management Solutions, QR codes among others."
          type="digital"
          hasModal={true}
        />
      </div>
    </div>
  )
}

export default Section
