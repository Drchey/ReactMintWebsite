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
import { data_center_2, stamps } from '../assets'

const DigitalStamps = () => {
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
            //   image_type={db}
            title="Digital Stamps"
            content1="Digital tax Stamp (DTS) solution is the name given to solutions that are implemented by governments to protect and maximize excise tax revenue. It is a highly secure digital stamp that is affixed to excise products i.e., tobacco. A software is used to manage the secure ordering and distribution of the tax stamp."
            // content2="The Well Mannered Data Center is purposed to ensuring services such as enterprise storage, disaster recovery strategies, backup and data collation, and other cloud services for organizations yearning for a reliable and efficient IT platforms who may wish to digitize these aspects aforementioned with limited costs. "
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={stamps} alt="vac" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Meticulously Apply Cutting Edge Technologies "
            content="This advanced solution introduces a remarkably secure digital stamp, meticulously applied to excise products such as tobacco. With precision and efficiency, this digital stamp acts as a shield against counterfeiting while also maximizing tax returns. The heart of this innovative process lies in the utilization of specialized software, orchestrating the intricate choreography of secure ordering and seamless distribution of these tax stamps. By seamlessly amalgamating cutting-edge technology and vigilant oversight, the Digital Tax Stamp solution emerges as a beacon of integrity, fostering fiscal transparency and elevating the protection of excise revenue to an unprecedented level."
          />

          <IdeaAction
            image_type={data_center_2}
            header="Tackling the need for Transparency"
            content="The Nigerian Security Printing and Minting Plc plays a pivotal role in addressing the challenge of low visibility by governments concerning excise products' production or importation. This innovative solution introduces a layer of transparency that was previously elusive. By affixing highly secure digital stamps to excise products, such as imports or domestically produced items, governments gain real-time insight into the movement and status of these products. This newfound visibility empowers authorities to effectively track the entire supply chain, from manufacturing to distribution, enabling them to monitor compliance, detect irregularities, and combat tax evasion."
            // content2="All these Needs come at a cost, hence the necessity for a Data Center Service with marginalized cost."
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

export default DigitalStamps
