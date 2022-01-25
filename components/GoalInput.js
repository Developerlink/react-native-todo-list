import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputView}>
        <TextInput
          value={enteredGoal}
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
        />
        {/* We use the arrow function to tell react that this should only be 
        excuted on press and not right away and therefore we can add the ()
        at the end without worry. Else it would execute right away after 
        rendering!
        Alternatively we can use the "bind" to add parameters, but then we would
        not be able to do more than one thing, like resetting the enteredGoal.
        It can be done like so: props.onPress.bind(this, enteredGoal);
    */}
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel.bind(this, false)}
              color="red"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={() => {
                props.onPress(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    width: "80%",
    height: 40,
    padding: 10,
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});
