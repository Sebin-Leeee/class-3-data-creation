import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { bookStore } from "../data/books";
import { useState } from "react";
import { Avatar } from "react-native-paper";

export default function About({ navigation }) {
  const [data, setData] = useState();

  const addingData = () => {
    console.log("started");
    setData(bookStore);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the dashboard</Text>
      <View style={styles.icon}>
        <Avatar.Icon size={36} icon="folder" />
        <Button title="Show Data" onPress={() => addingData()} />
        {data &&
          data.books.map((b, index) => {
            if (b.category.toLowerCase() == "java") {
              return (
                <View key={index}>
                  <Text>{b.title}</Text>
                  {b.authors &&
                    b.authors.map((a, ind) => {
                      return (
                        <View key={ind}>
                          <Text>{a}</Text>
                        </View>
                      );
                    })}
                </View>
              );
            }
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 15
  },
});
