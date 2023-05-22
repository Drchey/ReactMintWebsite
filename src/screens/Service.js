import { bill, hero } from '../assets'
import { Background, Footer, Navbar } from '../component'
import { services } from '../constants'
import styles, { layout } from '../style'

export const OurService = () => (
  <>
    {services.map((service) => (
      <section key={service.id} className={`${layout.serviceSection}`}>
        <div className={service.class}>
          <div className={layout.serviceSectionImg}>
            <div className={`slide-left-container`}>
              <img src={bill} alt="business" />
            </div>
          </div>
          <div className={layout.serviceSectionInfo}>
            <h2 className={styles.heading2}>{service.title}</h2>
            <p className={`${styles.paragraph} max-w-full my-5`}>
              {service.context}
            </p>
          </div>
        </div>
      </section>
    ))}
  </>
)

const Service = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-dimWhite  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Background
          img={hero}
          classImg={`w-full h-[60vh] object-fit`}
          title="Our Services"
          context="The Mint Provides the full spectrum of Digital Security & Printing Services For Governments , Organizations and Individuals"
          btn="Checkout Our Services"
          classContext={`absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-teal-800 opacity-80`}
          classBtn={`bg-dimWhite mt-20 p-4 w- z-19[150px] h-[70px] px-9 text-forest cursor-none  border-none  font-bold`}
        />
      </div>
    </div>

    <div className={`bg-dimWhite my-18  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <OurService />
      </div>
    </div>

    <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)

export default Service
