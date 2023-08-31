import React from 'react'
import styles, { layout } from '../style'
import { g_2 } from '../assets'

const ProductAbout = ({ title, content }) => (
  <div className={`${layout.section} flex flex-row`}>
    <div className={`${layout.sectionImg} relative`}>
      <h1 className={styles.heading2}>
        {/* {' " '} The Ultimate Solution for
        <br className="sm:block hidden" /> for Credential Verification {' " '} */}
        {' " '} {title} {' " '}
      </h1>
    </div>
    <div className={`${layout.sectionInfo} relative`}>
      <img
        src={g_2}
        alt=""
        className="absolute top-0 right-0 opacity-60 w-full space-x-12 transform -rotate-75 "
      />
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        {content}
      </p>
    </div>
  </div>
)

export default ProductAbout
