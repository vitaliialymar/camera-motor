import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../data/firstGamedata'
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

export default function FirstGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScore, setShowScore] = useState(false)

  const nextQuestionHendler = () => {
    if ((currentQuestion + 1) < data.length) {
      setCurrentQuestion(currentQuestion + 1)
      setCurrentOptionSelected(null)
      setCorrectOption(null)
      setDisabled(false)
      setShowNextButton(false)
    } else {
      setShowScore(true)
    }
  }

  const answerHendler = (item) => {
    setCurrentOptionSelected(item)
    setCorrectOption(data[currentQuestion].answer)
    setDisabled(true)
    if (correctOption === currentOptionSelected) {
      setScore((prevScore) => prevScore + 1)
    }
    setShowNextButton(true)
  }

  const renderNextButton = () => {
    if(showNextButton) {
      return (
        <Button
          label={"Следующий вопрос"}
          onPress={() => nextQuestionHendler()}
          name="arrow-forward-ios" size={24} color="white" width={'100%'}
        />
      )
    } else {
      return null
    }
  }

  const renderQuestion = () => {
    return (
      <View style={{ marginVertical: 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={{color: '#FFFFFF', fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestion + 1}</Text>
          <Text style={{color: '#FFFFFF', fontSize: 18, opacity: 0.6}}>/ { data.length }</Text>
        </View>
          <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
            {data[currentQuestion].question}
          </Text>
      </View>
    )
  }

  const renderScore = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Твой результат {score}</Text>
      </View>
    )
  }

  const renderQuiz = () => {
    return (
      // <View style={styles.container}>
      <View>
        <ProgressBar progress={ currentQuestion } length={ data.length }/>
        { renderQuestion() }
        <View>
          {data[currentQuestion].options.map((item, idx) => {
            return <TouchableOpacity
              key={idx}
              style={{...styles.option, 
              borderColor: item === correctOption ? '#00C851'
              : item === currentOptionSelected ? '#ff4444' : '#FFE03D',
              backgroundColor: item==correctOption ? '#00C851' +'20'
              : item==currentOptionSelected ? '#ff4444' +'20' : '#36321D'
              }}
              disabled={disabled}
              onPress={() => answerHendler(item)}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          })}
        </View>
        { renderNextButton() }
      </View>
    )
  }
// style={{ flex: 1 }}
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
      { !showScore ? renderQuiz() :  renderScore() }
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A19',
    position:'relative'
  },
  option: {
    borderWidth: 3, 
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 20,
  }
});
