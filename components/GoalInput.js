import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
  Pressable,
  Text,
} from "react-native";
import { motivationalQuotes } from "../data";

const GoalInput = ({
  onAddGoal,
  setGoalText,
  goalText,
  visible,
  toggleInputModal,
}) => {
  const [quote, setQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    setQuote(
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    );
  }, [visible]);

  function goalInputHandler(e) {
    setGoalText(e);
  }

  function addGoalHandler() {
    onAddGoal();
    toggleInputModal();
    setGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder={quote}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={toggleInputModal}>
            <View style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </Pressable>
          <Pressable onPress={addGoalHandler}>
            <View style={styles.addButton}>
              <Text style={styles.buttonText}>Add Goal</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
    paddingBottom: 250,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  cancelButton: {
    margin: 6,
    width: 100,
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: "#f31282",
    justifyContent: "center",
  },

  addButton: {
    margin: 6,
    width: 100,
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: "#5e0acc",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    padding: 10,
  },
});

export default GoalInput;
