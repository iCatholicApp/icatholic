import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WideButton } from "../components";
import colors from "../theme/colors";

export default function MoreScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <WideButton
        text="Reminders"
        onPress={() => navigation.navigate("Notifications")}
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
