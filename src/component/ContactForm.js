import React from 'react'
import { contact_data } from '../constants'
import styles from '../style'

export const Form = () => (
  <div>
    <input
      className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
      type="text"
      placeholder="Enter your Company name"
    />

    <input
      className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
      type="text"
      placeholder="Enter your name"
    />

    <input
      className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
      type="text"
      placeholder="Enter your name"
    />

    <input
      className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
      type="text"
      placeholder="Enter your name"
    />

    <button className="bg-dimForest mt-10 p-1  z-19 h-[60px] px-9 text-white border-none  font-bold">
      Send
    </button>
  </div>
)

const ContactForm = () => (
  <section className="min-h-[100vh] p-[30px] flex flex-wrap align-center justify-center">
    <div className="flex-2">
      <div className="flex-col mt-2">
        {contact_data.map((contact, index) => (
          <div className="shadow-md ring-2 ring-gray-200 h-[100px] mb-5 flex justify-center items-center p-[12px]">
            <div
              className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
            >
              <img
                src={contact.icon}
                alt="icon"
                className="w-[50%] h-[50%] object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-poppins font-semibold text-gray-600 text-[17px] leading-[23px] mb-2">
                {contact.title}
              </h4>
              <p className="font-poppins font-normal text-gray-600 text-[15px] leading-[23px] mb-1">
                {contact.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex-col mt-2 md:ml-4">
        <div className="shadow-md ring-2 ring-gray-200 min-h-[100px] mb-5 flex flex-col justify-start  p-[12px]">
          <h3 className={`${styles.heading2} text-dimForest mb-5`}>
            {' '}
            Send Us A Message!
          </h3>

          <Form />
        </div>
      </div>
    </div>
  </section>
)

export default ContactForm
