import React,{useEffect,useState, Children} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {setUpTables, createList, getLists} from "./src/Queries"
import {Lists} from "./src/Lists"
import {Test} from "./src/Test"
import AddList from "./src/AddList"
import {ListProvider} from "./src/ListContext"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ListsScreen } from './src/ListsScreen';
import { ListScreen } from './src/ListScreen'



const App = createStackNavigator(
  {
    Lists:  ListsScreen,
    List: ListScreen
  }, 
  {
    initialRouteName: 'Lists'
  }
);

export default createAppContainer(App);

