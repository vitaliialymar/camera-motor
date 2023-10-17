import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function NextButton({ show, orientation, isLast, nextQuestionHendler }) {
  if(show) {
    return (
      <View style={{ marginTop:  orientation === 'portrait' ? 24 : 0, paddingHorizontal: orientation === 'portrait' ? '20%' : '37%' }}>
        <TouchableOpacity
          onPress={nextQuestionHendler}
          style={styles.nextBtn}
        >
          <Text style={{ 
            fontSize: 24,
            color: '#FFFFFF',
            textAlign: 'center'
            }}
          >
            {isLast ? 'Следующий' : 'Результат'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  nextBtn: {
    justifyContent: 'center',
    backgroundColor: '#36321D',
    borderColor: '#FFE03D',
    borderWidth: 3,
    padding: 5,
    borderRadius: 24
  }
})
