import { StyleSheet, Pressable, View, Text } from "react-native";

export default function PrimaryButton({ onPress, children }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {},
    text: {},
});
