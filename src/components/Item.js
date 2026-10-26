import { Text, Stylesheet, Pressable } from "react-native";

export default function Item({ title, onDeleteItem }) {
  return (
    <Pressable onPress={onDeleteItem}>
      <Text style={styles.tasksitem}>{title}</Text>
    </Pressable>
  );
}

const styles = Stylesheet.create({
  tasksitem: {
    backgroundColor: "#c568ff",
    margin: 5,
    fontSize: 20,
    color: "white",
  },
});
