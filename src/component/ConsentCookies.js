import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ConsentCookies = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const isCookiesAccepted = localStorage.getItem('cookieConsent')
    if (!isCookiesAccepted) {
      setShowPopup(true)
    }
  }, [])

  const acceptCookies = () => {
    // Implement the logic to save user's cookie consent preference
    localStorage.setItem('cookieConsent', 'accepted')
    setShowPopup(!showPopup)
  }

  const denyCookies = () => {
    // Implement the logic to save user's cookie consent preference
    localStorage.setItem('cookieConsent', 'denied')

    setShowPopup(!showPopup)
  }

  if (!showPopup) {
    return null
  }

  return (
    <div className={`${showPopup ? 'visible' : 'hidden'}`}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-3">Our Privacy Policy</h2>
          <p className="mb-4">
            We use cookies to give you a better and more inclusive experience.
            We only use your information in accordance with <br></br> NDPR and
            other applicable regulations as explained in our
            <Link to="/privacy" target="_blank">
              <span className="underline text-teal-500 cursor-pointer ml-1">
                Privacy Policy
              </span>{' '}
            </Link>
            .
          </p>

          <p className="mb-4"></p>

          <button
            onClick={acceptCookies}
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 mr-3"
          >
            Accept
          </button>
          <button
            onClick={denyCookies}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsentCookies
