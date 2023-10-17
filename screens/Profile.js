import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import useGameStore from '../store'
import { AuthContext } from '../context/AuthContext'

export default function Profile() {
  const { logOut } = useContext(AuthContext)

  // const results = useGameStore((state) => state.userResults)
  console.log(results);
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <View>
          <Text style={styles.text}>Score</Text>
          {/* <View style={{flexDirection: 'row'}}>
            <View>
              {results.map((result) => {
                <Text style={styles.text}>{result.gameName}</Text>
              })}
            </View>
            <View>
              {results.map((result) => {
                <Text style={styles.text}>{result.result}</Text>
              })}
            </View>
          </View> */}
          <TouchableOpacity onPress={()=> logOut()}>
            <Text>Выйти</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A19',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30,
  }
})

  