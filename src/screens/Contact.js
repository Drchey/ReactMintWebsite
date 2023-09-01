import { contact_img } from '../assets'
import { Background, Footer, Navbar } from '../component'
import ContactForm from '../component/ContactForm'
import styles from '../style'

const Contact = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-dimWhite  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Background
            img={contact_img}
            classImg={` h-[63vh] object-cover w-full`}
            title="Contact Us"
            context="Kindly get in touch with us for any business proposals, enquires, comments or suggestions."
            // btn="Contact Us"
            classContext={`absolute top-0 left-0 z-3 w-full h-full flex justify-center items-center  opacity-100`}
          />
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
}

export default Contact
