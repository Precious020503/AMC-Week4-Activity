import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const routine = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Morning Routine ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Quiet time',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ligpit ng higaan',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Shower',
  },

  {
    title: 'Toothbrush'
  },

  {
    title: 'Breakfast'
  },
 
 {
    title: 'Afternoon'
  },

  {
    title: 'Lunch'
  },
  
  {
    title: 'Reading'
  },

  {
    title: 'Merienda'
  },

  {
    title: 'Watching'
  },

  {
    title: 'Do an activity'
  },

  {
    title: 'Playing with my siblings'
  },

{
    title: 'Evening Routine'
  },
{
    title: 'watching reels'
  },

   {
    title: 'Scrolling in instagram'
  },
 
 {
    title: 'Dinner'
  },

  {
    title: 'Playing offline games with my brother'
  },

  {
    title: 'preparing the bed'
  },

  {
    title: 'watching tv'
  },

  {
    title: 'MidnightSnacks'
  },

  {
    title: 'Reading Lessons'
  },

  {
    title: 'Prayer'
  },

  {
    title: 'Reading Bible'
  },

  {
    title: 'Sleeping time'
  },
];




type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
 
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={routine}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'silver',
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;