import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function GoalInput({ addGoalHandler }) {
    const [goal, setGoal] = useState("");

    const goalInputHandler = (text) => {
        setGoal(text);
    };

    const handleGoalAndClean = () => {
        addGoalHandler(goal);
        setGoal("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course Goal!"
                onChangeText={goalInputHandler}
                value={goal}
            />
            <Button
                style={styles.button}
                onPress={handleGoalAndClean}
                title="Add Goal"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // per correggere il problema del testo in verticale, che però ormai non
        // si presenta più
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 16,
    },
    textInput: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
        width: "70%",
    },
    button: {
        verticalAlign: "middle",
    },
});
