import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {setUpTables, createList, getLists} from "./src/Queries"
import {Lists} from "./src/Lists"
import {Test} from "./src/Test"
import AddList from "./src/AddList"
import {ListProvider} from "./src/ListContext"
export default function App() {
  // const [lists, setLists] = useState([])
  useEffect(() => {
    console.log("why am i always running?");
    setUpTables();
  }, [])

  return (
    <ListProvider>
      <View style={styles.container}>
        <Lists/>
        <AddList/>
      </View>
    </ListProvider>
  );
}

// const listItem = (list: Object) => {
//   console.log("mien item",list)
//   return (<Text key={list.item.id}>id: {list.item.id} name: {list.item.name} description: {list.item.description}</Text>)
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
});

// const lists = await getLists();
// // console.log("my list object",lists)
// return (<FlatList
//     data={lists}
// >
//     renderItem={list => <Text>id: {list.id} name: {list.name}</Text>}
// </FlatList>)