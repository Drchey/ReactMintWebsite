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
import { data_center_2, sdcard_1 } from '../assets'

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
            content1=" Our Perso Bureau, with state-of-the-art machines, cutting-edge technology and highly skilled workforce will deliver high quality personalized smart cards. The processes are continually reviewed and updated to comply to applicable Standards and best practice."
            content2="At the heart of our smartcard product, we've meticulously designed and implemented a robust business continuity architecture that stands as a testament to our unwavering commitment to customer satisfaction. We understand that in today's fast-paced and interconnected world, uninterrupted service delivery is paramount. With this in mind, we've spared no effort in building a system that not only meets but exceeds customer demands at all times, regardless of external challenges or disruptions."
          />
        </div>
      </div>

      <div
        className={`bg-dimWhite  ${styles.flexStart} ${styles.paddingX} mt-7`}
      >
        <div className={`${styles.boxWidth}`}>
          <Image logo={sdcard_1} alt="vac" lar_obj={true} />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductAbout
            title="Committed to delivering High Quality Personalized Smart Card"
            content="Our business continuity architecture is a comprehensive and multi-layered approach that combines cutting-edge technology, redundant systems, and meticulous planning to ensure that our customers' needs are continually met, without compromise.We've leveraged the latest advancements in smartcard technology and data security to provide a seamless and secure experience for our users, ensuring that their transactions and interactions remain smooth and reliable, even in the face of unforeseen circumstances."
          />

          <IdeaAction
            image_type={data_center_2}
            header="Security, Sovereignty & Excellence"
            content=" By integrating smart cards into various government systems and public services, Nigeria can enhance its capacity to manage data securely and efficiently. These cards, equipped with advanced security features, can authenticate identities, streamline processes, and facilitate secure access to essential services. "
            content2="This not only bolsters Nigeria's sovereignty by enabling precise control over identity and service delivery but also ushers in a new era of cost-effective solutions. Smart cards empower citizens to access a range of services seamlessly, from healthcare and education to financial services, ultimately leading to reduced administrative costs and improved resource allocation. As Nigeria progresses towards a future of digital governance and inclusivity, the adoption of smart cards emerges as a pivotal step in advancing both National sovereignty and affordability for its dynamic and diverse population."
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
