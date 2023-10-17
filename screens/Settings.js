import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Settings({ navigation }) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <Text style={styles.text}>Настройки. Тут можно будет поменять тему интерфейса. Будет кнопка - удалить все результатф игр пользователя. Может это все перенесу в таб профиля</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    }
  });
  