import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function QuizOptions({orientation, data, index, answer, isRight, disabled, answerHendler}) {
  const orientationStyles = {
    optoinWidth: orientation === 'portrait' ? '100%' : '45%',
    flexDirection: orientation === 'portrait' ? null : 'row',
    flexWrap: orientation === 'portrait' ? 'nowrap' : 'wrap',
    justifyContent: orientation === 'portrait' ? null : 'space-around'
  }

  return (
    <View style={{
      height: '26,8%',
      flexDirection: orientationStyles.flexDirection,
      flexWrap: orientationStyles.flexWrap,
      justifyContent: orientationStyles.justifyContent }}
    >
      {data[index].options.map((item, idx) => {
        return <TouchableOpacity
          key={idx}
          style={{...styles.option,
            width: orientationStyles.optoinWidth,
            borderColor: item === answer ? '#00C851'
            : item === isRight ? '#ff4444' : '#FFE03D',
            backgroundColor: item=== answer ? '#173120'
            : item === isRight ? '#38201F' : '#36321D'
          }}
          disabled={disabled}
          onPress={() => answerHendler(item)}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    borderWidth: 3,
    borderRadius: 24,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    padding: 7,
  }
})