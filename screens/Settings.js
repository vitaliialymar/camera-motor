import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function Settings({ navigation }) {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#1A1A19',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={styles.text}>Настройки</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    }
  });
  