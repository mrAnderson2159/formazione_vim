import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/elements/PrimaryButton";

export default function StartGamePage({ setUserNumber }) {
    const [enteredValue, setEnteredValue] = useState("");

    function numberInputHandler(inputText) {
        setEnteredValue((prevValue) => {
            if (!/^\d*$/.test(inputText)) return prevValue;

            return inputText;
        });
    }

    function confirmInputHandler() {
        const choseNumber = parseInt(enteredValue);

        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert(
                "Invalid number",
                "Number has to be between 1 and 99.",
                [
                    {
                        text: "Ok",
                        style: "destructive",
                        onPress: () => setEnteredValue(""),
                    },
                ]
            );
            return;
        }

        setUserNumber(choseNumber);
        setEnteredValue("");
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
                <PrimaryButton onPress={confirmInputHandler}>
                    Reset
                </PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#3b021f",
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
