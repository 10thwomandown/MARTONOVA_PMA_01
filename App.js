import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Item from "./src/components/Item.js";

export default function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleInputText(text) {
    setItem(text);
  }

  function deleteTaskItem(id) {
    console.log("Item delete pressed.");
    setTasks((currentTaskList) => {
      return currentTaskList.filter((task) => task.id !== id);
    });
  }

  function handleAddItem() {
    console.log("Item", item);
    setTasks([...tasks, { id: Date.now(), text: item }]);
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
      <Text>Udalosti</Text>
      <View style={styles.udalosti}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Item title={item} onDeleteItem={deleteTaskItem} />
          )}
          keyExtractor={(item) => item.id}
        />
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
