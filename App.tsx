import React,{useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {setUpTables, createList} from "./src/Queries"
export default function App() {
  
  useEffect(() => {
    setUpTables();
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity
            key={1}
            onPress={() => createList("testList", "best list ever")}
            style={{
              backgroundColor: "#fff",
              borderColor: "#000",
              borderWidth: 1,
              padding: 8
            }}
          >
            <Text style={{ color:  "#000" }}>make my list come true</Text>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
