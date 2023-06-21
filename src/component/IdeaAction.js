import React from 'react'
import styles, { layout } from '../style'
import { bill } from '../assets'
import { vac_stats } from '../constants'

const IdeaAction = ({ header, content, content2 }) => (
  <div className={`${layout.section} flex flex-row mb-5`}>
    <div className={layout.sectionImg}>
      <img src={bill} alt="" />
    </div>
    <div className={layout.sectionInfo}>
      <h1 className={`${styles.heading2} uppercase text-gradient`}>{header}</h1>
      <p className={styles.paragraph}>{content}</p>
      <p className={`${styles.paragraph} mt-4`}>{content2}</p>
      {/* 
      <div className="flex flex-wrap mt-10">
        {vac_stats.map((stat) => (
          <div
            key={stat.id}
            className={`flex flex-1 justify-start items-center flex-row m-3`}
          >
            <div className="flex flex-col">
              <h4 className="font-poppins font-semibold sm:text-[30px] text-[20px] xs:leading[-53px] leading-[43px] text-darkforest">
                {stat.value}
              </h4>
              <p className="font-poppins font-normal sm:text-[17px] text-[15px] xs:leading-[26px] leading-[21px] text-forest uppercase ml-3">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  </div>
)

export default IdeaAction
