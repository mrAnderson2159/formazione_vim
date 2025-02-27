import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    {
        /* STUDIA LA LEZIONE SU FLEXBOX*/
    }
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course Goal!"
                />
                <Button style={styles.button} title="Add Goal" />
            </View>
            <View>
                <Text>Course Goals</Text>
                <View>
                    {["Goal 1", "Goal 2", "Goal 3"].map((goal) => (
                        <Text key={goal}>{goal}</Text>
                    ))}
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
    button: {
        verticalAlign: "middle",
    },
});
