import { StyleSheet, Text, Pressable, View } from "react-native";
import { useEffect } from "react";

export default function GoalItem({ goal, clickHandler }) {
    return (
        <View style={styles.goalContainer}>
            <Pressable
                onPress={clickHandler}
                android_ripple={{ color: "#ddd" }}
            >
                <Text style={styles.goalItem}>{goal}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalContainer: {
        backgroundColor: "#5e0acc",
        borderRadius: 6,
        margin: 8,
        padding: 8,
    },
    goalItem: {
        color: "white",
    },
});
