import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import ToDoList from "./screens/ToDoList";



const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ToDo" component={Home}/>
        <Stack.Screen 
        name="ToDoList" 
        component={ToDoList}
        options={({ route }) => {
          return ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.color,
            }, 
            headerTintColor: "white",


          })
          

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
