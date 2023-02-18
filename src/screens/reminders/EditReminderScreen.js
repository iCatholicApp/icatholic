import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Button, Card } from "../../components";
import colors from "../../theme/colors";

export default function EditReminderScreen() {
  const navigation = useNavigation();

  const handleCreate = () => {};

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text>Edit Reminder screen </Text>
        <View style={styles.footerStyles}>
          <Button
            text="Cancel"
            type="secondary"
            onPress={() => navigation.navigate("Reminders")}
          />
          <Button text="Save" onPress={() => handleCreate()} />
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
