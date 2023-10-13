import React, { useRef, useState } from 'react'
import { contact_data } from '../constants'
import styles from '../style'
import { mint_building, qrcode, send } from '../assets'
import Swal from 'sweetalert'
import SurveyModal from './SurveyModal'
import emailjs from '@emailjs/browser'

export const Form = () => {
  const form = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_type: '',
    message: '',
  })

  // const [formErrors, setFormErrors] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userName = form.current['user_name'].value
    const userEmail = form.current['user_email'].value
    const company_type = form.current['company_type'].value
    const message = form.current['message'].value

    if (
      !userName.trim() ||
      !userEmail.trim() ||
      !company_type.trim() ||
      !message()
    ) {
      alert('Please fill out all required fields.')
      return
    }
    emailjs
      .sendForm(
        'service_4y2gp3k',
        'template_dic5jo4',
        form.current,
        'lmLeSVsssYM6TLFcj',
      )
      .then(
        (result) => {
          Swal(
            'Email Sent',
            'We have Taken in your Feedback. Thank You',
            'success',
          )
        },
        (error) => {
          Swal(
            'Email Not Sent',
            'We could not receive your email at this time',
            'warning',
          )
        },
      )
  }
  return (
    <div>
      <form
        id="contact-form"
        ref={form}
        className="w-[100%] mx-auto p-6"
        action="/contact"
        method="GET"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
          type="text"
          placeholder="Enter your Company name"
          id="name"
          name="user_name"
          // value={formData.name}
          onChange={handleInputChange}
          required
        />

        <input
          className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
          type="email"
          placeholder="Enter your Company's Email: Help Us Reach back to you"
          id="email"
          name="user_email"
          // value={formData.name}
          onChange={handleInputChange}
          required
        />

        <select
          id="name"
          name="company_type"
          value={formData.company_type}
          onChange={handleInputChange}
          className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
          required
        >
          <option value="" className="">
            Choose ...
          </option>
          <option value="Government_Agency" className="">
            Government Agencies
          </option>
          <option value="Academic_Institution" className="">
            Academic Institution
          </option>
          <option value="Security_Agency" className="">
            Security Agency
          </option>
          <option value="Financial_Institution" className="">
            Financial Institution
          </option>

          <option value="Manufacturing_Agency" className="">
            Manufacturing
          </option>
        </select>

        <textarea
          id="name"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          cols="10"
          rows="10"
          className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
          placeholder="Tell Us How we Can Serve You"
          required
        ></textarea>

        <button
          className="bg-dimForest mt-10 p-1  z-19 h-[60px] px-9 text-white border-none  font-bold"
          onClick={handleSubmit}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <section className="min-h-[100vh] p-[30px] flex flex-wrap align-center justify-center">
      <div className="flex-2">
        <div className="flex-col mt-2">
          {contact_data.map((contact, index) => (
            <div
              key={index}
              className="shadow-md ring-2 ring-gray-200 min-h-[100px] mb-5 flex justify-center items-center p-[12px]"
            >
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

                {contact.is_both ? (
                  <div>
                    <div>
                      <h6 className="font-semibold  text-gray-500 ">
                        Lagos Office:
                      </h6>
                      <p className="font-light">{contact.lagos_office}</p>
                    </div>

                    <div>
                      <h6 className="font-semibold  text-gray-500 ">
                        Abuja Office:
                      </h6>
                      <p className="font-light">{contact.abuja_office}</p>
                    </div>
                  </div>
                ) : (
                  <p className="font-poppins font-normal text-gray-600 text-[15px] leading-[23px] mb-1">
                    {contact.content}
                  </p>
                )}
              </div>
            </div>
          ))}

        

        
          <a href='https://forms.office.com/Pages/ShareFormPage.aspx?id=eDR5K6myeEiPKBYgnjpSrtdiAZvHeApGuiXDR91rje1UM1ZPS0Y3TklTSVpaNDlHUks1Q0pQSTVCNy4u&sharetoken=YYOP6IwjIKMPI2KDRy4j' target='_blank'> 
             <div className='className="shadow-md p-3 ring-2 ring-teal-800 hover:bg-teal-100 transition duration-100 ease-in-out h-[100px] mb-5 flex justify-center items-center p-[12px]"'>
            <div
              className={`w-[64px] h-[64px] rounded-full border-orange-4 ${styles.flexCenter} bg-dimBlue `}
            >
              <img
                src={send}
                alt="icon"
                className="w-[50%] h-[50%] object-contain "
              />
            </div>
            <div
              className="flex-1 flex flex-col ml-3 cursor-pointer"
              
            >
              <h4 className="font-poppins font-semibold  text-gray-600 text-[17px] leading-[23px] mb-2">
                Fill In Our Survey Form
              </h4>
              <p className="font-poppins font-normal text-gray-600 text-[15px] leading-[23px] mb-1">
                Help Us to Help You
              </p>
            </div>

            <SurveyModal isOpen={isOpen} toggleModal={toggleModal} />
          </div>
          </a>  
        </div>

        <div>
          <img src={qrcode} alt="" height="100px" className='sm:block hidden h-[400px]' />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-col mt-2 md:ml-4">
          <div className="shadow-md ring-2 ring-gray-200 min-h-[100px] mb-5 flex flex-col justify-start  p-[12px]">
            <div className="mb-5">
              <h3 className={`${styles.heading2} text-dimForest `}>
                {' '}
                Send Us A Message!
              </h3>
              <p className={`${styles.paragraph} text-gray-500`}>
                How may we assist You
              </p>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
