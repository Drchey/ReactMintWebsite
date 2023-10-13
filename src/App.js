import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import Home from './screens/Home'
import VACProduct from './screens/VACProduct'
import Contact from './screens/Contact'
import NotFound from './screens/NotFound'
import CurrencyProduct from './screens/CurrencyProduct'
import Team from './component/Team'
import Service from './screens/Service'
import DataCenter from './screens/DataCenter'
import Certificates from './screens/Certificates'
import ScrollToTop from './animations/ScrollToTop'
import History from './screens/History'
import HistoryData from './screens/History_Data'
import SecurityPrints from './screens/SecurityPrints'
import CurrencyPrints from './screens/CurrencyPrints'
import Partners from './screens/Partners'
import StructureData from './screens/StructureData'
import Preloader from './component/Preloader'
import SmartCard from './screens/SmartCard'
import DigitalStamps from './screens/DigitalStamps'
import ConsentCookies from './component/ConsentCookies'
import Privacy from './screens/Privacy'
import Values from './screens/Values'
import About from './screens/About'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <Router>
      {loading && <Preloader />}
      <ScrollToTop />
      {window.location.pathname !== '/privacy' && <ConsentCookies />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vac" element={<VACProduct />} />
        <Route path="/currency" element={<CurrencyProduct />} />
        <Route path="/conventional_prints" element={<Certificates />} />
        <Route path="/datacenter" element={<DataCenter />} />
        <Route path="/smartcard" element={<SmartCard />} />
        <Route path="/digital_prints" element={<DigitalStamps />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/services" element={<Service />} />
        {/* <Route path="/history_structure" element={<StructureData />} /> */}
        <Route path="/history_sharedcapital" element={<HistoryData />} />
        <Route path="security_prints" element={<SecurityPrints />} />
        <Route path="currency_service" element={<CurrencyPrints />} />
        <Route path="our_partners" element={<Partners />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="values" element={<Values />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
