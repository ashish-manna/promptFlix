import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App