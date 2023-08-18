import React from 'react'
import { Footer, Navbar } from '../component'
import styles, { layout } from '../style'
import { cp_2, cp_3, mint_building } from '../assets'

const CurrencyPrints = () => {
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
            src={mint_building}
            alt=""
            className={`${styles.imgCard} h-[89%]`}
          />
        </div>

        <div className="flex-1 px-3">
          <hr className="w-[100%] h-[20px] bg-teal-700 p-2" />
          <h2 className={`${styles.heading2} text-gradient uppercase mt-5`}>
            Celebrating the Art & Precision of our Currency Minting
          </h2>
          <p className={`${styles.paragraph} mt-2 text-justify p-2`}>
            SInce our emergence to the Nigerian Market in the year 1965, we have
            since been the gemstone of artistry and precision giving value of
            the Naira Currency. We have ensured that the Nigerian History and
            Culture is meet with state-of-the-art techniques that ensure the
            security and authenticity symbolizing the country's wealth and
            value.
          </p>
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center text-forest font-semibold`}
          >
            Crafting Currency with Mastery & Exactitude
          </div>
        </div>
      </div>

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSection} `}>
            <div className={`w-1/2`}>
              <div className={`slide-left-container group`}>
                <img src={cp_2} alt="" className={styles.imgCard} />
              </div>
            </div>
            <div className={`w-1/2`}>
              <p
                className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5`}
              >
                Our banknote facilities are a testament to our commitment to
                technological advancement and the safeguarding of economies.
                Utilizing the latest printing techniques, we create currency
                notes that are not only visually captivating but also
                exceptionally resistant to counterfeiting. Our dedicated teams
                of experts ensure that every banknote leaving our facilities
                meets the stringent standards of authenticity and integrity.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5`}
              >
                At the heart of our facilities lies a fusion of innovation and
                tradition. Our engraving techniques, color mastery, and
                intricate designs capture the essence of cultural heritage while
                staying ahead of emerging threats in currency security. From
                holographic features to microprinting, we employ a range of
                security measures to ensure the trustworthiness of the currency
                we produce.
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
                <img src={cp_3} alt="" className={`${styles.imgCard} px-4`} />
              </div>
            </div>
            <div className={`w-1/2`}>
              <p className={`${styles.paragraph} text-justify max-w-full my-5`}>
                The banknotes production facilities consist of the most
                up-to-date machines available in the industry. Our high-tech
                electronically controlled machines, sophisticated inks and
                highly skilled personnel all go to show that we keep pace with
                the most current trend in the industry world-wide.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                To support our operations and satisfy our clients’ individual
                demands, The MINT manufactures its offset and intaglio printing
                plates here in Nigeria while the sophisticated production
                machines and key raw materials are imported from diversified but
                highly reliable dealers overseas.
              </p>
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

export default CurrencyPrints
