import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#FFF",
    borderColor: "#2196F3",
    borderWidth: 2,
  },
  text: {
      color: "#2196F3"
  }
});
