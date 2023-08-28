import { useState, useEffect } from 'react'
import {
  Business,
  Features,
  Footer,
  Hero,
  Navbar,
  Section,
  Security,
  // Testimonial,
} from '../component'

import styles from '../style'
import { guilloche_9 } from '../assets'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const popupContainer = document.querySelector('.popup-container')
      const popupPosition = popupContainer.getBoundingClientRect().top
      setIsVisible(popupPosition < window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-dimDark w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-dimWhite ${styles.flexStart} relative`}>
        <div className={`${styles.boxWidth}`}>
          <img src={guilloche_9} alt="" className="fixed z-[-2] opacity-100" />
          <Hero />
        </div>
      </div>

      <div
        className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart} relative`}
      >
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}

          <Features isVisible={isVisible} />
          <Section link="/currency" />
          <Business />
          <Security />
          {/* <Testimonial />  */}
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

export default Home
