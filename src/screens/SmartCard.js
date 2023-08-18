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
import { data_center_2, smartcard_background } from '../assets'

const SmartCard = () => {
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
            // image_type={db}
            title="SmartCard Perso Bureau"
            content1="At the heart of our innovation lies the meticulous craft of designing security chips for smart cards. With a steadfast commitment to safeguarding data integrity and user privacy, we engineer these intricate components to serve as the fortress of protection within each smart card."
            content2=" From conception to realization, our dedication to excellence drives us to craft security chips that empower our clients with the highest level of confidence in their smart card solutions."
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={smartcard_background} alt="vac" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Committed to SafeGuarding Our Users"
            content="With a steadfast commitment to safeguarding data integrity and user privacy, we engineer these intricate components to serve as the fortress of protection within each smart card. Our expert team meticulously architects every aspect of the security chip, meticulously addressing vulnerabilities and fortifying against potential threats. Through cutting-edge technology and rigorous testing, we ensure that these chips stand as bastions of defense, enabling secure transactions, access control, and identity verification."
          />

          <IdeaAction
            image_type={data_center_2}
            header="Security, Sovereignty & Excellence"
            content=" By integrating smart cards into various government systems and public services, Nigeria can enhance its capacity to manage data securely and efficiently. These cards, equipped with advanced security features, can authenticate identities, streamline processes, and facilitate secure access to essential services. "
            content2="This not only bolsters Nigeria's sovereignty by enabling precise control over identity and service delivery but also ushers in a new era of cost-effective solutions. Smart cards empower citizens to access a range of services seamlessly, from healthcare and education to financial services, ultimately leading to reduced administrative costs and improved resource allocation. As Nigeria progresses towards a future of digital governance and inclusivity, the adoption of smart cards emerges as a pivotal step in advancing both national sovereignty and affordability for its dynamic and diverse population."
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

export default SmartCard
