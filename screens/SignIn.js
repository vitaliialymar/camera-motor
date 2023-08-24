import { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
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
      const { data } = await axios.post('http://localhost:3001/api/v1/signup', newUser)
      localStorage.setItem('user', JSON.stringify(data))
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
        <Text style={styles.header}>Register</Text>
        <Input
          label={'Full Name'}
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
              style={{marginRight: 5}}
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
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
        />

        <TouchableOpacity onPress={() => signInHandler(username, password)}>
          <Text>Register</Text>
        </TouchableOpacity>
        {isRegistred && <Text>Пользователь уже существует</Text>}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={styles.text}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: "#FFE03D", fontWeight: '700', fontSize: 20}}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
