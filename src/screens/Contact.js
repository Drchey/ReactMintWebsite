import { Background, Footer, Navbar } from '../component'
import ContactForm from '../component/ContactForm'
import styles from '../style'

const Contact = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-dimWhite  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Background />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ContactForm />
      </div>
    </div>

    <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)

export default Contact
