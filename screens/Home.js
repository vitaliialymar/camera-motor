import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Pressable, Image, View, TouchableOpacity, Text } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <Pressable
          style={styles.menuIcon}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="ios-menu" size={24} color="#FFE03D" />
        </Pressable>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Games')}}
            style={styles.button}
          >
            <Text style={styles.textBtn} >
              Начать игру
            </Text>
            <MaterialIcons  name={'play-arrow'} size={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A19',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    alignSelf: 'flex-start'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#36321D',
    borderColor: '#FFE03D',
    borderWidth: 3,
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
  },
  textBtn: {
    fontSize: 20,
    color: '#FFFFFF',
  }
})

  