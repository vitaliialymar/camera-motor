import { useState, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ProgressBar({ progress, length, navigation }) {
  const [ progressWidth ] = useState(new Animated.Value(0))
  
  useEffect(() => {
    Animated.timing(progressWidth, {
      toValue: progress,
      duration: 700,
      useNativeDriver: false,
    }).start()
  }, [progress, progressWidth])
  
  const variabledWidth = progressWidth.interpolate({
    inputRange: [0, length],
    outputRange: ['0%', '100%'],
  })
  
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <Animated.View style={[styles.progressBar, { width: variabledWidth }]} />
      </View>
      <Ionicons name="ios-close" size={30} color="#1C1C1E" onPress={() => navigation.navigate('Games')}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  progress: {
    width: '90%',
    height: 20,
    borderRadius: 24,
    backgroundColor: '#36321D'
  },
  progressBar: {
    height: 20,
    borderRadius: 24,
    backgroundColor: '#FFE03D'
  },
})
