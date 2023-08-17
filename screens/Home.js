import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <Pressable onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={24} color="black" />
        </Pressable>
      }
    })
  })
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>CameraMotor Quiz</Text>
        <Pressable style={styles.btn} onPress={() => { navigation.navigate('Games')}}>
          <Text style={styles.text}>Начать игру</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A19',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    btn: {
      flex: 2,
      justifyContent: 'center',
    },
    h1: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#FFE03D',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    },
  });
  