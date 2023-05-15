import React from 'react'
import { hero } from '../assets'
import styles from '../style'

const Background = () => (
  <section className="md:flex-row flex-col flex  bg-teal-900 mt-5 relative">
    <img src={hero} alt="" className="w-full h-[70vh] object-fit" />
    <div class="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-teal-800 opacity-80">
      <div class="text-white text-center">
        <h1 className={styles.headingTitle}>Contact Us</h1>
        <p className={`${styles.paragraph} text-white mt-4`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel
          minima quod quia repellat cum, vitae odio?
        </p>

        <button className="bg-dimWhite mt-20 p-4 w- z-19[150px] h-[70px] px-9 text-forest cursor-none  border-none  font-bold">
          Contact Us
        </button>
      </div>
    </div>
  </section>
)

export default Background
