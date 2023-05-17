import { boards } from '../constants'
import styles from '../style'
import Footer from './Footer'
import Navbar from './Navbar'

const Team = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-dimWhite  ${styles.flexStart}`}>
        <div className="flex flex-col">
          <h2
            className={`${styles.heading2} text-center uppercase mt-3 text-gray-500 md:text-[35px] text-[24px]`}
          >
            Meet Our Board of Directors
          </h2>
          <p className={`${styles.paragraph} font-bold`}>
            The board of directors led by the chairman is responsible for
            providing the overall strategic direction for the company.
          </p>
        </div>
      </div>

      <div className={`bg-dimWhite ${styles.flexStart} `}>
        <div className="flex md:flex-row flex-col w-full mx-10 mt-4">
          <div className="flex flex-col">
            {boards.map((board, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col items-center justify-between border-gray-600 border-2 p-[30px] mb-5 rounded-[20px]"
              >
                <img
                  src={board.logo}
                  alt=""
                  className="h-[260px] w-[260px] rounded-[50%] object-cover mb-5 border-orange-400"
                />
                <div className="flex flex-col item-start p-4 ">
                  <h1 className="mb-3 uppercase text-uppercase md:text-[22px] font-semibold text-[18px] text-dimForest">
                    {board.name} : {board.title}
                  </h1>
                  <p className="flex-84 font-poppins">{board.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`bg-dimForest mt-[70px] ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Team
