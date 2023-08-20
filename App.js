import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigate from './Navigate'
// import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigate />
    </SafeAreaProvider>
  )
}
