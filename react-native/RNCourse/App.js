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
        paddingHorizontal: 16,
        backgroundColor: "white",
        height: "100%",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // per correggere il problema del testo in verticale, che però ormai non
        // si presenta più
        paddingBottom: 16,
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
