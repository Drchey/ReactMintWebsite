import { boards } from '../constants'
import styles from '../style'
import Footer from './Footer'
import Navbar from './Navbar'
import { info, lines } from '../assets'
// import { useState } from 'react'

const Team = () => {
  // const [popupcontent, setPopUpContent] = useState('')
  // const [showPopUp, setShowPopUp] = useState(false)

  // const showPopUpContent = () => {
  //   setShowPopup(true);

  // }

  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-dimWhite  ${styles.flexStart}`}>
        <div className="flex flex-col relative">
          <img
            src={lines}
            className="opacity-100 absolute top-0 left-0"
            alt=""
          />
          <h2
            className={`${styles.heading2} text-center uppercase mt-3 text-gray-500 md:text-[35px] text-[24px]`}
          >
            Meet Our Board
          </h2>

          <p className={`${styles.paragraph} text-center  font-bold`}>
            Our Leaders responsible for providing the overall strategic
            direction for the company.
          </p>
        </div>
      </div>
      <div className={`bg-dimWhite justify-center items-start mt-9`}>
        <div className="p-6">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 cursor-pointer ">
            {boards.map((board, index) => (
              <div
                id={index}
                key={index}
                className="flex flex-col items-center justify-between mb-5 rounded-[20px] relative"
              >
                <img
                  src={board.logo}
                  alt=""
                  className="h-[260px] w-[260px] border-4 rounded-[50%] object-cover mb-5 border-teal-900"
                />
                <div className="flex flex-col items-center">
                  <p className="font-bold text-[20px] text-teal-800">
                    {board.name}
                  </p>

                  <p className="font-bold text-[14px] text-teal-800 uppercase text-center">
                    {board.title}
                  </p>
                  <p className="font-bold text-[14px] text-teal-800 uppercase text-center">
                    {board.is_cbn ? 'CBN' : 'NSPM PLC'}
                  </p>
                </div>

                {/* <div className="absolute top-0 right-0">
                  <img
                    src={info}
                    className="h-[20px] hover:h-[21px] ease-in-out transition-all duration-300"
                    alt="information"
                    // onClick={() => showPopUp}
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`bg-dimForest mt-[70px] ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Team
