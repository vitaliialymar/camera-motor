import { StyleSheet, Text, View } from 'react-native';

export default function Score() {
    return (
      <View style={styles.container}>
   
        <Text style={styles.text}>Score</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A19',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    }
  });
  