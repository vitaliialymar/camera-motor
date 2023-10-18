import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import games from '../data/games'
import SlideItem from '../components/SlideItem'

export default function Games({ navigation }) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <Ionicons name="ios-arrow-back" 
          size={30} color="#1C1C1E"
          onPress={() => navigation.navigate('Home')}
          style={{alignSelf: 'flex-start', marginTop: 16}}
          />
        <View>
          <Text style={styles.text}>Выбери игру</Text>
        </View>
        <View style={{ width: '100%'}}>
        <FlatList 
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <SlideItem item={item} navigation={navigation} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  text: {
    color: '#EFEFF1',
    fontSize: 21,
    paddingTop: 15,
    paddingBottom: 30
  }
})

