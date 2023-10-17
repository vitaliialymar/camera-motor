import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import games from '../data/games'
import SlideItem from '../components/SlideItem';
import Pagination from '../components/Pagination';

export default function Games({ navigation }) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right', 'top']}>
        <View>
          <Text style={styles.text}>Выбери игру</Text>
        </View>
        <View>
        <FlatList 
          data={games}
          style={{margin: 16}}
          renderItem={({item}) => <SlideItem item={item} navigation={navigation}/>}
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
    backgroundColor: '#1A1A19',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFE200',
    fontSize: 36,
    paddingTop: 32,
    paddingBottom: 36
  }
});
