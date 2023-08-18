import React from 'react'
import { Footer, Navbar, Testimonial } from '../component'
import styles, { layout } from '../style'
import { cbn_building, hand, hand_1, sharedc1, sharedc2 } from '../assets'

const HistoryHeader = () => (
  <div className={`bg-dimWhite  ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <img
        src={cbn_building}
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

const StructureData = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <HistoryHeader />
      <HistoryIntro
        title=" Tracing the History of Collective Investment and Collaboration"
        context="
          Shared Capital, doesn't only signify the financial contributions but also the collective belief in 
          the NSPM Plc's Businesses and Ventures. From Inception to date,
           the financial synergy and contribution among exterior companies has
            been the cornerstone of our growth and has been a catalyst towards 
            our continuous transformation as a company in the Nigerian Space.
          "
      />

      <div className={layout.serviceSection}>
        <section className={`${layout.serviceSection}`}>
          <div className={`${layout.serviceSectionReverse} `}>
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
                At inception, the NSPM Plc had an authorized share capital base
                of two hundred thousand pounds divided into 100,000 ordinary
                shares of 2.00 pounds each with The Ministry of Finance
                Incoporated (MOFI) with 55%, Thomas De La Rue International
                Limited (TDLR) owning 40% and the Central Bank of Nigeria (CBN)
                with 5%.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                In 1973, the joint venture agreement was reviewed, resulting in
                the following shareholding structure, which was maintained with
                MOFI owning 55%,TDLR owning 25% and the CBN owning 20%.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                In November, 2002, the shareholders passed two other resolutions
                – splitting the 8.5 billion ordinary shares of N1 each to 17
                billion ordinary shares of 50k each and transforming the Company
                to a Public Limited Liability Company (PLC). These resolutions
                became necessary in view of the planned privatization of the
                Company. To this end the FGN consolidated the loans owed by NSPM
                PLC. into shares, thereby changing the share holding structure.
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
                MOFI owned 80.31% of shares which sums up to N13,652,700,000 ,
                CBN 2.35% with 399,500,000 shares, De La Rue with 2.94%
                (499,800,000) while there a percentage of 14% which went
                unissued at that time.
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                To conclude the capital restructuring for the time being and in
                compliance with the Federal Government decision, MOFI therefore
                sold about 74.65% of its holding to CBN under a new
                sale/shareholding arrangement which has transferred control to
                CBN under a share sale/purchase Agreement entered on its behalf
                by the Nigerian Bureau of Public Enterprise (BPE) . Under the
                said agreement, CBN shall ware house the shares purchased for a
                minimum period of three (3) years or a maximum period of five
                (5) years. After Series of recapitalization the holding
                structure was said to be CBN owning 89.52% of shares, BPE with
                9.61% and De La Rue 0.87%
              </p>

              <p
                className={`${styles.paragraph} text-justify md:px-2 px-1 max-w-full my-5`}
              >
                As of 2020 till date, the current shareholding structure is
                <div className="flex flex-col mt-7">
                  <ul>
                    <li>Central Bank of Nigeria - 89.59%</li>
                    <li>Bureau of Public Enterprises - 9.62%</li>
                    <li>De la Rue - 0.79%</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonial />
        </div>
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

export default StructureData
