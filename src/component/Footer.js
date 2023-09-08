import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
        </a>

        <p
          className={`${styles.paragraph} mt-4 max-w-[310px] text-white text-center`}
        >
          Transforming the Way We Visualize Security Prints in Nigeria.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div
            className="flex flex-col ss:my-0 my-4  min-w-[120px]"
            key={index}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <div key={index}>
                  {!link.tab ? (
                    <Link to={`/${link.link}`}>
                      <li
                        className={` font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer
                    ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}
                  `}
                      >
                        {link.name}
                      </li>
                    </Link>
                  ) : (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        className={` font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer
                    ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}
                  `}
                      >
                        {link.name}
                      </li>
                    </a>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2023 The NSPM plc. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Link to={social.link} target="_blank">
            <img
              key={index}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              } `}
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default Footer
