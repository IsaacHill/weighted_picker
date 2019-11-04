import React,{useEffect, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import {getLists} from "./Queries";
import {ListContext} from "./ListContext"

const listItem = (data) => {
    const list = data.item.list;
    const navigation = data.item.navigation;
    return (
        <Button
          key={list.id}  
          title={`id: ${list.id} name: ${list.name} description: ${list.description}`}
          onPress={() => {
            navigation.navigate('List', {
              listId: list.id,
            });
          }}
        />)
}

export const Lists = ({navigation}) => {
    const {lists, setLists} =  useContext(ListContext);

    useEffect(() => {
        getLists().then((list_array) => {
            console.log(list_array, "heres my list boy!", []);
            setLists(list_array._array);
         });
    }, []);

    return (
        <FlatList 
        data={lists.map(l => {return {list:l, navigation:navigation}})}
        renderItem={list => listItem(list)} 
    />
    )
}