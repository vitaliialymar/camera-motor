import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import useGameStore from '../store'
import { AuthContext } from '../context/AuthContext'

export default function Profile() {
  const { logOut } = useContext(AuthContext)

  // const results = useGameStore((state) => state.userResults)
  // console.log(results);
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}> 
        <View>
          <Text style={styles.text}>Профиль</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=> logOut()}>
          <Text style={{color: '#FFFFFF', fontSize: 21, textAlign: 'center'}}>Выйти</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#EFEFF1',
    fontSize: 24,
    marginTop: 16
  },
  btn: {
    backgroundColor: '#36321D',
    borderColor: '#FFE03D',
    borderWidth: 3,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 24,
    width: '60%'
  }
})

  