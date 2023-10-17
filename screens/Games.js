import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import games from '../data/games'
import SlideItem from '../components/SlideItem'
import Pagination from '../components/Pagination'

export default function Games({ navigation }) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <Ionicons name="ios-arrow-back" 
          size={26} color="#1C1C1E"
          onPress={() => navigation.navigate('Home')}
          style={{alignSelf: 'flex-start', marginLeft: 16, marginTop: 16}}
          />
        <View>
          <Text style={styles.text}>Выбери игру</Text>
        </View>
        <View>
        <FlatList 
          data={games}
          style={{margin: 16}}
          renderItem={({item}) => <SlideItem item={item} navigation={navigation} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Pagination data={games}/>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFE200',
    fontSize: 36,
    paddingTop: 16,
    paddingBottom: 36
  }
});
