import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Pressable, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'

export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={24} color="#FFE03D" />
        </Pressable>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <Button 
          label={"Начать игру"}
          onPress={() => { navigation.navigate('Games')}} 
          name={'play-arrow'}
          size={30}
          color={"white"}
        />
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A19',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuIcon: {
      position: 'absolute',
      top: 20,
      left: 20,
    },
  });
  