import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import StartGamePage from "./src/pages/startGamePage";
import GamePage from "./src/pages/GamePage";

export default function App() {
    const [userNumber, setUserNumber] = useState(0);

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
                {!userNumber && <StartGamePage setUserNumber={setUserNumber} />}
                {userNumber !== 0 && <GamePage userNumber={userNumber} />}
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
