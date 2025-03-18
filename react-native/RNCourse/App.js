import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
    // [f'goal {i+1}' for i in range(20)]
    const dummyGoals = [...Array(20)].map((_, i) => `Goal ${i + 1}`);

    const [goalList, setGoalList] = useState(dummyGoals);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const addGoalHandler = (goal) => {
        setGoalList((goalList) => [...goalList, goal]);
    };

    const removeGoalHandler = (index) => {
        setGoalList((goalList) => goalList.filter((_, i) => i !== index));
    };

    const toggleModal = () => {
        setIsModalVisible((isModalVisible) => !isModalVisible);
    };

    return (
        <View style={styles.appContainer}>
            <Button
                title="Add New Goal"
                color="#5e0acc"
                onPress={toggleModal}
            ></Button>
            <GoalInput
                addGoalHandler={addGoalHandler}
                visibility={isModalVisible}
                toggleModal={toggleModal}
            />
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
