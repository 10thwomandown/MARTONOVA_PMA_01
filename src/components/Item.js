import { Text, Stylesheet } from "react-native";

export default function Item({ title }) {
  return <Text style={styles.tasksitem}>{title}</Text>;
}

const styles = Stylesheet.create({
  tasksitem: {
    backgroundColor: "#c568ff",
    margin: 5,
    fontSize: 20,
    color: "white",
  },
});
