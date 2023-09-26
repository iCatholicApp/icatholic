import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";
import { Card, Icon, IconButton } from "../../components";
import colors from "../../theme/colors";

export default function ReminderScreen({ route }) {
  const navigation = useNavigation();
  const [reminders, setReminders] = useState([]);
  const [reminderToDelete, setReminderToDelete] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [removeReminder, setRemoveReminder] = useState(false);

  useEffect(() => {
    Notifications.getAllScheduledNotificationsAsync()
      .then((notificationPromises) => {
        const notificationList = notificationPromises.map((e) => ({
          id: e.identifier,
          title: e.content.title,
          body: e.content.body,
          data: e.content.data,
          frequency: e.trigger,
        }));
        return notificationList;
      })
      .then((idk) => idk.length !== reminders.length && setReminders(idk))
      .catch((error) => console.log("error with notify!", "\n", error));
  }, [reminders, removeReminder, route]);

  const handleDelete = async () => {
    setRemoveReminder(true);
    await Notifications.cancelScheduledNotificationAsync(reminderToDelete.id);
    setRemoveReminder(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={{ width: "100%", marginVertical: 15 }}>
        <Text style={{ fontSize: 18 }}>
          Create daily or weekly reminders to pray or do an examen to help build
          a better prayer life.
        </Text>
      </Card>

      {reminders.length > 0 &&
        reminders.map((reminder, i) => (
          <>
            <TouchableOpacity
              key={`${reminder.prayer}-${i}`}
              style={[styles.reminderItemStyles]}
              onPress={() => {
                setOpenDelete(true);
                setReminderToDelete(reminder);
              }}
              activeOpacity={0.6}
            >
              <View style={styles.buttonBodyStyle}>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "flex-start",
                      width: "100%",
                    },
                  ]}
                >
                  <Icon
                    style={{ paddingRight: 10 }}
                    type="fa5"
                    name="clock"
                    size={20}
                    color={colors.neutral700}
                  />
                  <Text numberOfLines={1} style={styles.labelStyles}>
                    {reminder.body}
                  </Text>
                </View>
                {openDelete && reminderToDelete === reminder && (
                  <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: colors.red,
                        paddingRight: 10,
                        fontSize: 24,
                        fontWeight: "600",
                      }}
                    >
                      Delete?
                    </Text>
                    <TouchableOpacity onPress={() => handleDelete()}>
                      <Text
                        style={{
                          fontSize: 24,
                          color: colors.neutral700,
                          fontWeight: "600",
                          paddingRight: 10,
                        }}
                      >
                        Yes
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setReminderToDelete()}>
                      <Text
                        style={{
                          fontSize: 24,
                          color: colors.neutral700,
                          fontWeight: "600",
                          paddingRight: 10,
                        }}
                      >
                        No
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </>
        ))}

      <IconButton
        type="ion"
        name="add-sharp"
        size={24}
        color={colors.primary}
        iconStyle={styles.createButtonIconStyle}
        labelStyles={styles.buttonLabelStyles}
        label="Add Reminder"
        buttonStyle={styles.createButtonStyle}
        onPress={() => {
          navigation.navigate("Create Reminder");
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonBodyStyle: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  reminderItemStyles: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: colors.neutral100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
  },
  labelStyles: {
    fontSize: 20,
    color: colors.neutral700,
    fontWeight: "600",
  },
  buttonLabelStyles: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
  },
  createButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.neutral100,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});
