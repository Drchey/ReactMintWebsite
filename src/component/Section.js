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
          hasModal={false}
          link={'currency'}
        />
        <Widget
          title="Conventional Security Prints"
          type="security"
          hasModal={true}
        />
        <Widget
          title="Digital Security Solutions"
          type="digital"
          hasModal={true}
        />
      </div>
    </div>
  )
}

export default Section
