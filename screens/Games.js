import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Games({ navigation }) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <Text style={styles.text}>Выбери игру</Text>
        <View>
          <Pressable onPress={() => navigation.navigate('FirstGame')}>
            <Image style={styles.image} source={require('../assets/cartom.jpg')} />
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A19',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      maxHeight: 100,
      maxWidth: 50,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 30,
  }
  });
