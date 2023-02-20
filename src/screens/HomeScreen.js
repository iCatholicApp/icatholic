import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { TimeInput } from "../components";
import colors from "../theme/colors";

export default function HomeScreen() {
  console.log("time:");
  return (
    <ScrollView style={styles.container}>
      <Text>homescreen</Text>
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
