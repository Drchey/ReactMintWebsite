import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import VACProduct from './screens/VACProduct'
import Contact from './screens/Contact'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vac" element={<VACProduct />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  </Router>
)

export default App
