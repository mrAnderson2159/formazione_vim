import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world!</Text>
            <Text style={styles.text}>Welcome to React Native!</Text>
            <Button title="Press me" onPress={() => alert("Button pressed")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
    },
});
