import styles, { layout } from '../style'
import { g_3, money_2 } from '../assets'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Business = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className={layout.section}>
      <div className={layout.sectionImg}>
        <div className={`group relative`}>
          <img
            src={money_2}
            className={`px-1 object-cover h-[130%] `}
            alt="business"
            data-aos="fade-right"
          />

          <img
            src={g_3}
            className={`absolute top-0 right-90 opacity-100 z-[-1]`}
            alt="business"
          />

          {/* <div className="absolute inset-0  opacity-100"></div> */}

          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          No1 Security Prints in <br className="sm:block hidden" /> Nigeria
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With a legacy of craftsmanship spanning over 6 decades, we stand at
          the forefront of producing authentic and intricate currency notes that
          uphold the highest standards of security and design in Nigeria.
        </p>
      </div>
    </div>
  )
}

export default Business
