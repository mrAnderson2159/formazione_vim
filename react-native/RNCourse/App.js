import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course Goal!"
                />
                <Button title="Add Goal" />
            </View>
            <View>
                <Text>Course Goals</Text>
                <View>
                    <Text>Goal 1</Text>
                    <Text>Goal 2</Text>
                    <Text>Goal 3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginRight: 10,
    },
});
