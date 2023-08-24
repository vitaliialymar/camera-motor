import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Navigate from './navigation/Navigate'
import { AuthProvider } from './context/AuthContext'
// import { StatusBar } from 'expo-status-bar'

export default function App({}) {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigate />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  )
}
