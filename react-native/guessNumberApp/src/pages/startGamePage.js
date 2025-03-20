import { StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/elements/PrimaryButton";

export default function StartGamePage() {
    const [enteredValue, setEnteredValue] = useState("");

    function numberInputHandler(inputText) {
        setEnteredValue((prevValue) => {
            if (!/^\d*$/.test(inputText)) return prevValue;

            return inputText;
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
                inputMode="numeric" // iOS only
                keyboardType="number-pad" // Android only
                autoCapitalize="none" // Not needed for numbers but just in case
                autoCorrect={false} // Not needed for numbers but just in case
            />
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
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 8, // Android only
        shadowColor: "#000", // iOS only
        shadowOffset: { width: 0, height: 2 }, // iOS only
        shadowOpacity: 0.25, // iOS only
        shadowRadius: 6, // iOS only
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8, // top and bottom
        fontWeight: "bold",
    },
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
