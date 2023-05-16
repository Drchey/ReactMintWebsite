import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const ProductHeader = ({ title }) => (
  <div class={`flex mt-5`}>
    <div class="flex-none w-44">
      <h2 className={styles.heading2}> VAC </h2>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`flex-initial w-84 ...`}>
      <h2 className={`${styles.heading2}`}>{title}</h2>
      <p className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque hic
        distinctio quod ullam nulla fugit saepe esse nisi obcaecati pariatur
        perferendis, nesciunt tempore consectetur consequatur quasi sapiente
        repellendus ea vitae doloremque amet eaque tenetur cum neque? Corporis
        deleniti eaque harum incidunt sit iusto dignissimos, natus ea! Quas
        fugiat provident quam quasi possimus numquam id qui eius! Eos, est
        distinctio consequuntur illo, nisi aut amet voluptates cumque eveniet
        corrupti aspernatur?
      </p>
      <p className={`${styles.paragraph} mt-3`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque hic
        distinctio quod ullam nulla fugit saepe esse nisi obcaecati pariatur
        perferendis, nesciunt tempore consectetur consequatur quasi sapiente
        repellendus ea vitae doloremque amet eaque tenetur cum neque? Corporis
        deleniti eaque harum incidunt sit iusto dignissimos, natus ea! Quas
        fugiat provident quam quasi possimus numquam id qui eius! Eos, est
        distinctio consequuntur illo, nisi aut amet voluptates cumque eveniet
        corrupti aspernatur?
      </p>

      <Link to="/vac">
        <h4 className="font-poppins cursor-pointer font-semibold text-teal-700 text-[18px] leading-[23px] mt-7">
          Verification of Certificates
        </h4>
      </Link>
    </div>
  </div>
)

export default ProductHeader
