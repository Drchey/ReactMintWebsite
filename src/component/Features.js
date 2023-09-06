import React from 'react'
import { Link } from 'react-router-dom'
import {
  cash,
  certificate,
  db,
  feature_img,
  signature,
  smartcard,
  verify,
} from '../assets'
import styles from '../style'

const Features = ({ isVisible }) => {
  return (
    <div
      className={`${styles.flexCenter} flex-col md:flex-row flex-wrap sm:mb-20 mb-6 mt-12 z-10`}
    >
      <div className={`flex-1 flex flex-col ml-3`}>
        <div
          className={` feature-card min-h-[130px] w-[100%] flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src={cash}
              alt="icon"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/currency">
              {' '}
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Currency Prints
              </h4>
            </Link>
            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              We print the Naira for the Nigerian Federation.
            </p>
          </div>
        </div>

        <div
          className={` feature-card min-h-[130px] w-[100%] flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src={db}
              alt="icon"
              className="w-[50%] h-[50%] object-contain"
            />
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

        <div
          className={`feature-card flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] min-h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src={smartcard}
              alt="icon"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/smartcard">
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                SmartCard
              </h4>
            </Link>

            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              Personalized AfriGo cards, Smart Cards, Loyalty Cards and other
              chip-embedded cards.
            </p>
          </div>
        </div>
      </div>
      <div className={`flex-2 sm:block hidden`}>
        <div
          className={`popup-container ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <img
            src={feature_img}
            alt="mint features"
            className="w-[300px] p-2"
          />
        </div>
      </div>

      <div className={`flex-1 flex flex-col ml-3`}>
        <div
          className={` feature-card min-h-[130px] w-[100%] flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src={certificate}
              alt="icon"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/conventional_prints">
              {' '}
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Conventional Security Prints
              </h4>
            </Link>
            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              We print Certificates & Documents for professional bodies,
              commissions and ministries alike.
            </p>
          </div>
        </div>

        <div
          className={` feature-card min-h-[130px] w-[100%] flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src={signature}
              alt="icon"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/digital_prints">
              {' '}
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Digital Prints
              </h4>
            </Link>

            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              Provide a modern and efficient way to authenticate documents and
              add a layer of security to digital files.
            </p>
          </div>
        </div>

        <div
          className={` feature-card min-h-[130px] w-[100%] flex flex-row p-6 rounded-[20px] "mb-6": "mb-0 `}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src={verify}
              alt="icon"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <Link to="/vac">
              {' '}
              <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                Verification & Authentication of Certificates
              </h4>
            </Link>

            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
              Provisioning a Real-time solution for verifying certificates and
              transcripts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
