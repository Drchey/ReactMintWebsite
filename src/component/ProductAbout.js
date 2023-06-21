import React from 'react'
import styles, { layout } from '../style'

const ProductAbout = ({ title, content }) => (
  <div className={`${layout.section} flex flex-row`}>
    <div className={layout.sectionImg}>
      <h1 className={styles.heading2}>
        {/* {' " '} The Ultimate Solution for
        <br className="sm:block hidden" /> for Credential Verification {' " '} */}
        {' " '} {title} {' " '}
      </h1>
    </div>
    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        {content}
      </p>
    </div>
  </div>
)

export default ProductAbout
