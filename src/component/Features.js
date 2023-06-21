import React from 'react'
import { Link } from 'react-router-dom'
import { mint_features } from '../assets'
import styles from '../style'

const Features = ({ isVisible }) => {
  return (
    <div
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-7`}
    >
      <div className={`flex-1`}>
        <div
          className={` feature-card flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img src="" alt="icon" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/currency">
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Currency Prints
              </h4>
            </Link>
            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              ipsa.
            </p>
          </div>
        </div>

        <div
          className={` feature-card flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img src="" alt="icon" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/datacenter">
              {' '}
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Data Center
              </h4>
            </Link>

            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              A primary Data Center with the aim of investing in technology
              infrastructures across the nation.
            </p>
          </div>
        </div>
      </div>
      <div className={`flex-1 sm:block hidden`}>
        <div
          className={`popup-container ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <img src={mint_features} alt="mint features" className="w-[400px]" />
        </div>
      </div>
      <div className={`flex-1`}>
        <div
          className={` feature-card flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img src="" alt="icon" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/vac">
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Verification of Certificates
              </h4>
            </Link>

            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              ipsa.
            </p>
          </div>
        </div>

        <div
          className={` feature-card flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img src="" alt="icon" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/certificates">
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Printed Certificates
              </h4>
            </Link>

            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
