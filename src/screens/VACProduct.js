import React from 'react'
import styles from '../style'
import {
  Image,
  Navbar,
  ProductHeader,
  ProductAbout,
  IdeaAction,
  Footer,
} from '../component'
import { vac_sure } from '../assets'

const VACProduct = () => {
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
            title="Verification & Authentication of Certificates"
            content1={`VAC (an acronym for Verification and Authentication of Certificates) is a digital web solution designed to streamline the gap between graduates, hiring organizations, and academic institutions. 
            It is interfaced between these bodies to significantly reduce the turnaround time and challenges associated with the verification of university and professional certificates in Nigeria.
              Targeted at interfacing with school records and providing digital verification responses while keeping the hiring organization informed. 
            `}
            content2={`The Solution was designed to address the cumbersome process of background checks, in many ways loss of employment opportunities. The Nigerian Security Printing and Minting visualizes a future where these concerns are a thing of the past and as thus visualized a solution to cater for these problems.`}
            is_vac={true}
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={vac_sure} alt="vac" lar_obj={true} />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="The Ultimate Solution 
              for Credential Verification"
            content={`Our years of experience and state-of-the-art machinery used in the production of currency and various security documents have led to our ability to deliver and exceed the demands of tertiary institutions and professional bodies in the country. Being full NDPR compliant, we have embedded best practices to ensure this service caters to your need for round the clock access and with a reliable customer service at your beck and call.  `}
          />

          <IdeaAction
            header="Real-Time Access"
            content={`We have ensured that your inquisitions are handled and forwarded to you in real time. hence, no need to wait weeks upon weeks for feedback. Whether you're an employer seeking to verify candidate credentials, a lending institution confirming financial information, or a background screening agency validating records, our cutting-edge technology offers a swift and reliable solution. Say goodbye to manual verification delays and welcome the convenience of a streamlined online process.`}
            // is_vac={true}
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

export default VACProduct
