import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import colors from "../theme/colors";

export default function CreateNotificationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Create Notification</Text>
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
