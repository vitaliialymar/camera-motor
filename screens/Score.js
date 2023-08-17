import { StyleSheet, Text, View } from 'react-native';

export default function Score() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#1A1A19',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
   
        <Text style={styles.text}>Score</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 30,
    }
  });
  