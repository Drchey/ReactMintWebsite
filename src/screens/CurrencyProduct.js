import React from 'react'
import styles from '../style'
import {
  Footer,
  IdeaAction,
  Image,
  Navbar,
  ProductAbout,
  ProductHeader,
} from '../component'
import { new_note_add } from '../assets'

const CurrencyProduct = () => {
  return (
    <div className="w-full bg-dimWhite overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductHeader
            title="We ensure the security of the Nigerian banknotes"
            content1={`The Nigerian Security Printing and Minting Plc is responsible for the production of Nigeria's Naira banknotes and coins. Since their introduction in 1965, We have been entrusted with this important task on behalf of the Central Bank of Nigeria.`}
            content2={`Given these crucial roles, safeguarding the Naira against counterfeiting is of utmost importance. Nigeria's monetary authorities are committed to ensuring the integrity of the national currency and have implemented measures to secure the notes. Each year, thousands of counterfeit Naira notes are detected and removed from circulation.
            Counterfeiters employ various techniques, including scanning and printing, to mimic the notes, often at different resolutions. While many fake currencies can be identified with the naked eye, some require advanced light-based examination and authentication machines for detection.
            We at Nspm Plc, take pride in our decades-long responsibility for producing Nigeria's Naira notes. These notes are renowned for their exceptional security features, making them among the most secure in the world. Replicating these features outside our production systems is nearly impossible."
            This revised version maintains the original information while providing a clearer and more structured narrative.
            `}
            // content1={`The banknotes production facilities consist of the most up-to-date machines available in the industry. Our high-tech electronically controlled machines, sophisticated inks and highly skilled personnel all go to show that we keep pace with the most current trend in the industry world-wide. To support our operations and satisfy our clients’ individual demands, The Nigerian Security Printing and Minting Plc reproduces its printing plates here in Nigeria while the sophisticated production machines and key raw materials are imported from diversified but highly reliable dealers overseas.`}
            // content2={`To ensure we protect our National Symbol, the Nigerian Security Printing and Minting take great strides with top grade security inks, and other non publicly communicated security features`}
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexCenter} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={new_note_add} alt="vac" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="We elevate the Naira Security with up-to-date machineries"
            content={`The banknotes production facilities consist of the most up-to-date machines available in the industry. Our high-tech electronically controlled machines, sophisticated inks and highly skilled personnel all go to show that we keep pace with the most current trend in the industry world-wide. To support our operations and satisfy our clients’ individual demands, The Nigerian Security Printing and Minting Plc reproduces its printing plates here in Nigeria while the sophisticated production machines and key raw materials are imported from diversified but highly reliable dealers overseas.`}
            //   content1={`The MINT has been in charge of the production of local currency notes since they were introduced in 1965. It does this on behalf of the Central Bank of Nigeria.The Naira being the enabler of the Nigerian physical economy and the official unit of exchange, there is need to take preventive measures against counterfeiting and currency imitation this is where
            //   the MINT comes in.

            // `}
          />

          <IdeaAction
            header="Sustainability Through Local Raw Material Sourcing"
            content={`
            Part of our expansion strategy is to source raw materials locally as a logical first step,
             and this initiative inspired the establishment of an indigenous company in partnership with 
             a renown technical partner for the production of security inks in Nigeria. 
             A Memorandum of Understanding was signed on the 19 of June, 1987, for the formation of a company 
             under the business name of Tawada Limited.
              The shareholders in this company being NSPM Plc (60%) and SICPA S. A. of Switzerland (40%).
               Tawada Limited came into existence as a result of the backward integration policy of the Nigerian Security Printing and Minting Plc
                (NSPM Plc) and the willingness of SICPA S. A. of Switzerland to go into a joint venture arrangement 
                for the manufacture of security and commercial printing inks in Nigeria. 
            The Tawada Limited has since commenced production of high-quality security inks.
            `}
            // content={`
            // The banknotes production facilities consist of the most up-to-date machines available in the industry. Our high-tech electronically controlled machines, sophisticated inks and highly skilled personnel all go to show that we keep pace with the most current trend in the industry world-wide. To support our operations and satisfy our clients’ individual demands, The MINT manufactures its offset and intaglio printing plates here in Nigeria while the sophisticated production machines and key raw materials are imported from diversified but highly reliable dealers overseas.
            // `}
          />
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

export default CurrencyProduct
