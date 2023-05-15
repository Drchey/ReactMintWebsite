import React from 'react'
import styles, { layout } from '../style'

const ProductAbout = () => (
  <div className={`${layout.section} flex flex-row`}>
    <div className={layout.sectionImg}>
      <h1 className={styles.heading2}>
        {' " '} The Ultimate Solution for
        <br className="sm:block hidden" /> for Credential Verification {' " '}
      </h1>
    </div>
    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        assumenda dolor nulla iusto ad error reprehenderit ut officiis delectus
        odio natus mollitia nam ipsa itaque suscipit necessitatibus in
        praesentium. Vero?
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        assumenda dolor nulla iusto ad error reprehenderit ut officiis delectus
        odio natus mollitia nam ipsa itaque suscipit necessitatibus in
        praesentium. Vero?
      </p>
    </div>
  </div>
)

export default ProductAbout
