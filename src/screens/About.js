import { Footer, Navbar } from '../component'
import styles, { layout } from '../style'
import { about_nspm, cp_3, g_5, mint_building, privacy, star } from '../assets'

const VideoPlayer = () => (
  <div className="w-full max-w-screen-lg mx-auto mt-8">
    <video controls className="w-full">
      <source src={about_nspm} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)


const About = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1 ml-4 group">
          <img
            src={mint_building}
            alt="way home studio"
            className={`${styles.imgCard} h-[50vh] object-cover`}
          />
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[39px] text-center my-5 text-forest font-semibold relative`}
          >
          About Us
            {/* <img src={lines} alt="" className="absolute" /> */}
          </div>

          <div
            className={` md:text-[20px] text-[16px]  md:text-center text-justify  px-2 my-2 font-light italic`}
          >
            " At NspmPlc, we're more than just a brand; we're a collective of individuals driven by a shared commitment to excellence.oday, we have consistently delivered trusted and innovative solutions in currency production, document security, and secure printing."
          </div>
        </div>
      </div>

      <div className={`$w-[100%] ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSection}`}>
            <div className={`${layout.serviceSection} `}>
              <div className={`w-1/2`}>
                <VideoPlayer />
              </div>
              <div className={`w-1/2`}>
                <p
                  className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5 text-[21px]`}
                >
                  At Nigerian Security Printing and Minting Plc (NSPM), we stand at the forefront of excellence in the secure printing and minting industry. With a rich history dating back to our establishment in 1963, we have consistently delivered trusted and innovative solutions in currency production, document security, and secure printing.
                  Our commitment to precision, cutting-edge technology, and uncompromising quality has earned us a well-deserved reputation as a trusted partner for the Central Bank of Nigeria. NSPM is a symbol of trust, security, and expertise. We take pride in safeguarding the integrity of currencies and documents, contributing to economic stability,
                   and building a better, more secure future for our nation and beyond.

                </p>
              </div>
            </div>
          </section>
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

export default About
