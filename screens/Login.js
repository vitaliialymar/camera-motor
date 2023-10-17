import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import axios from 'axios'
import { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import * as SecureStore from 'expo-secure-store'
import { Ionicons  } from '@expo/vector-icons'
import Input from '../components/Input'
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [authFailed, setAuthFailed] = useState(false)
  const { logIn } = useContext(AuthContext)

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
        <Text style={styles.header}>Войти</Text>
        <Input
          label={'Login'}
          icon={
            <Ionicons
            name="at-sharp"
            size={24}
            color="#FFE03D"
            style={{ marginRight: 5 }}
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
            style={{ marginRight: 5}}
            />
          }
          inputType="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity 
          style={{ 
            justifyContent: 'center',
            marginVertical: 12,
            backgroundColor: '#36321D',
            borderColor: '#FFE03D',
            borderWidth: 3,
            padding: 5,
            borderRadius: 24,
            marginHorizontal: '15%'
          }} 
          disabled={isSubmit} onPress={() => logInHandler(username, password)}>
          <Text style={{color: '#FFFFFF', fontSize: 20, textAlign: 'center'}}>Войти</Text>
        </TouchableOpacity>
        {authFailed && <Text style={{color: '#FF4444'}}>неверный имя или пароль</Text>}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 18,
          }}>
          <Text style={styles.text}>Нет аккаунта?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{color: '#FFE200', fontSize: 18}}> Регистрация</Text>
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
    fontSize: 36,
    color: '#FFE200',
    marginBottom: 25,
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
  }
})