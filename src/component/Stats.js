import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-7`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-1 justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] xs:leading[-53px] leading-[43px] text-darkforest">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal sm:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-forest uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
)
export default Stats
