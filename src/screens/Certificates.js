import React from 'react'
import {
  Footer,
  IdeaAction,
  Image,
  Navbar,
  ProductAbout,
  ProductHeader,
} from '../component'
import styles from '../style'
import { cp_prints } from '../assets'

const Certificates = () => {
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
            title="Conventional Security Prints"
            content1={`We specialize in range of printing techniques and features used to enhance the security of documents, currency, labels, and other printed materials to deter counterfeiting and fraud. These security prints are typically integrated into the design production process and are often not visible to the naked eye.`}
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={cp_prints} alt="central image" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Printing For Over 120 Academic Institutions In Nigeria"
            content="Each print is meticulously crafted to capture the essence of your accomplishment, ensuring that your hard-earned achievements are celebrated in a visually captivating manner. With a focus on precision and attention to detail, our prints reflect the dedication and effort you've put into your endeavors.We work hand-in-hand with stakeholders to add a personalized touch to each prints we produce. Elevate your certificates to the next level of sophistication and proudly display your success with our security prints collection."
          />

          <IdeaAction
            header="Security Features"
            header_2="Skilled & Innovation is in our DNA"
            isInit=""
            image_type="image_null"
            content={`We have high skilled and innovative graphic artists who are not only conversant with the latest techniques and materials to counteract forgery and adulteration, we are fully aware of the current capabilities of criminals and as thus our products are constantly ahead of potential counterfeiters. We use modern local letter assembly facilities to add the required text matter to these designs.The Resultant are then produced on a variety of sheet-fed wet or dry to four colours at once with the capability of printing on both the front and the back of the sheet simultaneously. The numbering of the documents which in itself is a complex operation, involving the need for absolute accuracy, is available in a variety of styles. Finishing is carried out in controlled conditions in line with the importance the Nigerian Mint  attaches to the security and integrity of its products.`}
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

export default Certificates
