import React, { useState } from 'react'
import { Footer, Navbar } from '../component'
import styles from '../style'
import { lagosquarters } from '../assets'
import { history, past_exec } from '../constants'

export const OverTheYears = () => {
  return (
    <div className="flex flex-col flex-1 px-6 ">
      {history.map((history, i) => (
        <div className="" key={history.id}>
          <div className="flex my-5">
            <div className="flex flex-col items-start justify-start">
              <img
                src={history.header_logo}
                className="object-fit h-[200px] w-[200px] rounded"
                alt=""
              />
              <div className={`${styles.paragraph} text-gray-700`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam aspernatur provident ad aperiam dolore. Repellendus
                ullam velit odit fugiat? Harum.
              </div>
            </div>
            <div className="">
              <h2 className={`${styles.heading2} text-orange-500`}>
                {history.year}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const PastExec = () => {
  return (
    <div className="flex flex-col flex-1 px-6 ">
      {past_exec.map((past, i) => (
        <div className="" key={past.id}>
          <div className="flex my-5">
            <div className="flex flex-col items-start justify-start">
              <img
                src={past.header_logo}
                className="object-fit h-[200px] w-[200px] rounded"
                alt=""
              />
              <div className={`${styles.paragraph} text-gray-700`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam aspernatur provident ad aperiam dolore. Repellendus
                ullam velit odit fugiat? Harum.
              </div>
            </div>
            <div className="">
              <h2 className={`${styles.heading2} text-orange-500`}>
                {past.year}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const TabSlider = () => {
  const [activeTab, setActiveTab] = useState(1)

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex)
  }
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <button
          className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-orange-300`}
          onClick={() => changeTab(1)}
        >
          <h3
            className={`${styles.heading3}transition delay-150 ease-in-out  hover:text-[48px]`}
          >
            Currency
          </h3>
        </button>
        <button
          className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-orange-300`}
          onClick={() => changeTab(2)}
        >
          <h3
            className={`${styles.heading3}transition delay-150 ease-in  hover:text-[48px] `}
          >
            Executives
          </h3>
        </button>
      </div>
      <div className="mt-4">
        <div id="tab1" className={`p-4 ${activeTab !== 1 ? 'hidden' : ''}`}>
          <div className="flex md:flex-row flex-col items-center justify-around w-full">
            <OverTheYears />

            <OverTheYears />
          </div>
        </div>
        <div id="tab2" className={`p-4 ${activeTab !== 2 ? 'hidden' : ''}`}>
          {/* Content for Tab 2 */}
          <div className="flex md:flex-row flex-col items-center justify-around w-full">
            <PastExec />
            <PastExec />
          </div>
        </div>
      </div>
    </div>
  )
}

const History = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1">
          <hr className="w-[100%] h-[20px] bg-teal-700 p-2" />
          <h2 className={`${styles.headingTitle} text-gradient uppercase mt-5`}>
            Discover The History of <br /> The Nigerian Mint
          </h2>
          <p className={`${styles.paragraph} mt-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo error omnis voluptatum, doloremque quisquam placeat harum
            fugit architecto at.
          </p>
        </div>
        <div className="flex-1 ml-4">
          <img src={lagosquarters} alt="" className="w-full" />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className={styles.paragraph}>
            The Nigerian Mint Came to Existence since
          </div>
          <div
            className={`${styles.paragraph} font-weight-700 text-[40px]  text-gradient font-bold`}
          >
            1963
          </div>
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}
      >
        <TabSlider />
      </div>
      <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default History
