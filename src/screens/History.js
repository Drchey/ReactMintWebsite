import { Footer, Navbar } from '../component'
import styles, { layout } from '../style'
import { gallery_1, history_1, history_2, history_3 } from '../assets'

export const CurrenyHistory = () => {
  return (
    <div className="md:px-1 px-1">
      <section className="my-1">
        <div>
          <h6 className={`${styles.text_heading} uppercase`}>
            Currency: Tracing Our Remarkable History
          </h6>
          <p className={`${styles.paragraph} text-justify`}></p>
        </div>

        <div className={`${layout.serviceSection}`}>
          <section className={`${layout.serviceSection} my-10 w-`}>
            <div className={`w-1/2`}>
              <div className={`slide-left-container group`}>
                <img src={history_2} alt="" className="w-full object-fit" />
              </div>
            </div>
            <div className={`${layout.serviceSectionInfo} px-4`}>
              <p
                className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
              >
                The West African Currency Board held the responsibility of
                issuing currency notes in Nigeria from 1912 to 1959. Prior to
                its establishment, Nigeria utilized various forms of money,
                including cowries and manilas. On July 1st, 1959, a significant
                transition occurred as the Central Bank of Nigeria introduced
                the Nigerian currency notes and coins, leading to the withdrawal
                of the West African Currency Board notes and coins. The year
                1962 marked the official withdrawal of legal tender status from
                the West African Currency Board.
              </p>
              <p
                className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
              >
                As Nigeria attained Republic status in 1963, the nation's
                banknotes underwent transformation to reflect its newfound
                identity. Subsequent changes in 1965 were prompted by the
                historical shift to a republic. In the year 1968, alterations
                were implemented in response to the unfortunate misuse of
                currency notes during the civil war.
              </p>
            </div>
          </section>
        </div>

        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSectionReverse} my-10`}>
            <div className={`w-1/2`}>
              <div className={`slide-left-container group`}>
                <img src={history_3} alt="" className="w-full object-fit" />
              </div>
            </div>
            <div className={`${layout.serviceSectionInfo} px-4`}>
              <p
                className={`${styles.paragraph} text-justify mt-3  text-[20px]`}
              >
                The monumental year of 1973 witnessed Nigeria's adoption of a
                truly national currency system, departing from the pounds and
                shillings of the imperial system inherited from British colonial
                administration. This shift ushered in the Naira (N) and kobo (k)
                denominations, with banknotes released in four denominations: 50
                kobo, N1, N5, and N10.
              </p>
              <p
                className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
              >
                Among these, the 50 kobo coin stands as the smallest coin by
                denomination, featuring the Nigerian Coat of Arms and the "50
                kobo" value. The One Naira coin showcases the Nigerian Coat of
                Arms on the obverse, while the reverse bears the portrait of
                Nigerian political leader Herbert Macaulay and his years of life
                (1864-1946).
              </p>
              <p
                className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
              >
                The years 1977 and 1991 witnessed the addition of N20 and N50
                note denominations, respectively, responding to rapid economic
                growth brought about by the oil boom. Economic expansion
                prompted the introduction of higher denomination notes: 100
                Naira (1999), 200 Naira (2000), 500 Naira (2001), and 1000 Naira
                (2005).
              </p>
            </div>
          </section>
        </div>

        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSection} my-10`}>
            <div className={`${layout.serviceSection} `}>
              <div className={`w-1/2`}>
                <div className={`slide-left-container group`}>
                  <img src={gallery_1} alt="" className="w-full object-fit" />
                </div>
              </div>
              <div className={`${layout.serviceSectionInfo} px-4`}>
                <p
                  className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
                >
                  Remarkable milestones continued with the issuance of the N20
                  banknote in 1977, featuring the portrait of the late Head of
                  State, General Murtala Ramat Muhammed. His leadership
                  qualities and contributions to Nigeria's evolution were
                  commemorated through this currency.
                </p>
                <p
                  className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
                >
                  The N500 banknote, introduced in April 2001, symbolized
                  another stride in Nigeria's financial landscape. Similarly,
                  the N1000 banknote, launched in October 2005, displayed the
                  faces of prominent figures in Nigeria's financial history.
                  These advancements demonstrated the nation's commitment to
                  economic growth and security.
                </p>
                <p
                  className={`${styles.paragraph} text-justify mt-3 text-[20px]`}
                >
                  In 2007, economic reforms prompted a redesign of several
                  banknotes and coins, unveiling new designs while preserving
                  the heritage of Nigeria's currency journey.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className={`w-full my-10`}>
        <p className={`${styles.paragraph} text-justify`}></p>
        <p className={`${styles.paragraph} text-justify`}></p>

        <p className={`${styles.paragraph} text-justify`}></p>
      </div>
    </div>
  )
}

const History = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`w-[100%] flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1">
          <hr className="w-[100%] h-[20px] bg-teal-700 p-2" />
          <h2 className={`${styles.headingTitle} text-gradient uppercase mt-5`}>
            The Nigerian Currency <br /> through the years
          </h2>
          <p className={`${styles.paragraph} mt-2 text-[21px]`}>
            Our history is a journey of innovation, growth, and transformative
            milestones that have shaped our identity and purpose.
          </p>
        </div>
        <div className="flex-1 ml-4">
          <img src={history_1} alt="" className="w-full object-contain" />
        </div>
      </div>

      <div className={`w-[100%] ${styles.paddingY} ${styles.flexCenter}`}>
        <div className="flex flex-col items-center justify-center">
          <div className={styles.paragraph}>
            The Nigerian Mint Came to Existence since
          </div>
          <div
            className={`${styles.paragraph} font-weight-700 text-[49px]  text-gradient font-bold`}
          >
            1963
          </div>
        </div>
      </div>

      <div className={`w[100%] ${styles.paddingX} ${styles.flexCenter}`}>
        <CurrenyHistory />
        {/* <TabSlider /> */}
      </div>
      <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default History
