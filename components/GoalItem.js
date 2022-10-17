import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ itemText, itemId, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => onDeleteItem(itemId)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#8e4fff",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#e4d0ff"
  },
  goalText: {
    color: "white",
    padding: 12,
  },
});
export default GoalItem;
