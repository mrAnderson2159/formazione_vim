import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGamePage from "./src/pages/startGamePage";

export default function App() {
    return (
        <LinearGradient
            style={styles.container}
            colors={["#4e0329", "#ddb52f"]}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.container}
                imageStyle={styles.backgroundImage}
            >
                <StartGamePage />
                <StatusBar style="auto" />
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
