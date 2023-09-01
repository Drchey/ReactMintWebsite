import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../style'
import { close, star } from '../assets'
import {
  conventional_division,
  digital_division,
  physical_division,
} from '../constants'
export const Modal = ({ isOpen, toggleModal1, toggleModal2, title }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 h-[40vh] ">
        <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="modal-container fixed inset-0 flex items-center justify-center">
          <div className="modal-content bg-white w-3/4 rounded shadow-lg p-4 overflow-y-scroll h-[640px]">
            <div className="flex align-center justify-around my-4">
              <h3 className={styles.heading3}>{title}</h3>
              <img
                className="cursor-pointer"
                src={close}
                onClick={toggleModal1 ? toggleModal1 : toggleModal2}
                alt="close"
              />
            </div>

            <hr />

            {title === 'Conventional Security Prints' ? (
              <div className="mt-5 w-full">
                {conventional_division.map((divisionIndex, index) => (
                  <div key={index}>
                    {divisionIndex.links.map((link, index) => (
                      <span>
                        <div
                          className={` feature-card flex sm:flex-row flex-col p-6 rounded-[20px] "mb-6": "mb-0`}
                        >
                          <div
                            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue  sm:flex hidden`}
                          >
                            <img
                              src={star}
                              alt="i6on"
                              className="w-[50%] h-[50%] object-contain"
                            />
                          </div>
                          <div className="flex-1 flex flex-col ml-3">
                            {' '}
                            <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                              {link.name}
                            </h4>
                            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
                              {link.content}
                            </p>
                          </div>
                        </div>{' '}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}

            {title === 'Digital Print Solutions' ? (
              <div className="mt-5 w-full">
                {physical_division.map((divisionIndex, index) => (
                  <div key={index}>
                    {divisionIndex.links.map((link, index) => (
                      <span>
                        <div
                          className={` feature-card flex sm:flex-row flex-col p-6 rounded-[20px] "mb-6": "mb-0`}
                        >
                          <div
                            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue  sm:flex hidden`}
                          >
                            <img
                              src={star}
                              alt="i6on"
                              className="w-[50%] h-[50%] object-contain"
                            />
                          </div>
                          <div className="flex-1 flex flex-col ml-3">
                            {' '}
                            <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                              {link.name}
                            </h4>
                            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
                              {link.content}
                            </p>
                          </div>
                        </div>{' '}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}

            {title === 'Digital Security Offerings' ? (
              <div className="mt-5 w-full">
                {digital_division.map((divisionIndex, index) => (
                  <div key={index}>
                    {divisionIndex.links.map((link, index) => (
                      <span>
                        <div
                          className={` feature-card flex sm:flex-row flex-col p-6 rounded-[20px] "mb-6": "mb-0`}
                        >
                          <div
                            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue  sm:flex hidden`}
                          >
                            <img
                              src={star}
                              alt="i6on"
                              className="w-[50%] h-[50%] object-contain"
                            />
                          </div>
                          <div className="flex-1 flex flex-col ml-3">
                            {' '}
                            <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
                              {link.name}
                            </h4>
                            <p className="font-poppins font-normal text-teal-850 text-[16px] leading-[23px] mb-1">
                              {link.content}
                            </p>
                          </div>
                        </div>{' '}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  )
}

const Widget = ({ title, info, hasModal, link, type, image }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal1 = () => {
    setIsOpen(!isOpen)
  }

  const toggleModal2 = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="feature-card p-6 sm:mx-1  mx-0x h-[500px] rounded-[20px] item-center justify-center flex flex-col  ease-in duration-400">
      <div className="flex relative h-auto">
        <div className="relative item-center h-auto w-full rounded">
          <img src={image} className="object-fit h-[300px]  my-1" alt="" />
          <div className="absolute inset-0 bg-gray-700 hover:bg-gray-800 duration-300 opacity-50"></div>
        </div>

        <p className="absolute bottom-5 p-3 text-white font-semibold text-[20px]">
          {title}
        </p>
      </div>
      <div className="flex-2 ">
        <p className={`${styles.paragraph} mb-5`}>{info}</p>

        {!hasModal ? (
          <Link
            to={`/${link}`}
            className=" border-none cursor-pointer bg-dimForest py-3 px-6  rounded-[5px] font-semibold text-white"
          >
            View
          </Link>
        ) : (
          <span
            onClick={type === 'security' ? toggleModal1 : toggleModal2}
            className=" border-none cursor-pointer bg-dimForest py-3 px-6  rounded-[5px] font-semibold text-white"
          >
            View
          </span>
        )}
        <Modal
          isOpen={isOpen}
          title={title}
          toggleModal1={toggleModal1}
          toggleModal2={toggleModal2}
        />
      </div>
    </div>
  )
}

export default Widget
