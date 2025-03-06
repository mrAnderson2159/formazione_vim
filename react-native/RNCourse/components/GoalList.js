import { StyleSheet, Text, View, FlatList } from "react-native";

export default function GoalList({ goalList }) {
    return (
        <View style={styles.goalsContainer}>
            <Text>Course Goals</Text>
            <FlatList
                data={goalList}
                renderItem={(itemData) => (
                    <Text style={styles.goalItem}>{itemData.item}</Text>
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
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white",
    },
});
