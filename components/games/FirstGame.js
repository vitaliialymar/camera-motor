import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

export default function FirstGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questionsData = [
    {
      question: 'вопрос 1',
      options: ['1', '2', 'ответ', '4'],
      answer: 'ответ',
    }, 
    {
      question: 'вопрос 2',
      options: ['ответ', '2', '3', '4'],
      answer: 'ответ',
    }
  ]

  const nextQuestionHendler = () => {
    if ((currentQuestion + 1) < questionsData.length
    ) {
      setCurrentQuestion(currentQuestion + 1)
    }
  } 

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#1A1A19',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View>
        <Text style={styles.text}>{questionsData[currentQuestion].question}</Text>
        {questionsData[currentQuestion].options.map((item) => {
          return <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        })}
      </View>
      <Pressable onPress={nextQuestionHendler}>
          <Text style={styles.text}>Следующий вопрос</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    borderColor: '#FFE03D',
    borderWidth: 2,
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
  }
});
