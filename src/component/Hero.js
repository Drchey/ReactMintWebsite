import { lines, sharpen_image } from '../assets'
import styles from '../style'

const Hero = () => (
  <section className="md:flex-row flex-col flex relative  mt-5 mb-10">
    <div
      className={`flex flex-col flex-1 ${styles.flexStart} flex-col xl:pl-10 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-6 px-4 bg-dimForest rounded-[10px] mb-2">
        {/* <img src={logo} alt="discount" className="w-[32px] h-[32px]" /> */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">
            Nigerian Security Printing & Minting Plc
          </span>
        </p>
      </div>
      <div className="relative">
        <img src={lines} alt="" className="absolute left-0 z-[-1]" />
        <h2 className="font-bold md:text-[50px] text-[20px] ">
          WELCOME TO THE NIGERIAN SECURITY <br className="sm:block hidden" />
          <span className="text-forest"> PRINTING & MINTING </span>
          <br className="sm:block hidden" />
          <span className="text-forest"> PLC</span>
        </h2>
      </div>

      <div className={`${styles.paragraph} mt-5`}>
        The Nigerian Security Printing and Minting PLC is the only full-fledged
        security printing organization in the West-African region. It was
        established in 1963 by the Federal government of Nigeria in partnership
        with De-La-Rue of the U.K The company is wholly Managed and Operated by
        Nigerians.
      </div>

      <div>{/* <img src={lines} alt="" /> */}</div>

      <div className="flex flex-1 mt-6">
        <a
          href="#division"
          className="bg-dimForest p-4 w-[200px] h-[60px] text-white text-center border-none rounded-[20px] font-bold sm:flex hidden"
        >
          Our Service Offerings
        </a>
      </div>
    </div>

    <div className={`flex flex-1  ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={sharpen_image}
        alt=""
        className="w-[140%] h-[100%] relative z-4 md:object-cover object-fit"
      />
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </div>
  </section>
)

export default Hero
