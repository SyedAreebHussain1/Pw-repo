import { Route, Routes, Navigate } from 'react-router-dom'
import DashboardMain from './pages/Dashboard/DashboardMain'
import Login from './pages/Login/Login'
import axios from 'axios'
import React, { useLayoutEffect } from 'react'
import { getFromStorage } from './utils/storage'
import { loginFailure, loginSuccess } from './redux/slices/Auth/LoginSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  // axios.defaults.baseURL = 'http://192.168.18.231:3000/V1/'
  // axios.defaults.baseURL = 'https://stagingbackend.propertywallet.pk/V1/'

  useLayoutEffect(() => {
    if (getFromStorage('userObject')) {
      dispatch(loginSuccess())
    } else {
      dispatch(loginFailure())
    }
  }, [dispatch])
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={!isAuth ? <Login /> : <Navigate to={'/dashboard'} />}
        />
        <Route
          path="/*"
          element={isAuth ? <DashboardMain /> : <Navigate to={'/'} />}
        />
      </Routes>
    </div>
  )
}
export default App
