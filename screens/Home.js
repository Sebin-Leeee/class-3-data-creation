import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  const [number, setNumber] = useState(1);

  const check = () => {
    if (number == 1) {
      console.log("ONE");
    } else if (number == 2) {
      navigation.push("About");
    }
    setNumber(number + 1);
  };

  return (
    <View style={styles.container}>
  
        <Button
          icon="camera"
          mode="contained"
          onPress={() => check()}
          style={
            number === 1
              ? styles.btnRed
              : number === 2
              ? styles.btnBlue
              : styles.btnGreen
          }
        >
          Press me
        </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnBlue: {
    alignItems: "center",
    backgroundColor: "#63C5DA",
    boderColor: "#63C5DA",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  btnGreen: {
    alignItems: "center",
    backgroundColor: "#00563B",
    boderColor: "#00563B",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  btnRed: {
    alignItems: "center",
    backgroundColor: "#800000",
    boderColor: "#800000",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});
