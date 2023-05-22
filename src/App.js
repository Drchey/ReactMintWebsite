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

function scrollRestoration() {
  window.scrollTo(0, 0)
}

const App = () => (
  <Router scrollRestoration={scrollRestoration}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vac" element={<VACProduct />} />
      <Route path="/currency" element={<CurrencyProduct />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/datacenter" element={<DataCenter />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/teams" element={<Team />} />
      <Route path="/services" element={<Service />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default App
