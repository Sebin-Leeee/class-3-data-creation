import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  const check = () => {
    navigation.push("About");
  };

  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => check()}
        style={styles.btn}
      >
        See Data
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
});
