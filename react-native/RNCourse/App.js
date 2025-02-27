import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, marginBottom: 100 }}>
                Effettua il login
            </Text>{" "}
            {/* style={{ fontSize: 30 }}*/}
            <View>
                <Text style={textStyle}>Username</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        borderColor: "gray",
                        borderWidth: 1,
                    }}
                />
                <Text style={textStyle}>Password</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        borderColor: "gray",
                        borderWidth: 1,
                    }}
                />
                <Button title="Login" />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
    },
});

const textStyle = StyleSheet.create({
    fontSize: 30,
    marginBottom: 10,
});
