import { useState, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';

export default function ProgressBar({ progress, length }) {
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
      <Animated.View style={[styles.progressBar, { width: variabledWidth }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    borderRadius: 20,
    backgroundColor: '#36321D'
  },
  progressBar: {
    height: 20,
    borderRadius: 20,
    backgroundColor: '#FFE03D'
  },
})
