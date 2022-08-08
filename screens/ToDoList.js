import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default () => {
    return (<View style={styles.container}>
        <Text>ToDoList</Text>
         </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    icon: {
        padding: 5,
        fontSize: 32,
        color: "white",
    },
});