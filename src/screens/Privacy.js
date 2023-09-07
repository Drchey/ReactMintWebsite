import { Footer, Navbar } from '../component'
import styles from '../style'
import { g_5, privacy, star } from '../assets'
import { features } from '../constants'

const FeatureCard = ({ title, content, index }) => (
  <div
    className={` sd-card flex flex-row p-6 rounded-[20px] items-center w-[80%] ${
      index !== features.length - 1
    } ? "mb-6": "mb-0 `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
    >
      <img src={star} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <p className="font-poppins font-normal text-gray-700 text-[18px] text-justify leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Privacy = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1 ml-4 group">
          <img
            src={privacy}
            alt="way home studio"
            className={`${styles.imgCard} h-[50vh] object-cover`}
          />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[39px] text-center my-5 text-forest font-semibold relative`}
          >
            Our Privacy Policy
            {/* <img src={lines} alt="" className="absolute" /> */}
          </div>

          <div
            className={` md:text-[20px] text-[16px]  md:text-center text-justify  px-2 my-2 font-light italic`}
          >
            "Our commitment to your privacy is of utmost importance.Our Privacy
            Policy outlines how we collect, use, and protect your personal
            information, ensuring your data remains secure and confidential
            while you explore our website."
          </div>
        </div>
      </div>

      <div className="w-full md:px-10 px-4">
        <section className="my-2">
          <h6 className={`uppercase text-[20px] font-bold text-gray-600 my-1`}>
            We Care About Your Privacy
          </h6>
          <p className={`${styles.paragraph} text-justify`}>
            We at the Nigerian Security Printing & Minting Plc takes information
            security as a priority for all its stakeholders and are committed to
            the protection of information assets in carrying out the company’s
            operations, both internally and externally.
          </p>

          <p className={`${styles.paragraph} text-justify`}>
            We are fully NDPR (Nigeria Data Protection Regulation) Compliant and
            as a result we follow the regulatory best practice following
            electronic electronic & information use.
          </p>

          <p className={`${styles.paragraph} text-justify`}>
            We are also ISO (International Standard of Organization) Certified.
            Following the best standards to ensuring the quality, safety and
            efficiency of products, services, and systems.
          </p>

          <p className={`${styles.paragraph} text-justify mt-3`}>
            Our commitment to protecting the integrity and processing throughout
            the organizations. This is aligned with our organizational goals and
            the NSPM’s information Security Management programs. The systems put
            in place are intended to be an enabling mechanism for safe
            information collection, processing, sharing and storage such that
            information-related risks are maintained at acceptable levels.
          </p>
        </section>

        <section className="my-12 mt-10 relative">
          <img src={g_5} className="absolute bottom-2 z-[-1]" alt="" />
          <h6 className={`uppercase text-[20px] font-bold text-gray-600 my-1`}>
            The NSPM PLC's PRIVACY POLICY
          </h6>

          <p className={`${styles.paragraph} text-justify mt-3 mb-6`}>
            It is the Policy of NSPM Plc to establish, implement, maintain and
            continually improve the controls on Information Security to meet
            regulatory requirements and best practices in all operations to
            ensure that:
          </p>

          <FeatureCard
            content={`The establishment and maintenance of adequate information security shall be achieved by identifying, assessing, evaluating, and controlling information-related risks, providing adequate resources in alignment with the company risk management strategy.`}
          />
          <FeatureCard
            content={`Our information security controls are always fully effective by maintaining compliance matrix to continually monitor how information security risks are controlled.`}
          />
          <FeatureCard
            content={`Information security continuity and contingency plans, data backup procedures, malware protection, access control to systems and information security incident reporting are fundamental to this Policy.`}
          />
          <FeatureCard
            content={`We promote an environment where all employees are aware of their Information Security responsibilities.`}
          />
          <FeatureCard
            content={`All employees and relevant stakeholders shall comply with this Policy.`}
          />
          <FeatureCard
            content={`We are committed to complying with applicable legal, regulatory, contractual, and other requirements on Information Security.`}
          />
          <FeatureCard
            content={`This Policy will be communicated and made available to all employees of the company and relevant interested parties.`}
          />
          <FeatureCard
            content={`The NSPM is committed to systematic review and continual improvement of its Information Security Programs.`}
          />

          <div className={`${styles.paragraph} text-justify mt-3`}></div>
        </section>
      </div>
      <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Privacy
