import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, SelectInput, TimeInput } from "../../components";
import prayers from "../../constants/prayers";
import colors from "../../theme/colors";
import * as Notifications from "expo-notifications";

export default function CreateReminderScreen() {
  const navigation = useNavigation();

  const [time, setTime] = useState(new Date());
  const [prayer, setPrayer] = useState();
  const [error, setError] = useState("");

  const prayerList = [...prayers, { label: "Examen", value: "examen" }];

  const handleCreate = async () => {
    if (Object.values(prayer).length) {
      await schedulePushNotification();
    } else {
      setError("Select a prayer to create a reminder");
    }
  };

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Your daily reminder to pray!`,
        body: `${prayer.label} at ${time.toLocaleTimeString("en-ca", {
          hour: "numeric",
          minute: "numeric",
        })}`,
        // data: { data: "goes here" },
        sound: "notification.wav",
      },
      trigger: {
        hour: time.getHours(),
        minute: time.getMinutes(),
        repeats: true,
      },
    });
    navigation.navigate("Reminders");
  }

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.header}>
          <View style={styles.body}>
            <Text style={styles.text}>Time</Text>
            <TimeInput
              value={time}
              onChange={(e, selected) => setTime(selected)}
            />
          </View>
          <View style={[styles.body, { paddingTop: 10 }]}>
            <Text style={styles.text}>Prayer</Text>
            <SelectInput
              options={prayerList}
              placeholder="Select what to pray"
              onPress={(selected) => {
                setPrayer(selected);
                setError("");
              }}
              // searchable
            />
          </View>
        </View>
        {error && (
          <View style={styles.errorMessage}>
            <Text style={styles.errorMessageText}>{error}</Text>
          </View>
        )}
        <View style={styles.footerStyles}>
          <Button
            text="Cancel"
            type="secondary"
            textStyle={{
              fontWeight: "bold",
              fontSize: "18",
              color: colors.red,
            }}
            onPress={() => navigation.navigate("Reminders")}
          />
          <Button
            textStyle={{ fontWeight: "bold" }}
            text="Create"
            onPress={() => handleCreate()}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  header: {
    marginBottom: 10,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    // borderBottomColor: colors.neutral300,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.neutral900,
  },
  footerStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorMessage: {
    paddingVertical: 10,
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 10,
    marginBottom: 10,
  },
  errorMessageText: {
    textAlign: "center",
    fontSize: 14,
    color: colors.red,
    fontWeight: "bold",
  },
});
