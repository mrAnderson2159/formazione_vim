import { StyleSheet, Text, Pressable } from "react-native";
import { use, useEffect } from "react";

export default function GoalItem({ goal, clickHandler }) {
    return (
        <Pressable onPress={clickHandler} android_ripple={{ color: "#ddd" }}>
            <Text style={styles.goalItem}>{goal}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white",
    },
});
