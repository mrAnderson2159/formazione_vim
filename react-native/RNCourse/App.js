import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
    // [f'goal {i+1}' for i in range(20)]
    const dummyGoals = [...Array(20)].map((_, i) => `Goal ${i + 1}`);

    const [goalList, setGoalList] = useState(dummyGoals);

    const addGoalHandler = (goal) => {
        setGoalList((goalList) => [...goalList, goal]);
    };

    const removeGoalHandler = (index) => {
        setGoalList((goalList) => goalList.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler} />
            <GoalList
                goalList={goalList}
                removeGoalHandler={removeGoalHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        paddingHorizontal: 16,
        backgroundColor: "white",
        // height: "100%", usiamo flex invece
        flex: 1,
    },
});
