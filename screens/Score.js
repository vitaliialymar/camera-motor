import { StyleSheet, Text } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Score() {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <Text style={styles.text}>Score</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A19',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    }
  });
  