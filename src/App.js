import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import Preloader from './component/Preloader'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <Router>
      {loading && <Preloader />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vac" element={<VACProduct />} />
        <Route path="/currency" element={<CurrencyProduct />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/datacenter" element={<DataCenter />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/services" element={<Service />} />
        <Route path="/history_structure" element={<StructureData />} />
        <Route path="/history_sharedcapital" element={<HistoryData />} />
        <Route path="security_prints" element={<SecurityPrints />} />
        <Route path="currency_service" element={<CurrencyPrints />} />
        <Route path="our_partners" element={<Partners />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
