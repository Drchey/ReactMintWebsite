import { ownership } from '../assets'
import styles from '../style'

const Testimonial = () => (
  <section
    className={`${styles.flexCenter} flex flex-col my-4 bg-dimWhite py-9`}
  >
    <h1
      className={`${styles.paragraph} text-center uppercase text-gray-600 text-semibold`}
    >
      Our OwnerShip Structure
    </h1>
    <div className={`${styles.flexCenter}  w-full`}>
      <img
        src={ownership}
        alt="ownership"
        className="sm:w-fit w-[100%] object-fit"
      />
    </div>
  </section>
)

export default Testimonial
