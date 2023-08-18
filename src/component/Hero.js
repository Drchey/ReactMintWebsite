import { lines, sample_hero } from '../assets'
import styles from '../style'

const Hero = () => (
  <section className="md:flex-row flex-col flex   mt-5 mb-7">
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
        <h1 className="font-bold md:text-[70px] text-[20px] ">
          WELCOME TO THE NIGERIAN <br className="sm:block hidden" />
          <span className="text-forest"> MINT</span>
        </h1>
        <img src={lines} alt="" className="absolute top-0 " />
      </div>

      <div className={`${styles.paragraph} mt-5`}>
        The Nigerian Security Printing and Minting PLC is the foremost and only
        full-fledged security printing organisation in the African sub-region.
        It was established in 1963 by the government of the Federal Republic of
        Nigeria in partnership with De La Rue of the U.K The company is wholly
        managed and operated by Nigerians
      </div>

      <div>
        <img src={lines} alt="" />
      </div>

      <div className="flex flex-1 mt-6">
        <a
          href="#division"
          className="bg-dimForest p-4 w-[150px] h-[70px] text-white text-center border-none rounded-[20px] font-bold"
        >
          Our Divisions
        </a>
      </div>
    </div>

    <div className={`flex flex-1  ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={sample_hero}
        alt=""
        className="w-[100%] h-[100%] relative z-4 object-cover"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
)

export default Hero
