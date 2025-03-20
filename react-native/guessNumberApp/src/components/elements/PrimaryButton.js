import { StyleSheet, Pressable, View, Text } from "react-native";

export default function PrimaryButton({ onPress, children }) {
    /*
    Il seguente codice non permette di visualizzare l'effetto ripple su Android
    perché il pressable è all'esterno del view. Per farlo funzionare, bisogna
    spostare il pressable all'interno del view.
    
    <Pressable onPress={onPress} android_ripple={{ color: "#640233" }}>
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    </Pressable>
    */
    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={styles.innerContainer}
                onPress={onPress}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    innerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    // container: {
    //     backgroundColor: "#72063c",
    //     borderRadius: 28,
    //     paddingVertical: 8,
    //     paddingHorizontal: 16,
    //     elevation: 2,
    // },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});
