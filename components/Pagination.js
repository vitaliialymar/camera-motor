import { StyleSheet, Animated, View, Dimensions, Text} from 'react-native'

const {width} = Dimensions.get('screen')

export default function Pagination ({ data })  {
  return (
    <View style={styles.container}>
      <Text>Pagination</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
})