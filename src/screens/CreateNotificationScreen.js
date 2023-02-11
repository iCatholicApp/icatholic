import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Button, Card } from "../components";
import colors from "../theme/colors";

export default function CreateNotificationScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text>Create Reminder</Text>
        <View style={styles.footerStyles}>
          <Button
            text="Cancel"
            type="secondary"
            onPress={() => navigation.navigate("Notifications")}
          />
          <Button text="Create" onPress={() => handleCreate()} />
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    padding: 15,
  },
  footerStyles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
