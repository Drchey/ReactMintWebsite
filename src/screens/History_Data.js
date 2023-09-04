import React from 'react'
import styles, { layout } from '../style'
import { hand, hand_1, mint_building } from '../assets'
import { Footer, Navbar } from '../component'

const HistoryHeader = () => (
  <div
    className={`w-[100%] flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
  >
    <div className="flex-1 ml-4 group">
      <img
        src={mint_building}
        alt=""
        className={`${styles.imgCard} h-[50vh] object-cover`}
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
                  src={hand_1}
                  alt=""
                  className={`${styles.imgCard} h-[60vh] object-contain`}
                />
              </div>
            </div>
            <div className={`w-1/2`}>
              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                The authorized Share Capital of the Company at incorporation in
                1963 was N2,000,000.00 divided into 1,000,000 Ordinary shares of
                N2.00 each. There was an increase in share capital from
                N2,000,000 to N4,000,000 by an addition of 1,000,000 ordinary
                shares of N2.00 each with effect from 14th April, 1977.There was
                an increase in share capital from N4,000,000 to N6,000,000 by
                creation of 1,000,000 ordinary shares of N2.00 each which lasted
                till May 31st, May, 1978.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                An increase in share capital from N9,600,000 to N60,000,000 by
                creation of 50,400,000 ordinary shares of N1.00 each ranking
                <span class="font-semibold"> pari passu </span> with effect from
                1st August, 1988. Then followed an increase in share capital
                from N60,000,000 to N450,000,000 by creation of 390,000,000
                ordinary shares of N1.00 each dated 18th July, 1991. Increase in
                share capital from N450,000,000 to N1,000,000,000 by creation of
                50,000,000 ordinary shares of N1.00 each with effect from 2nd
                August, 1995.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                In the year 2002, September 25th, there was another increase in
                authorized share capital from N1,000,000,000 ordinary shares of
                N1.00 each.
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
                  src={hand}
                  alt=""
                  className={`${styles.imgCard} h-[60vh] object-contain`}
                />
              </div>
            </div>
            <div className={`w-1/2`}>
              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                The ordinary shares were re-classified from ordinary shares of
                N1 each to ordinary shares of 50k each bringing the Authorized
                and issued Share Capital of N8,500,000,000 divided into
                8,500,000,000 ordinary shares of N1.00 each, into 17,000,000,000
                ordinary shares of 50kobo each with effect from 22nd November,
                2002.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                The authorized Share Capital of N8,500,000,000 was increased to
                N17,100,000,000 by the addition of N8,600,000,000 though the
                creation of 17,200,000,000 ordinary shares of 50kobo each
                ranking pari passu in all respects with the existing ordinary
                shares of the Company” with effect from 23rd October, 2008, thus
                bringing the ordinary shares of 34,100,000,000 ordinary shares
                of 50k each. The existing authorized Share Capital of the
                Company of N17,100,000,00.00 was increased to N30,000,000,000.00
                by the creation of 25,800,000,000.00 ordinary shares of 50kobo
                each with effect from 8th December, 2010, bringing the total
                ordinary shares to 60 billion shares of 50,000 each.
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
