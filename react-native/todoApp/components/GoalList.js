import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";

export default function GoalList({ goalList, removeGoalHandler }) {
    return (
        <View style={styles.goalsContainer}>
            <Text>Course Goals</Text>
            <FlatList
                data={goalList}
                renderItem={(itemData) => (
                    <GoalItem
                        goal={itemData.item}
                        clickHandler={() => removeGoalHandler(itemData.index)}
                    />
                )}
                alwaysBounceVertical={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
    },
});
