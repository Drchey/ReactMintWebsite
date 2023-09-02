import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import { vac_slide } from '../assets'

const ProductHeader = ({
  title,
  content1,
  content2,
  link,
  image_type,
  is_vac,
}) => (
  <div className={`flex sm:flex-row flex-col mt-5`}>
    <div className="flex-none w-44">
      <h2 className={styles.heading2}>
        <img src={image_type} className="" alt="" />
      </h2>

      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`flex-initial w-84 ...`}>
      <h2 className={`${styles.heading2}`}>{title}</h2>
      <p className={`${styles.paragraph}`}>{content1}</p>
      <p className={`${styles.paragraph} mt-3`}>{content2}</p>

      {is_vac ? (
        <div className="mt-6 text-[20px] flex flex-col">
          {' '}
          <a
            href="https://www.authenticatehub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 font-bold underline my-2"
          >
            Verification & Authentication of Certificates
          </a>
          <a
            href={vac_slide}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 font-bold underline my-2"
          >
            Vac Service Offerings
          </a>
        </div>
      ) : null}

      <Link to="/vac">
        <h4 className="font-poppins cursor-pointer font-semibold text-teal-700 text-[18px] leading-[23px] mt-7">
          {link}
        </h4>
      </Link>
    </div>
  </div>
)

export default ProductHeader
