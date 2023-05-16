import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import VACProduct from './screens/VACProduct'
import Contact from './screens/Contact'
import NotFound from './screens/NotFound'
import CurrencyProduct from './screens/CurrencyProduct'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vac" element={<VACProduct />} />
      <Route path="/currency" element={<CurrencyProduct />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default App
