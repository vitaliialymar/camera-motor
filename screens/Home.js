import { StyleSheet, Image, View, TouchableOpacity, Text, Dimensions } from 'react-native'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'

export default function Home({ navigation }) {
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
  )
  useEffect(() => {
    const getAuthHeader = () => {
      // const user = JSON.parse(localStorage.getItem('user'))
      const user = SecureStore.getItemAsync('user')
  
      if (user && user.token) {
        return { Authorization: user.token }
      }
  
      return {}
    }

    const checkToken = async () => {
      try {
        // await axios.get('http://localhost:3001/api/v1/auth',
        //   { headers: getAuthHeader() 
        // })
        getAuthHeader() 
      } catch (error) {
        console.error('Error checking token:', error)
        navigation.navigate('LoginScreen')
      }
    }
    checkToken()
  }, [navigation])

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
      )
    }

    Dimensions.addEventListener('change', updateOrientation)
    return () => {
      Dimensions.removeEventListener('change', updateOrientation)
    }
  }, [])

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <View style={{width: orientation === 'portrait' ? '60%': '26%', marginBottom: 35}}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Games')}}
            style={styles.button}
          >
            <Text style={styles.textBtn} >
              Играть
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonContainer: {
    width: '60%',
    marginBottom: 35
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#36321D',
    borderColor: '#FFE03D',
    borderWidth: 3,
    padding: 5,
    borderRadius: 24
  },
  textBtn: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})

  