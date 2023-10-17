import React, { createContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  // const [isLogin, setIsLogin] = useState(!!JSON.parse(localStorage.getItem('user'))?.token)
  const [isLogin, setIsLogin] = useState(!!SecureStore.getItemAsync('user'))

  const logIn = () => {
    setIsLogin(true)
  }

  const logOut = async () => {
    setIsLogin(false)
    // localStorage.removeItem('user')
    await SecureStore.deleteItemAsync('user')
  }

  return (
    <AuthContext.Provider value={{ logIn, logOut, isLogin }}>
      { children }
    </AuthContext.Provider>
  )
}