import { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function toggleInputModal() {
    setModalIsVisible(!modalIsVisible);
  }

  function addGoalHandler() {
    if (goalText.length > 1) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: goalText, id: Math.random().toString() },
      ]);
      Keyboard.dismiss();
    }
  }

  function deleteGoalHandler(goalId) {
    setGoals(goals.filter((goal) => goal.id !== goalId));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Pressable onPress={toggleInputModal}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>ADD NEW GOAL</Text>
          </View>
        </Pressable>
        <GoalInput
          goalText={goalText}
          setGoalText={setGoalText}
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          toggleInputModal={toggleInputModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemText={itemData.item.text}
                  itemId={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
  addButton: {
    margin: 6,
    width: "100%",
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: "#5e0acc",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    padding: 16,
  },
});
