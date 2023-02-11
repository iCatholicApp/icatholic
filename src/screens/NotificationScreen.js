import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, IconButton, WideButton } from "../components";
import colors from "../theme/colors";

export default function NotificationScreen() {
  const navigation = useNavigation();

  const notifications = [
    {
      frequency: "Daily 9:00am",
      prayer: "Examen",
      enabled: true,
    },
  ];
  // todo: change button to '+ add notification'

  console.log("notifications:", notifications.length);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {notifications.length > 0 &&
        notifications.map((notification, i) => (
          <WideButton
            key={`${notification.prayer}-${i}`}
            buttonStyle={{ width: "100%" }}
            body={
              <View style={styles.buttonBodyStyle}>
                <Icon
                  style={{ paddingRight: 10 }}
                  type="fa5"
                  name="clock"
                  size={20}
                  color={colors.neutral30}
                />
                <Text style={styles.labelStyles}>
                  {notification.prayer} - {notification.frequency}
                </Text>
              </View>
            }
            bodyStyle={styles.buttonBodyStyle1}
            onPress={() => navigation.navigate("Edit Reminder")}
          />
        ))}
      <IconButton
        type="ion"
        name="add-sharp"
        // size={25}
        color={colors.neutral30}
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
    padding: 15,
    alignItems: "center",
  },
  buttonBodyStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyles: {
    fontSize: 16,
    color: colors.neutral30,
  },
  buttonLabelStyles: {
    color: colors.neutral30,
    fontSize: 16,
  },
  createButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    backgroundColor: colors.white,
    // height: 50,
    padding: 15,
    width: 170,
    borderRadius: 25,
  },
});
