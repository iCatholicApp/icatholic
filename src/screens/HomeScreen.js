import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import Romcal from "romcal";
import { Canada_En } from "@romcal/calendar.canada";

import colors from "../theme/colors";

export default function HomeScreen() {
  const romcal = new Romcal();

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
