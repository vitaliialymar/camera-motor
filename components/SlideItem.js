import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function SlideItem({ item, navigation }) {
    return (
      <View style={{ marginHorizontal: 15, alignItems: 'center' }}>
        <Image style={{ borderRadius: 24 }} source={item.img} />
          <Text style={{fontSize: 18, color: '#999999', marginVertical: 10, textAlign: 'center'}} >{item.title}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(item.nav)}>
            <Text style={styles.text}>Начать</Text>
          </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    text: {
      color: '#FFFFFF',
      fontSize: 21,
      textAlign: 'center'
    },
    btn: {
      backgroundColor: '#36321D',
      borderColor: '#FFE03D',
      borderWidth: 3,
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 24,
      width: '60%'
    }
  })
