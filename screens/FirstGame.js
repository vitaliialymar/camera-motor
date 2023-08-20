import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../data/firstGamedata'
import ProgressBar from '../components/ProgressBar'
import GameResult from '../components/GameResult'

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
  );

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
      );
    };

    Dimensions.addEventListener('change', updateOrientation);
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, [])

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
        <View>
        <TouchableOpacity
      onPress={nextQuestionHendler}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#36321D',
        borderColor: '#FFE03D',
        borderWidth: 3,
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '100%'
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#FFFFFF',
        }}>
        Следующий вопрос
      </Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    </TouchableOpacity>
    </View>
      )
    } else {
      return null
    }
  }

  const renderQuestion = () => {
    return (
      <View style={{ marginVertical: orientation === 'portrait' ? 40 : 20 }} >
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={{color: '#FFFFFF', fontSize: 20, opacity: 0.6}}>
            {currentQuestion + 1}
          </Text>
          <Text style={{color: '#FFFFFF', fontSize: 18, opacity: 0.6}}>
            / { data.length }
          </Text>
        </View>
        <View style={{height: '30%'}}>
        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
            {data[currentQuestion].question}
          </Text>
        </View>
      </View>
    )
  }

  const orientationStyles = {
    width: orientation === 'portrait' ? '100%' : '45%',
    flexDirection: orientation === 'portrait' ? null : 'row',
    flexWrap: orientation === 'portrait' ? 'nowrap' : 'wrap',
    justifyContent: orientation === 'portrait' ? 'center' : 'space-around'
  }

  const renderOptions = () => {
    return (
      <View style={{
        flexDirection: orientationStyles.flexDirection,
      flexWrap: orientationStyles.flexWrap,
      justifyContent: orientationStyles.justifyContent }}>
        {data[currentQuestion].options.map((item, idx) => {
          return <TouchableOpacity
            key={idx}
            style={{...styles.option,
              width: orientationStyles.width,
              borderColor: item === correctOption ? '#00C851'
              : item === currentOptionSelected ? '#ff4444' : '#FFE03D',
              backgroundColor: item==correctOption ? '#173120'
              : item==currentOptionSelected ? '#38201F' : '#36321D'
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

  const renderQuiz = () => {
    return (
      <View>
        <ProgressBar progress={ currentQuestion } length={ data.length }/>
        { renderQuestion() }
        { renderOptions() }
        { renderNextButton() }
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
    // position:'relative'
  },
  option: {
    borderWidth: 3,
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
    padding: 5,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

