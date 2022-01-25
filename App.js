import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (value) => {
    console.log("testing");
    if (value.length === 0) return;
    setCourseGoals((prevState) => [
      ...prevState,
      { id: Math.random().toString(), value: value },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      </View>
      <GoalInput
        visible={isAddMode}
        onPress={addGoalHandler}
        onCancel={setIsAddMode}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  addButton: {
    marginBottom: 10,
  },
});
