import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";
import { Card, Icon, IconButton, WideButton } from "../../components";
import colors from "../../theme/colors";

export default function ReminderScreen() {
  const navigation = useNavigation();
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    Notifications.getAllScheduledNotificationsAsync()
      .then((notificationPromises) => {
        const notificationList = notificationPromises.map((e) => ({
          id: e.identifier,
          title: e.content.title,
          body: e.content.body,
          // data: e.content.data,
          frequency: e.trigger,
        }));
        return notificationList;
      })
      .then((idk) => setReminders(idk))
      .catch((error) => console.log("error with notify!", "\n", error));
  }, [reminders]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {reminders.length > 0 &&
        reminders.map((reminder, i) => (
          <WideButton
            key={`${reminder.prayer}-${i}`}
            buttonStyle={{ width: "100%", marginBottom: 15 }}
            body={
              <View style={styles.buttonBodyStyle}>
                <Icon
                  style={{ paddingRight: 10 }}
                  type="fa5"
                  name="clock"
                  size={20}
                  color={colors.neutral30}
                />
                <Text numberOfLines={1} style={styles.labelStyles}>
                  {reminder.body}
                </Text>
              </View>
            }
            bodyStyle={styles.buttonBodyStyle1}
            onPress={() => navigation.navigate("Edit Reminder", { reminder })}
          />
        ))}
      {reminders.length === 0 && (
        <Card style={{ width: "100%", marginBottom: 15 }}>
          <Text style={{ fontSize: 18 }}>
            Create daily or weekly reminders to pray or do an examen to help
            build a better prayer life.
          </Text>
        </Card>
      )}
      <IconButton
        type="ion"
        name="add-sharp"
        size={24}
        color={colors.blue400}
        iconStyle={styles.createButtonIconStyle}
        labelStyles={styles.buttonLabelStyles}
        label="Add Reminder"
        buttonStyle={styles.createButtonStyle}
        onPress={() => navigation.navigate("Create Reminder")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonBodyStyle: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyles: {
    fontSize: 20,
    color: colors.neutral30,
    fontWeight: "600",
  },
  buttonLabelStyles: {
    color: colors.blue400,
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
  },
  createButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});
