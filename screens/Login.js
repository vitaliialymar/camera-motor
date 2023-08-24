import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import axios from 'axios'
import { useContext, useState, useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import * as SecureStore from 'expo-secure-store'
import { MaterialIcons, Ionicons  } from '@expo/vector-icons'
import Input from '../components/Input'
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [authFailed, setAuthFailed] = useState(false)
  const inputRef = useRef(null)
  const { logIn } = useContext(AuthContext)

  useEffect(() => {
    // inputRef.focus()
  }, [isSubmit])

  const logInHandler = async (username, password) => {
    setAuthFailed(false)
    setIsSubmit(true)
    setUsername('')
    setPassword('')
    try {
      const { data } = await axios.post('http://localhost:3001/api/v1/login', { username, password })
      localStorage.setItem('user', JSON.stringify(data))
      // await SecureStore.setItemAsync('user', data.token)
      logIn()
      navigation.navigate('Home')
    } catch (err) {
      if (err.isAxiosError && err.response.status === 401) {
        setAuthFailed(true)
        setIsSubmit(false)
        return
      }
      throw err
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
      <View style={{paddingHorizontal: 10, width: '100%'}}>
        <Text style={styles.header}>Login</Text>
        <Input
          label={'Login'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#FFE03D"
            style={{marginRight: 5}}
            ref={inputRef}
            />
          }
          keyboardType="email-address"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        <Input
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#FFE03D"
            style={{marginRight: 5}}
            />
          }
          inputType="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity disabled={isSubmit} onPress={() => logInHandler(username, password)}>
          <Text>Login</Text>
        </TouchableOpacity>
        {authFailed && <Text>неверный имя или пароль</Text>}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={styles.text}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{color: '#FFE03D', fontWeight: '700', fontSize: 20}}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A19',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  }
})