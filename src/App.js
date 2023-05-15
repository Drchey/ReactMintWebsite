import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import VACProduct from './screens/VACProduct'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vac" element={<VACProduct />} />
    </Routes>
  </Router>
)

export default App
