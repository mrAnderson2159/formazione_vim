import { StyleSheet, TextInput, View, Text } from "react-native";
import PrimaryButton from "../components/elements/PrimaryButton";

export default function StartGamePage() {
    return (
        <View style={styles.container}>
            <TextInput />
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#72063c",
        borderRadius: 8,
        elevation: 8, // Android only
        shadowColor: "#000", // iOS only
        shadowOffset: { width: 0, height: 2 }, // iOS only
        shadowOpacity: 0.25, // iOS only
        shadowRadius: 6, // iOS only
    },
    buttonsContainer: {},
});
