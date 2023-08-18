import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../data/firstGamedata'
import Button from '../components/Button';

export default function FirstGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const nextQuestionHendler = () => {
    if ((currentQuestion + 1) < data.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true)
    }
  }

  const answerHendler = (item) => {
    if (data[currentQuestion].answer === item) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  return ( !showScore ? 
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
      <View>
        <Text style={{...styles.text, marginBottom: 50}}>{data[currentQuestion].question}</Text>
      </View>
      <View style={{ width: '100%' }}>
        {data[currentQuestion].options.map((item, idx) => {
          return <TouchableOpacity
                  key={idx}
                  style={styles.option}
                  onPress={() => answerHendler(item)}
                 >
                  <Text style={styles.text}>{item}</Text>
                 </TouchableOpacity>
        })}
      </View>
      <Button label={"Следующий вопрос"} onPress={() => nextQuestionHendler()} />
    </SafeAreaView>
   : <View style={styles.container}>
   <Text style={styles.text}>Твой результат {score}</Text>
 </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A19',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    borderColor: '#FFE03D',
    borderWidth: 3, 
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  btn: {
    width: '100%',
    borderColor: '#FFE03D',
    backgroundColor: '#36321D',
    borderWidth: 3,
    marginTop: 50,
    padding: 20,
    borderRadius: 5
}
});
