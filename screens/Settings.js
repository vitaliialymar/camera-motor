import { StyleSheet, Text, Switch, View, Alert } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
      <Text style={styles.text}>Настройки</Text>
        <View style={styles.optionsContainer}>
          <Text style={{fontSize: 18, color: '#EFEFF1', fontWeight: '600'}}>Общие</Text>
          <View style={styles.options}>
            <View style={styles.option}>
              <Text style={{fontSize: 16, color: '#EFEFF1'}}>Светлая тема</Text>
              <Switch
                trackColor={{false: '#1C1C1E', true: '#36321D'}}
                thumbColor={isEnabled ? '#FFE03D' : '#48484A'}
                ios_backgroundColor="#FFE03D"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={styles.option}>
              <Text style={{fontSize: 16, color: '#EFEFF1'}}>Язык</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#48484A'}}>Русский</Text>
                <Ionicons name="ios-chevron-forward-outline" size={24} color="#48484A" />
              </View>
            </View>
            <View style={styles.option}>
              <Text style={{fontSize: 16, color: '#EFEFF1'}}>Удалить данные об играх</Text>
              <Ionicons name="ios-chevron-forward-outline" size={24} color="#48484A" 
              onPress={() => {Alert.alert('Удалить данные', 'Уверены?', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ])}
          }/>
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  text: {
    color: '#EFEFF1',
    fontSize: 24,
    marginTop: 16
  },
  optionsContainer: {
    borderRadius: 24,
    backgroundColor: '#09090A',
    // flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginVertical: 20,
    flexDirection: 'column'
  },
  options: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 16
  },
  option: {
    marginBottom: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

  