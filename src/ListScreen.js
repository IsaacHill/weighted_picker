import React,{useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
export function ListScreen(props) {
    // const [lists, setLists] = useState([])
    const {navigation} = props
    useEffect(() => {
      let id = JSON.stringify(navigation.getParam('listId', 'NO-ID'))
    }, [navigation])
  
    return (
     <Text>wowie here i am</Text>
    );
  }
