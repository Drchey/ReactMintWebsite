import React from 'react'
import styles from '../style'

const HistoryBackground = ({
  img,
  classImg,
  classContext,
  classBtn,
  context,
  btn,
  title,
}) => {
  return (
    <section className="md:flex-row flex-col flex  bg-teal-900 mt-5 relative">
      <img src={img} alt="" className={classImg} />
      <div className={classContext}>
        <p className={`${styles.headingTitle2} text-teal-900`}>History</p>
        <p className={`${styles.headingTitle2} text-teal-900`}>&</p>
        <p className={`${styles.headingTitle2} text-teal-900 `}>Future</p>
      </div>
    </section>
  )
}

export default HistoryBackground
