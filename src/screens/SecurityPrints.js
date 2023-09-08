import React from 'react'
import styles, { layout } from '../style'
import { Footer, Navbar } from '../component'
import { cannon, cp_person, g_5, sp, star, video } from '../assets'
import { features } from '../constants'

const VideoPlayer = () => (
  <div className="w-full max-w-screen-lg mx-auto mt-8">
    <video controls className="w-full">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)

const FeatureCard = ({ title, content, index }) => (
  <div
    className={` sd-card flex flex-row p-6 rounded-[20px] items-center w-[80%] ${
      index !== features.length - 1
    } ? "mb-6": "mb-0 `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
    >
      <img src={star} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-teal-700 text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-700 text-[18px] text-justify leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const SecurityPrints = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`w-[100%] flex md:flex-row flex-col flex-1 align-items pt-5 justify-between ${styles.paddingX}`}
      >
        <div className="flex-1">
          <hr className="w-[100%] h-[20px] bg-teal-700 p-2" />
          <h2 className={`${styles.heading2} text-gradient uppercase mt-5`}>
            Explore Our Collection of High-Quality Security DOCUMENTS
          </h2>
          <p
            className={`${styles.paragraph} mt-2 text-justify p-2 text-[21px]`}
          >
            From Intricate Patterns to cutting-edge features and technologies,
            each print embodies our commitment to bolstering security measures
            and new aesthetics in a blend that are developed to meet and exceed
            the requirements of our customers.
          </p>
        </div>
        <div className="flex-1 ml-4 group">
          <img src={sp} alt="" className={styles.imgCard} />
        </div>
      </div>

      {/* Background  */}

      <div className={`w-[100%] ${styles.paddingY} ${styles.flexCenter}`}>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center text-forest font-semibold`}
          >
            Tracing our Threads
          </div>
        </div>
      </div>
      <div className={`w-[100%] ${styles.flexCenter}`}>
        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSection}`}>
            <div className={``}>
              {/* <div className={layout.serviceSectionImg}>
                <div className={`slide-left-container group`}>
                  <img src={sp2} alt="" className={styles.imgCard} />
                </div>
              </div> */}
              <div className={``}>
                <p
                  className={`${styles.paragraph} text-justify md:px-8 px-1 max-w-full my-1 text-[21px]`}
                >
                  The Nigerian Security Printing & Minting Plc began full
                  production of Security Documents in the year 1965 as the
                  largest Non-banknote Specialist outfit in West Africa. It is
                  Saddled with the Responsibility of Producing Highly Secured
                  Documents for the Nigerian Government, Private Organizations,
                  and Academic Institutions at Large. In Other to counter the
                  tide of high rate counterfeiting of security documents by
                  commercial printers and forgers.
                </p>

                <p
                  className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5 text-[21px]`}
                >
                  The use of Ink-based and watermark paper solutions has been
                  threatened by fraudsters hence the need to fortify our
                  documents with features that enable deployments of anti-copy,
                  anti-scan designs. Whether it's secure identification
                  documents, or valuable certificates, our printing with
                  security features stands as a resolute shield against
                  fraudulent activities. Explore the realm where intricate
                  designs marry impenetrable protection, a testament to our
                  dedication to fortifying the reliability of printed materials
                  in an ever-evolving landscape.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Competition */}

      <div className={`w-[100%] ${styles.paddingY} ${styles.flexCenter}`}>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center text-forest font-semibold`}
          >
            Our Competitive Edge
          </div>
        </div>
      </div>
      <div className={`${styles.boxWidth}  ${styles.flexCenter}`}>
        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSection}`}>
            <div className={`relative`}>
              <img src={g_5} className="absolute bottom-0 z-[-1]" alt="" />
              <div className={``}>
                <p
                  className={`${styles.paragraph} text-justify md:px-8 px-1 w-[100%] my-1 text-[21px]`}
                >
                  Our Security Documents Department takes robust measures to
                  safeguard its prints from the threats of counterfeiting and
                  forgery. With a steadfast commitment to authenticity, we
                  employ cutting-edge technologies and stringent security
                  protocols to ensure the integrity of our products.
                </p>

                <div className="my-9">
                  <FeatureCard
                    title={`Paper Based Security Features`}
                    content={`Embedding security features like corporate logo watermarks, invisible fibres, treated papers and more.`}
                  />

                  <FeatureCard
                    title={`Ink Based Security Features`}
                    content={`Covert (Invisible) & Overt (Visible) ink features that can be read via specialized handheld instruments e.g UV lamp.`}
                  />

                  <FeatureCard
                    title={`Software Based Security Features`}
                    content={`Computer based generated features & web-based applications that are utilized for authentication & verification while ensuring high-end security of data.`}
                  />
                  <FeatureCard
                    title={`Forensic Analysis`}
                    content={`Our Research and Development team is fully equipped to handling deep forensic analysis of the security documents and banknotes to ascertain its credibility.`}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.paragraph} text-[34px] text-center text-forest font-semibold`}
          ></div>
        </div>
      </div>
      <div className={`w-[100%] ${styles.flexCenter}`}>
        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSection}`}>
            <div className={`${layout.serviceSectionReverse} `}>
              <div className={`w-1/2`}>
                <div className={`slide-left-container group`}>
                  <img src={cannon} alt="" className={styles.imgCard} />
                </div>
              </div>
              <div className={layout.serviceSectionInfo}>
                <p
                  className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5 text-[21px]`}
                >
                  The Nigerian Security Printing & Minting Plc is equipped with
                  the Advanced Machinery and team of devoted engineers,
                  designers and researchers, we stay ahead of evolving threats
                  by consistently innovating our security features. Beyond just
                  protection, our security features are a testament to our
                  commitment to maintaining trust in an interconnected world.
                </p>
                <p
                  className={`${styles.paragraph} text-justify md:px-10 px-6 max-w-full my-5 text-[21px]`}
                >
                  We have also done lots of research with leading experts in the
                  printing field to ensure that product workflow is seamless and
                  sustainable. We assure our customers of high-end quality
                  prints while ensuring that our print process is waste free and
                  sustainable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`w-[100%]  ${styles.flexCenter}`}>
        <div className={layout.serviceSection}>
          <section className={`${layout.serviceSection}`}>
            <div className={`${layout.serviceSection} `}>
              <div className={`w-1/2`}>
                <div className={`slide-left-container group`}>
                  <img
                    src={cp_person}
                    alt=""
                    className={`${styles.imgCard} p-3 h-[40%] w-[50%]`}
                  />
                </div>
              </div>
              <div className={`w-1/2`}>
                <p
                  className={`${styles.paragraph} text-justify md:px-10 px-1 max-w-full my-5 text-[21px]`}
                >
                  The production process in the security document division
                  usually starts with the highly skilled and innovative graphic
                  artists who are not only fully conversant with the latest
                  techniques and materials to counteract forgery and
                  adulteration, but are aware of the current capabilities of
                  criminals. This knowledge combined with information on the
                  latest international counterfeiting methods and machineries
                  enable our designers to continually upgrade the security
                  features and materials to ensure that our products are
                  constantly ahead of potential counterfeiters. This goes hand
                  to hand with our Research & Design team, who are tirelessly
                  exploring new technologies, and ensuring that our clients
                  benefit from the latest advancements in anti-counterfeiting
                  solutions. We utilize modern local letter-assembly facilities
                  to add the require text matter to these designs. The Nspm Plc
                  attaches to the security and integrity of its products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Video */}

      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <div className="flex flex-col items-center justify-center">
          <VideoPlayer />
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

export default SecurityPrints
