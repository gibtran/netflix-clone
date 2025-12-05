import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const App = () => {
  const [loading, setLoading] = useState(true); // trạng thái chờ xác thực
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
      if (user) {
        console.log("login")
        navigate('/')
      } else {
        console.log("logout")
        navigate('/login')
      }
      setLoading(false);
    } )
  }, [navigate])
  return (
    loading ? ((<div className='login-spinner'>
          <img src={netflix_spinner} alt="" />
        </div>)): 
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/player/:id' element={<Player/>}></Route>

      </Routes>
      
    </div>
  )
}

export default App
