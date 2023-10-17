import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const {width, height} = Dimensions.get('window')

export default function SlideItem({ item, navigation }) {
    return (
      <View style={styles.container}>
        {/* <Pressable onPress={() => navigation.navigate(item.nav)}> */}
          <Image style={styles.image} source={item.img} />
          <Text style={{fontSize: 18, color: '#999999', marginVertical: 10}} >{item.title}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(item.nav)}>
            <Text style={styles.text}>Начать</Text>
          </TouchableOpacity>
          
        {/* </Pressable> */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    image: {
      height: height / 2,
      width: width / 3.1,
      marginRight: 10,
      objectFit: 'contain'
    },
    text: {
      color: '#FFFFFF',
      fontSize: 21,
    },
    btn: {
      justifyContent: 'center',
      backgroundColor: '#36321D',
      borderColor: '#FFE03D',
      borderWidth: 3,
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 24
    }
  })

  // height: '100%',
  // width: '100%',
  // marginRight: 10,
  // objectFit: 'contain'
