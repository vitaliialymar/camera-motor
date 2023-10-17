import { StyleSheet, Text, View } from 'react-native'

export default function QuizQustion({ orientation, data, index }) {
  const orientationStyles = {
    marginHorizontal: orientation === 'portrait' ? 10 : 54,
    fontSize: orientation === 'portrait' ? 24 : 20
  }

  return (
    <View style={{
      marginHorizontal: orientationStyles.marginHorizontal,
      height: '40%'
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={{color: '#999999', fontSize: 24 }}>
          {index + 1}
        </Text>
        <Text style={{color: '#999999', fontSize: 20 }}>
          /{ data.length }
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
