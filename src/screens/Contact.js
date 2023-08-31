import { hero } from '../assets'
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
            img={hero}
            classImg={`w-full h-[63vh] object-cover`}
            title="Contact Us"
            context="Kindly get in touch with us for any business proposals, enquires, comments or suggestions."
            btn="Contact Us"
            classContext={`absolute top-0 left-0 z-3 w-full h-full flex justify-center items-center bg-gray-500 opacity-80`}
            classBtn={`bg-dimWhite mt-20 p-4 w- z-19[150px] h-[90px] px-9 text-forest cursor-none  border-none  font-bold`}
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
