import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { addUser } from './redux/slice/userSlice'
import { useEffect } from 'react'

const App = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        }));
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={
          user?.uid ? <Navigate to="/home" replace /> : <Login />
        } />
        <Route path="/home" element={
          user?.uid ? <Home /> : <Navigate to="/" replace />
        } />

        {/* unknown urls  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App