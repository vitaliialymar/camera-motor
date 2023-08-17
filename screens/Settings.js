import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function Settings({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Настройки</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A19',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    }
  });
  