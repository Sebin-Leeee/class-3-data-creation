import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { bookStore } from "../data/books";
import { useState } from "react";
import { Avatar } from "react-native-paper";
import { Button } from 'react-native-paper';

export default function About({ navigation }) {
  const [data, setData] = useState();
  const [dataTwo, setDataTwo] = useState();

  const addingData = () => {
    setData(bookStore);
  };

  const addingDataTwo = () => {
    setDataTwo(bookStore);
  };

  return (
    <View style={styles.container}>
      <Avatar.Icon size={48} icon="folder" />
      <Text style={styles.title} >Click the button to see data</Text>
      <View style={styles.icon}>
        <Button style={styles.button} mode="elevated" onPress={() => addingData()}>Java</Button>
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

      <View style={styles.icon}>
        <Button style={styles.button} mode="contained-tonal" onPress={() => addingDataTwo()}>OOP</Button>
        {dataTwo &&
          dataTwo.books.map((c, index) => {
            if (c.category.toLowerCase() == "oop") {
              return (
                <View key={index}>
                  <Text>{c.title}</Text>
                  {c.authors &&
                    c.authors.map((d, ind) => {
                      return (
                        <View key={ind}>
                          <Text>{d}</Text>
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
    rowGap: 20,
  },
  title:{
    fontSize: 18,
  },
  button: {
    width: 100,
  },
  icon : {
    display : "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  }
});
