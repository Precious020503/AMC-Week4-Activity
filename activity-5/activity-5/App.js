import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
{ id: '1', title: '1. Quiet Time' },
{ id: '2', title: '2. Cleaning the Bed' },
{ id: '3', title: '3. shower' },
{ id: '4', title: '4. Toothbrush' },
{ id: '5', title: '5. breakfast' },
{ id: '6', title: '6. taking a bath' },
{ id: '7', title: '7. lunch' },
{ id: '8', title: '8. reading' },
{ id: '9', title: '9. merienda' },
{ id: '10', title: '10. watching' },
{ id: '11', title: '11. do an activity' },
{ id: '12', title: '12. scrolling in social Media' },
];

type ItemProps = { title: string, id: string };

const getRandomColor = () => {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
};

const Item = ({ title, id }: ItemProps) => {
const [isSelected, setIsSelected] = useState(false);

const randomColor = getRandomColor(); // Generate a random color for each item

return (
<TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
<View
style={[styles.item, isSelected && { backgroundColor: 'lightgreen' }, { backgroundColor: randomColor }]}
>
<Text style={styles.title}>{title}</Text>
</View>
</TouchableOpacity>
);
};

const App = () => (
<SafeAreaProvider>
<SafeAreaView style={styles.container}>
<FlatList
data={DATA}
renderItem={({ item }) => <Item title={item.title} id={item.id} />}
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
padding: 20,
marginVertical: 8,
marginHorizontal: 20,
borderRadius: 5, // Optional: makes the items' edges round
},
title: {
fontSize: 18,
color: 'white', // White text for contrast with background colors
},
});

export default App;