import { useEffect } from 'react'
import { g_4, sp1 } from '../assets'
import { features } from '../constants'
import styles, { layout } from '../style'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={` sd-card flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1
    } ? "mb-6": "mb-0 `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-darkForest text-[18px] leading -[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-forest text-[16px] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Security = ({ isVisible }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className={layout.section}>
      <div className={`${layout.sectionImg} flex-col relative`}>
        <img
          src={g_4}
          className="w-[200%] h-[200%] object-contain absolute top-30 left-0 opacity-60"
          alt=""
        />
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <div className={layout.sectionImg}>
        <div className={``}>
          <img src={sp1} alt="business" data-aos="fade-left" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
      </div>
    </div>
  )
}

export default Security
