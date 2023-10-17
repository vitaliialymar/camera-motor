import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default function SlideItem({ item, navigation }) {
    return (
      <View style={styles.container}>
        {/* <Pressable onPress={() => navigation.navigate(item.nav)}> */}
          <Image style={styles.image} source={item.img} />
          <Text style={styles.text} onPress={() => navigation.navigate(item.nav)}>{item.title}</Text>
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
      marginRight: 10
    },
    text: {
      color: '#FFFFFF',
      fontSize: 30,
      paddingVertical: 30,
  }
  });
