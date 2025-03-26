import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GamePage({ userNumber }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Game Page!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "white",
    },
});
