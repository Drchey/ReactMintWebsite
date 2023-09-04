import React from 'react'
import { Footer, Navbar } from '../component'
import styles from '../style'
import { g_5, star, values } from '../assets'
import { features } from '../constants'

const FeatureCard = ({ title, content, index }) => (
  <div
    className={` sd-card flex flex-row p-6 rounded-[20px] items-center w-[80%] ${
      index !== features.length - 1
    } ? "mb-6": "mb-0 `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
    >
      <img src={star} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-700 text-[18px] text-justify leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Values = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`w-[100%] flex md:flex-row flex-col flex-1 align-items pt-5 justify-between items-center ${styles.paddingX}`}
      >
        <div className="flex-1 ml-4 group">
          <img
            src={values}
            alt=""
            className={`${styles.imgCard} h-[50vh] object-cover`}
          />
        </div>
      </div>

      <div className={`w-[100%]`}>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[39px] text-center my-5 text-forest font-semibold `}
          >
            Our Core Values
          </div>

          <div
            className={` md:text-[20px] text-[16px]  md:text-center text-center  px-5 my-2 font-light italic`}
          >
            "With collaboration as the cornerstone of our excellence, we are
            propelled towards ensuring that we deliver the highest quality in
            all that we do. These core values not only define who we are but
            also inspire us to continually push the boundaries of what's
            possible while staying true to our mission and vision."
          </div>
        </div>
      </div>

      <div className="w-full md:px-10 px-4 relative">
        <img src={g_5} alt="" className="absolute top-0 z-[-1]" />

        <section className="my-2">
          <h2 className={`uppercase text-[20px] font-bold text-red-600 my-1`}>
            OUR MISSION STATEMENT
          </h2>
          <p className={`${styles.paragraph} text-justify my-4`}>
            To Be Passionate In Delighting Customers by Providing Innovative &
            Superior Security Solutions For The Benefit of Stakeholders.
          </p>
        </section>

        <section className="my-4">
          <h5 className={`uppercase text-[20px] font-bold text-red-600 my-1`}>
            OUR VISION
          </h5>
          <p className={`${styles.paragraph} text-justify mt-4`}>
            To be the Leading Provider of Conventional & Digital Security
            Solutions.
          </p>
        </section>

        <section className="my-10">
          <h5 className={`uppercase text-[20px] font-bold text-gray-600 my-1`}>
            OUR VALUES AS A COMPANY
          </h5>
          <div>
            <FeatureCard
              title={`Customer-Centric Culture`}
              content={`Customer Satisfaction is our core focus and as service providers, It is a must that each customer is guaranteed a positive experience.`}
            />
            <FeatureCard
              title={`Integrity`}
              content={`We adhere to the our Moral and Ethical principles ensuring that each staff  is  treated with equity. This is reflected in our work relationship with stakeholders.`}
            />

            <FeatureCard
              title={`TeamWork`}
              content={`We work together a team. Ensuring that our output meet and exceeds the requirements of our valued customers.`}
            />

            <FeatureCard
              title={`Innovation`}
              content={`We thrive towards seeking out new methods, products, services & strategies that would make us more efficient and provide us with a competitive edge.`}
            />

            <FeatureCard
              title={`Efficiency`}
              content={`We make best use of human & material resources to boost efficiency, avoid waste & increase output speed.`}
            />

            <FeatureCard
              title={`Sustainability`}
              content={`We must always think of a better tomorrow.Hence, we take strategic and futuristic approach in all our decision making. For us and for the environment`}
            />
          </div>
        </section>
      </div>
      <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Values
