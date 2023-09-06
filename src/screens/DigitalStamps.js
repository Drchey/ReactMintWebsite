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
import { data_center_2, digital_prints } from '../assets'

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
            title="Digital Prints & Services"
            content1="Digital prints, in contrast to conventional prints, encompass a contemporary approach to printing that leverages advanced digital technologies. These prints are characterized by their high-quality, precision, and adaptability.Digital prints offer several advantages, including rapid turnaround times, cost-effectiveness for short runs, and the ability to customize each print. They are a versatile choice for agencies, businesses, and individuals seeking high-quality, tailored print solutions in the modern age."
            // content2="The Well Mannered Data Center is purposed to ensuring services such as enterprise storage, disaster recovery strategies, backup and data collation, and other cloud services for organizations yearning for a reliable and efficient IT platforms who may wish to digitize these aspects aforementioned with limited costs. "
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={digital_prints} alt="vac" lar_obj={true} />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Meticulously Applies Cutting Edge Technologies "
            content="Our cutting-edge solution integrates highly secure digital prints, expertly applied as protective shields on excise products like tobacco in labels, alongside security stamps. These meticulously crafted digital prints, stamps, and labels serve as formidable barriers against counterfeiting, safeguarding the integrity of products and bolstering tax revenue. At the core of this innovative process is the deployment of specialized software, orchestrating the intricate choreography of secure ordering, precise application, and seamless distribution of these security technologies. By seamlessly merging state-of-the-art technology with vigilant oversight, our comprehensive prints emerges as a beacon of integrity, fostering fiscal transparency and elevating the protection of excise revenue to an unprecedented level."
          />

          <IdeaAction
            image_type={data_center_2}
            header="Tackling the need for Transparency"
            content="The Nigerian Security Printing and Minting Plc plays a pivotal role in addressing the challenge of low visibility by governments concerning excise products' production or importation. This innovative prints introduces an additional layer of transparency that was previously elusive. By affixing highly secure digital prints to products such as imports or domestically produced items, governments gain real-time insight into the movement and status of these products. This newfound visibility empowers authorities to effectively track the entire supply chain, from manufacturing to distribution, enabling them to monitor compliance, detect irregularities, and combat tax evasion."
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
