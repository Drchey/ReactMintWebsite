import React, { useState } from 'react'

const ConsentCookies = () => {
  const [showPopup, setShowPopup] = useState(true)

  const acceptCookies = () => {
    // Implement the logic to save user's cookie consent preference
    setShowPopup(!showPopup)
  }

  if (!showPopup) {
    return null
  }

  return (
    <div className="fixed bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-3">Our Privacy Policy</h2>
        <p className="mb-4">
          We use cookies to provide the best experience on our site. By
          continuing to use our site, you agree to our Privacy Policy.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default ConsentCookies
