import React,{useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {setUpTables} from "./Queries"
import {Lists} from "./Lists"
import AddList from "./AddList"
import {ListProvider} from "./ListContext"

export function ListsScreen({navigation}) {
  // const [lists, setLists] = useState([])
  useEffect(() => {
    console.log("why am i always running?");
    setUpTables();
  }, [])

  return (
    <ListProvider>
      <View style={styles.container}>
        <Lists navigation={navigation}/>
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

export default ListsScreen

// const lists = await getLists();
// // console.log("my list object",lists)
// return (<FlatList
//     data={lists}
// >
//     renderItem={list => <Text>id: {list.id} name: {list.name}</Text>}
// </FlatList>)