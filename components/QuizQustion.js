import { StyleSheet, Text, View } from 'react-native'

export default function QuizQustion({ orientation, data, index }) {
  const orientationStyles = {
    marginHorizontal: orientation === 'portrait' ? 10 : 54,
    fontSize: orientation === 'portrait' ? 21 : 18
  }

  return (
    <View style={{
      marginHorizontal: orientationStyles.marginHorizontal,
      height: '37%'
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{color: '#999999', fontSize: 22 }}>
          {index + 1}/
        </Text>
        <Text style={{color: '#999999', fontSize: 20 }}>
          { data.length }
        </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={{ color: '#FFFFFF', fontSize: orientationStyles.fontSize }}>
          {data[index].question}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2
  }
})
