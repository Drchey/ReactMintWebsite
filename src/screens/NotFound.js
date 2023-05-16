import React from 'react'
import styles, { layout } from '../style'
import { Footer, Navbar } from '../component'
import { not_found } from '../assets'
import { Link } from 'react-router-dom'

export const Message = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gray-400`}>Oh Snap!</h2>

      <p className={styles.paragraph}>
        We couldn't find the page you were looking for.
        <br />
        It looks like the page you're trying to access doesn't exist or may have
        been moved. Here are a few things you can try:
        <ul className="list-none mt-6">
          <li>
            Check the URL: Make sure the URL you entered is correct and doesn't
            contain any typos or errors. Search our site: Use the search bar
            above to search for the content you're looking for. Go to our
          </li>

          <li>
            Go to Our Home Page: Click on the logo or the home button to go back
            to our homepage and start browsing from there.
          </li>
        </ul>
        <p className="text-gray-600 mt-7">
          please contact us and we'll be happy to help. In the meantime, why not
          check out one of our popular page
        </p>
        <p className="mt-4">
          <Link to="/vac">Verification & Authentication of Certificates</Link>
        </p>
        <p className="mt-6">
          {' '}
          Thank you for visiting our website. We apologize for any inconvenience
          this may have caused.
        </p>
      </p>

      <Link to="/">
        <button className="bg-dimForest rounded-[20px] mt-20 p-4 w- z-19[150px] h-[70px] px-9 text-white cursor-pointer  border-none  font-bold">
          Back To Home
        </button>
      </Link>
    </div>

    <div className={layout.sectionImg}>
      <img src={not_found} alt="not found" />
    </div>
  </section>
)

const NotFound = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div
      className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart} min-h-[100vh]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Message />
      </div>
    </div>

    <div className={`bg-dimForest ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)

export default NotFound
