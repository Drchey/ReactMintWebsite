import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../component'
import { sp1 } from '../assets'

const Partners = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1 ml-4 group">
          <img
            src={sp1}
            alt=""
            className={`${styles.imgCard} h-[50vh] object-cover`}
          />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center my-5 text-forest font-semibold`}
          >
            Building Confidence with Our Valued Partners
          </div>

          <div
            className={`${styles.paragraph} md:text-[20px] text-[16px] md:text-center text-justify  px-5 my-5 font-extralight italic`}
          >
            Over the Past 50 Years, The Nigerian Security Printing & Minting Plc
            has forged enduring bonds with organizations with a foundation of
            transparency, integrity & shared goals. We have taken pride in the
            trust our partners place on us. We continue to collaborate and
            partner with emerging and long-standing institution through
            open-communication, a shared pursuit of excellence & envisioned
            impact in the Nigerian market space.
          </div>
        </div>
      </div>

      <div className="w-full md:px-10 px-4">
        <section className="my-5">
          <h6 className={`${styles.heading3} uppercase`}>
            Transforming Concepts to Visual Prints
          </h6>
          <p className={`${styles.paragraph} text-justify`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa
            ex tempore beatae, perspiciatis iure tempora accusantium incidunt
            commodi, soluta illo quasi maxime ipsum, eos deserunt aliquam odit
            quas quisquam totam non sapiente repudiandae alias? Vero voluptates
            dolor tempora quidem adipisci sint.
          </p>
          <p className={`${styles.paragraph} text-justify mt-3`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa
            ex tempore beatae, perspiciatis iure tempora accusantium incidunt
            commodi, soluta illo quasi maxime ipsum, eos deserunt aliquam odit
            quas quisquam totam non sapiente repudiandae alias? Vero voluptates
            dolor tempora quidem adipisci sint.
          </p>
        </section>

        <section className="my-12 mt-10">
          <h6 className={`${styles.heading3} uppercase`}>Knowledge Sharing</h6>
          <p className={`${styles.paragraph} text-justify`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa
            ex tempore beatae, perspiciatis iure tempora accusantium incidunt
            commodi, soluta illo quasi maxime ipsum, eos deserunt aliquam odit
            quas quisquam totam non sapiente repudiandae alias? Vero voluptates
            dolor tempora quidem adipisci sint.
          </p>
          <p className={`text-justify my-4 ${styles.paragraph}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            corporis quos expedita modi similique labore explicabo quasi
            assumenda, autem ullam minus earum excepturi, aliquid dolores,
            numquam quisquam fugiat? Hic commodi et aspernatur deserunt nulla?
            Officia, tempore illo iure quae iste ad quo consequuntur animi
            voluptates a blanditiis rerum labore aperiam!
          </p>
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

export default Partners
