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
import { hero } from '../assets'

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
            title="Certificate Print "
            content1={`The Mint produces all certificates, particularly academic, birth, death, and marriage certificates. These certificates are printed with security features embedded that prevent forgery, cloning, or counterfeiting.`}
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={hero} alt="central image" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Printing For Over 120 Academic Institutions In Nigeria"
            content="We have Scaled to over ................. lorem ipsum dolor emet init dolo iciinde"
          />

          <IdeaAction
            header="Security Features"
            content={`We have high skilled and innovative graphic artists who are not only conversant with the latest techniques and materials to counteract forgery and adulteration, we are fully aware of the current capabilities of criminals and as thus our products are constantly ahead of potential counterfeiters. We use modern local letter assembly facilities to add the required text matter to these designs.The Resultant are then produced on a variety of sheet-fed wet or dry to four colours at once with the capability of printing on both the front and the back of the sheet simultaneously. The numbering of the documents which in itself is a complex operation, involving the need for absolute accuracy, is available in a variety of styles. Finishing is carried out in controlled conditions in line with the importance The MINT attaches to the security and integrity of its products.`}
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
