import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleInputText(text) {
    setItem(text);
  }

  function handleAddItem() {
    console.log("Item", item);
    setTasks([...tasks, item]);
    console.log("Tasks", tasks);
    setItem("");
  }

  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Violent Youth"
        />
        <Button onPress={handleAddItem} title="ADD" />
      </View>
      <View style={styles.udalosti}>
        <Text>
          {tasks.map((i) => (
            <Text>{i}</Text>
          ))}
        </Text>
        <Text>Udalosti</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
    borderWidth: 4,
    flex: 1,
    backgroundColor: "#c568ff",
    color: "white",
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "Violet",
  },
  inputContainer: {
    marginTop: 45,
    margin: 2,
    borderWidth: 1,
    backgroundColor: "#531f93",
    textColor: "white",
    flex: 1,
  },
  udalosti: {
    margin: 2,
    borderWidth: 1,
    backgroundColor: "#681f93",
    textColor: "white",
    flex: 1,
    marginBottom: 55,
  },
});
