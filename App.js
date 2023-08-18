import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigate from './Navigate';
// import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
        <Navigate />
    </SafeAreaProvider>
  );
}

