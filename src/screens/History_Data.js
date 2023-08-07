import React from 'react'
import styles, { layout } from '../style'
import { hero, sharedc1, sharedc2 } from '../assets'
import { Footer, Navbar } from '../component'

const HistoryHeader = () => (
  <div className={`bg-dimWhite  ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <img
        src={hero}
        className={`w-full h-[55vh] object-center object-fit object-fill`}
        alt=""
      />
    </div>
  </div>
)

const HistoryIntro = ({ title, context }) => (
  <div className={`flex flex-col items-center px-7 justify-center my-10`}>
    <h1
      className={`font-semibold space-x-3 text-forest text-center text-[30px] font-poppins p-2 my-8`}
    >
      {title}
    </h1>
    <p className="text-center italic text-[21px] font-light">{context}</p>
  </div>
)

const HistoryData = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <HistoryHeader />
      <HistoryIntro
        title="Unveiling Our Holding Structure from Inception to Date"
        context="
        From its Humbling Inception to Date, we showcase our changing corporate structure reflecting our unwavering commitment to adaptation which has led us to our current position in the Nigerian market. Through this our remarkable path, our foundation has become stronger and  this has reflected in our processes.Join us on this captivating journey of transformation, as we showcase our transformative journey that has shaped our organizational identity and direction over time.  
      "
      />

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSectionReverse} `}>
            <div className={`w-1/2`}>
              <div className={`slide-left-container group`}>
                <img
                  src={sharedc2}
                  alt=""
                  className={`${styles.imgCard} h-[60vh] object-contain`}
                />
              </div>
            </div>
            <div className={`w-1/2`}>
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

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSection} `}>
            <div className={`w-1/2`}>
              <div className={`slide-left-container group`}>
                <img
                  src={sharedc1}
                  alt=""
                  className={`${styles.imgCard} h-[60vh] object-contain`}
                />
              </div>
            </div>
            <div className={`w-1/2`}>
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

      <div
        className={`bg-dimForest mt-12 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HistoryData
