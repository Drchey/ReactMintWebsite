import React from 'react'
import styles, { layout } from '../style'

const IdeaAction = ({
  header,
  header_2,
  content,
  content2,
  image_type,
  isInit,
  is_vac,
}) => (
  <div className={`${layout.section} flex flex-row mb-5`}>
    {/* <h4 className={`${styles.heading2} uppercase text-gradient text-left`}>
      {header_2}
    </h4> */}

    <div className={`${layout.sectionInfo} text-justify`}>
      <h1 className={`${styles.heading2} uppercase text-gradient`}>{header}</h1>
      <p className={styles.paragraph}>{content}</p>
      <p className={`${styles.paragraph} mt-4`}>{content2}</p>
    </div>
  </div>
)

export default IdeaAction
