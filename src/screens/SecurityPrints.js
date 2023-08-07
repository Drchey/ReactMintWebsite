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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSectionReverse} `}>
            <div className={layout.serviceSectionImg}>
              <div className={`slide-left-container group`}>
                <img src={sp3_1} alt="" className={styles.imgCard} />
              </div>
            </div>
            <div className={layout.serviceSectionInfo}>
              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae beatae fugit dolorum ipsam possimus, voluptate ratione
                aperiam, ipsa officia fugiat et voluptatum doloremque nobis.
                Facere nihil magni velit ex.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={`${layout.serviceSection} px-2 my-5 `}>
        <div className={`${styles.paragraph} text-justify mx-2 my-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet eum
          deleniti rem, possimus sit voluptatibus nemo accusantium id animi eius
          error sed reprehenderit a omnis, laudantium itaque veritatis tempora.
        </div>

        <div className={`${styles.paragraph} mx-2 text-justify my-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet eum
          deleniti rem, possimus sit voluptatibus nemo accusantium id animi eius
          error sed reprehenderit a omnis, laudantium itaque veritatis tempora.
        </div>
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
