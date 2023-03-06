import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WideButton } from "../components";
import colors from "../theme/colors";

export default function MoreScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="Settings"
        disabled={true}
        onPress={() => navigation.navigate("Settings")}
      />
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="Reminders"
        onPress={() => navigation.navigate("Reminders")}
      />
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="Catechism"
        onPress={() => navigation.navigate("")}
        disabled={true}
      />
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="Church Calendar"
        onPress={() => navigation.navigate("")}
        disabled={true}
      />
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="Mass Readings"
        onPress={() => navigation.navigate("")}
        disabled={true}
      />
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="Divine Office"
        onPress={() => navigation.navigate("")}
        disabled={true}
      />
      <WideButton
        buttonStyle={{ marginBottom: 15 }}
        text="About"
        onPress={() => navigation.navigate("About")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    padding: 15,
  },
});
