import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* undefined urls  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App