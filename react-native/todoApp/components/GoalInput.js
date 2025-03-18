import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image,
} from "react-native";
import { useState } from "react";
import goalImage from "../assets/images/goal.png";

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
                <Image source={goalImage} style={styles.image} />
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

        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 32,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: WIDTH,
        marginTop: 16,
    },
    textInput: {
        borderColor: "#ccc",
        color: "white",
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
        width: WIDTH,
    },
});
