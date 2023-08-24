import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(!!JSON.parse(localStorage.getItem('user'))?.token)

  const logIn = () => {
    setIsLogin(true)
  }

  const logOut = () => {
    setIsLogin(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ logIn, logOut, isLogin }}>
      { children }
    </AuthContext.Provider>
  )
}