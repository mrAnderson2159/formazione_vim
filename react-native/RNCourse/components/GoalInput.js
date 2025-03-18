import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import { useState } from "react";

export default function GoalInput({ addGoalHandler, visibility, toggleModal }) {
    const [goal, setGoal] = useState("");

    const goalInputHandler = (text) => {
        setGoal(text);
    };

    const handleGoalAndClean = () => {
        addGoalHandler(goal);
        setGoal("");
        toggleModal();
    };

    return (
        <Modal visible={visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course Goal!"
                    onChangeText={goalInputHandler}
                    value={goal}
                />
                <View style={styles.buttons}>
                    <Button
                        style={styles.button}
                        onPress={toggleModal}
                        title="Cancel"
                        color="red"
                    />
                    <Button
                        style={styles.button}
                        onPress={handleGoalAndClean}
                        title="Add Goal"
                    />
                </View>
            </View>
        </Modal>
    );
}

const WIDTH = "70%";

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // per correggere il problema del testo in verticale, che però ormai non
        // si presenta più
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 16,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: WIDTH,
        marginTop: 16,
    },
    textInput: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
        width: WIDTH,
    },
    button: {
        verticalAlign: "middle",
    },
});
