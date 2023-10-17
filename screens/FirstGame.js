import { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../data/firstGamedata'
import ProgressBar from '../components/ProgressBar'
import GameResult from '../components/GameResult'
import useGameStore from '../store'
import NextButton from '../components/NextBitton'
import QuizOptions from '../components/QuizOptions'
import QuizQustion from '../components/QuizQustion'

export default function FirstGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScore, setShowScore] = useState(false)
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
  )
  const addResult = useGameStore((state) => state.addResult)
  const isNotLastQuestion = (currentQuestion + 1) < data.length

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
      )
    }

    Dimensions.addEventListener('change', updateOrientation)
    return () => {
      Dimensions.removeEventListener('change', updateOrientation)
    }
  }, [])

  const nextQuestionHendler = () => {
    if (correctOption === currentOptionSelected) {
      setScore((prevScore) => prevScore + 1)
    }
    if (isNotLastQuestion) {
      setCurrentQuestion(currentQuestion + 1)
      setCurrentOptionSelected(null)
      setCorrectOption(null)
      setDisabled(false)
      setShowNextButton(false)
    } else {
      addResult({gameName: 'FirstGame', result: score})
      setShowScore(true)
    }
  }

  const answerHendler = (item) => {
    setCurrentOptionSelected(item)
    setCorrectOption(data[currentQuestion].answer)
    setDisabled(true)
    setShowNextButton(true)
  }

  const renderQuiz = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{ marginVertical: 16 }}>
          <ProgressBar progress={ currentQuestion } length={ data.length }/>
        </View>
          <QuizQustion orientation={orientation} data={data} index={currentQuestion}/>
        <QuizOptions orientation={orientation} data={data} index={currentQuestion} answer={correctOption} isRight={currentOptionSelected} disabled={disabled} answerHendler={answerHendler}/>
        <NextButton show={showNextButton} orientation={orientation} isLast={isNotLastQuestion} nextQuestionHendler={nextQuestionHendler}/>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
      { !showScore ? renderQuiz() : <GameResult score={ score }/>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A19',
    alignItems: 'center',
  }
})

