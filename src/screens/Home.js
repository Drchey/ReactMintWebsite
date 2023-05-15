import {
  Business,
  Features,
  Footer,
  Hero,
  Navbar,
  Security,
  Stats,
  Testimonial,
} from '../component'

import styles from '../style'

const Home = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-dimWhite  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Features />
        <Business />
        <Security />
        <Testimonial />
      </div>
    </div>
    <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)

export default Home
