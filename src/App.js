import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import VACProduct from './screens/VACProduct'
import Contact from './screens/Contact'
import NotFound from './screens/NotFound'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vac" element={<VACProduct />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default App
