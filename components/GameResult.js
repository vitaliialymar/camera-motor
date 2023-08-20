import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function GameResult({ score }) {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Твой результат {score}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => { navigate('Games')}}
          style={styles.button}
        >
          <Text style={styles.text}>Выбрать</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigate('Home')}}
          style={styles.button}
        >
          <Text style={styles.text}>Вернуться</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    backgroundColor: '#36321D',
    borderColor: '#FFE03D',
    borderWidth: 3,
    padding: 15,
    borderRadius: 10,
    width: '45%'
  }
})