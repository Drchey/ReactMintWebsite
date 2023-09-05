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
import { data_center, data_center_2, db } from '../assets'

const DataCenter = () => {
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
            image_type={db}
            title="Tier II Data Center"
            content1="The Nigerian Security Printing and Minting is completing a state-of-the-art data center  designed to meet the standard of a Tier II scalable to a Tier 3 in a very near future. In today's growing digital economy, 
           we are strategically positioned to collaborate with private and public sector companies to meet their goals for digital security and transformation. "
            content2="The Well Manned Data Center is purposed to ensuring services such as enterprise storage, disaster recovery strategies, backup and data collation, and other cloud services for organizations yearning for a reliable and efficient IT platforms who may wish to digitize these aspects aforementioned with limited costs. "
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={data_center} alt="vac" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Provide 99% availability within Scheduled Service Times"
            content="Whether you are looking for a offsite cloud storage solution or a service with optimum security & manage worries of storage, accessibility also. Our Data Center is strategically placed to ensure security and availability.We strife to certify that your data is readily available across any geolocation with a 99% uptime assurance."
          />

          <IdeaAction
            image_type={data_center_2}
            header="Disaster Recovery"
            content="In line with the need for a  Disaster Recovery Planning Approach (DRP), We are providing an offsite cloud service to ensure that companies within Nigeria adequately prepare and mitigate business downtime, data damage and maintain business uptime."
            content2="All these Needs come at a cost, hence the necessity for a Data Center Service with marginalized cost."
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

export default DataCenter
