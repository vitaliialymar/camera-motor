import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Games({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Выбери игру</Text>
        <View>
          <Pressable onPress={() => navigation.navigate('FirstGame')}>
            <Image style={styles.image} source={require('../assets/cartom.jpg')} />
          </Pressable>
        </View>
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
    image: {
      maxHeight: 100,
      maxWidth: 50,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 30,
  }
  });
