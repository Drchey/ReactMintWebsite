import React from 'react'
import styles, { layout } from '../style'
import { Footer, Navbar } from '../component'
import { sp1, sp2, sp3_1 } from '../assets'

const SecurityPrints = () => {
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
        <div className="flex-1">
          <hr className="w-[100%] h-[20px] bg-teal-700 p-2" />
          <h2 className={`${styles.heading2} text-gradient uppercase mt-5`}>
            Explore Our Collection of High-Quality Security Prints
          </h2>
          <p className={`${styles.paragraph} mt-2 text-justify p-2`}>
            From Intricate Patterns to cutting-edge features and technologies,
            each print embodies our commitment to bolstering security measures
            and new aesthetics in a blend that are developed to meet and exceed
            the requirements of our customers.
          </p>
        </div>
        <div className="flex-1 ml-4 group">
          <img src={sp1} alt="" className={styles.imgCard} />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center text-forest font-semibold`}
          >
            Crafted to Boost Confidence & Security
          </div>
        </div>
      </div>

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSection} `}>
            <div className={layout.serviceSectionImg}>
              <div className={`slide-left-container group`}>
                <img src={sp2} alt="" className={styles.imgCard} />
              </div>
            </div>
            <div className={layout.serviceSectionInfo}>
              <p
                className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5`}
              >
                Equipped with the Advanced Machinery and team of Skilled and
                Devoted Engineers, we stay ahead of evolving threats by
                consistently innovating our security features. Our R&D teams
                tirelessly explore new technologies, ensuring that our clients
                benefit from the latest advancements in anti-counterfeiting
                solutions. Beyond just protection, our security features are a
                testament to our commitment to maintaining trust in an
                interconnected world.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5`}
              >
                Whether it's secure identification documents, or valuable
                certificates, our printing with security features stands as a
                resolute shield against fraudulent activities. Explore the realm
                where intricate designs marry impenetrable protection, a
                testament to our dedication to fortifying the reliability of
                printed materials in an ever-evolving landscape.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSectionReverse} `}>
            <div className={`w-1/2`}>
              <div className={`slide-left-container group`}>
                <img src={sp3_1} alt="" className={`${styles.imgCard} p-3`} />
              </div>
            </div>
            <div className={`w-1/2`}>
              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                The Nigerian Security Printing & Minting has done lots of
                research with leading experts in the printing field to ensure
                that product workflow is seamless and sustainable. We assure our
                customers of high-end quality prints while ensuring that our
                print process is waste free and sustainable.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                The production process in the security document division usually
                starts with the highly skilled and innovative graphic artists
                who are not only fully conversant with the latest techniques and
                materials to counteract forgery and adulteration, but are aware
                of the current capabilities of criminals. This knowledge
                combined with information on the latest international
                counterfeiting methods enable our designers to continually
                upgrade the security features and materials to ensure that our
                products are constantly ahead of potential counterfeiters. The
                company uses modern local letter-assembly facilities to add the
                require text matter to these designs. The MINT attaches to the
                security and integrity of its products.
              </p>
              {/* 
              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p> */}
            </div>
          </div>
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

export default SecurityPrints
