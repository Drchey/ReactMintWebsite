import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../component'
import { lines, partners_nspm } from '../assets'

const Partners = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`w-[100%] flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1 ml-4 group">
          <img
            src={partners_nspm}
            alt=""
            className={`${styles.imgCard} h-[50vh] object-cover`}
          />
        </div>
      </div>

      <div className={`w-[100%] ${styles.paddingY} ${styles.flexCenter}`}>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center my-5 text-forest font-semibold relative`}
          >
            Building Confidence with Our Valued Partners
            <img src={lines} alt="" className="absolute" />
          </div>

          <div
            className={` md:text-[20px] text-[16px]  md:text-center text-justify  px-5 my-5 font-light italic`}
          >
            "Over the Past 50 Years, The Nigerian Security Printing & Minting
            Plc has forged enduring bonds with organizations with a foundation
            of transparency, integrity & shared goals. We have taken pride in
            the trust our partners place on us. We continue to collaborate and
            partner with emerging and long-standing institution through
            open-communication, a shared pursuit of excellence & envisioned
            impact in the Nigerian market space."
          </div>
        </div>
      </div>

      <div className="w-full md:px-10 px-4">
        <section className="my-5">
          <h6 className={`${styles.heading3} uppercase`}>
            Transforming Concepts to Visual Prints
          </h6>
          <p className={`${styles.paragraph} text-justify`}>
            With a seamless blend of innovation and craftsmanship, we take
            abstract ideas and transform them into tangible, intricate currency
            designs that hold both aesthetic beauty and unparalleled security
            features.
          </p>
          <p className={`${styles.paragraph} text-justify mt-3`}>
            Our commitment to customer trust drives us to employ the highest
            standards of security and quality in every banknote we produce. By
            blending innovation with time-honored craftsmanship, we establish a
            bond of reliability with our partners and customers, assuring them
            that their currencies are not just pieces of paper, but
            representations of a strong, trustworthy economy.
          </p>
        </section>

        <section className="my-12 mt-10">
          <h6 className={`${styles.heading3} uppercase`}>Knowledge Sharing</h6>
          <p className={`${styles.paragraph} text-justify`}>
            . In a world where information evolves rapidly, we believe in the
            power of disseminating insights for collective growth. At our core,
            we are not just a company; we are a hub of intellectual exchange.
            With an unwavering commitment to openness, we foster an environment
            where ideas flow freely, transcending boundaries and hierarchies.
          </p>
          <p className={`text-justify my-4 ${styles.paragraph}`}>
            Just as we transform concepts into visual prints, we transform
            knowledge into a dynamic force that fuels evolution. By embracing
            the art of knowledge sharing, we contribute not only to individual
            development but also to the enrichment of industries and societies
            at large.
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
