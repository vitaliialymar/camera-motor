import { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { Ionicons  } from '@expo/vector-icons'
import { AuthContext } from '../context/AuthContext'
import Input from '../components/Input'

export default function SignInScreen ({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [isRegistred, setIsRegistred] = useState(false)
  const { logIn } = useContext(AuthContext)

  const signInHandler = async ( username, password ) => {
    const newUser = { username, password }
    setIsRegistred(false)
    setIsSubmit(true)
    try {
      // const { data } = await axios.post('http://localhost:3001/api/v1/signup', newUser)
      // localStorage.setItem('user', JSON.stringify(data))
      await SecureStore.setItemAsync('user', "data.token")
      logIn()
      navigation.navigate('Home')
    } catch (err) {
      if (err.isAxiosError && err.response.status === 409) {
        setIsRegistred(true)
        setIsSubmit(false)
        return
      }
      throw err
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
      <View style={{paddingHorizontal: 10, width: '100%'}}>
        <Text style={styles.header}>Регистрация</Text>
        <Input
          label={'Login'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#FFE03D"
              style={{marginRight: 5}}
            />
          }
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
        <Input
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#FFE03D"
              style={{ marginRight: 5}}
            />
          }
          inputType="password"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
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
          disabled={isSubmit}
          onPress={() => signInHandler(username, password)}>
          <Text style={{color: '#FFFFFF', fontSize: 20, textAlign: 'center'}}>Зарегистрироваться</Text>
        </TouchableOpacity>
        {isRegistred && <Text style={{color: '#FF4444'}}>Пользователь уже существует</Text>}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 18,
          }}>
          <Text style={styles.text}>Есть аккаунт?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#FFE200', fontSize: 18}}> Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
