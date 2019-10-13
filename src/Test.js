import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {getLists} from "./Queries";

const listItem = (list) => {
    return (
        <Text key={list.item.id}>
            id: {list.item.id} name: {list.item.name} description: {list.item.description}
        </Text>)
}

export const Test = () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        getLists().then((list_array) => {
            console.log(list_array, "heres my list boy!", []);
            setLists(list_array._array);
         });
    }, []);

    return (
        <FlatList 
        data={lists}
        renderItem={list => listItem(list)} 
    />
    )
}

// <FlatList 
//         data={lists}
//         renderItem={list => listItem(list)} 
//     />
