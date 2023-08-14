import styles, { layout } from '../style'
import { currency_5 } from '../assets'

const Business = ({ isVisible }) => (
  <div className={layout.section}>
    <div className={layout.sectionImg}>
      <div
        className={` slide-left-container group ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img src={currency_5} className={styles.imgCard} alt="business" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        No1 Security Prints in <br className="sm:block hidden" /> Nigeria
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        assumenda dolor nulla iusto ad error reprehenderit ut officiis delectus
        odio natus mollitia nam ipsa itaque suscipit necessitatibus in
        praesentium. Vero?
      </p>
    </div>
  </div>
)

export default Business
