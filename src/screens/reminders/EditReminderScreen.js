import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Button, Card, SelectInput } from "../../components";
import prayers from "../../constants/prayers";
import { frequency, Time } from "../../constants/reminders";
import colors from "../../theme/colors";
import * as Notifications from "expo-notifications";

// todo set up edit and save on changes

export default function EditReminderScreen({ route }) {
  const navigation = useNavigation();
  const prayerList = [...prayers, { label: "Examen", value: "examen" }];

  const reminder = route.params.reminder;

  const prayer1 = prayerList.find((prayer) => prayer.label === reminder.title);
  console.log("reminder", prayer1);

  const [freq, setFreq] = useState();
  const [time, setTime] = useState();
  const [prayer, setPrayer] = useState();

  const handleEdit = () => {};
  const handleDelete = async () => {
    await Notifications.cancelScheduledNotificationAsync(
      route.params.reminder.id
    );
    navigation.navigate("Reminders");
  };

  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={styles.header}>
          <View style={styles.body}>
            <Text style={styles.text}>Frequency</Text>
            <SelectInput
              options={frequency}
              placeholder="Select how often to pray"
              onPress={(selected) => setFreq(selected)}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Time</Text>
            <SelectInput
              options={Time}
              placeholder="Select when to pray"
              onPress={(selected) => setTime(selected)}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Prayer</Text>
            <SelectInput
              options={prayerList}
              placeholder="Select what to pray"
              value={prayer1}
              onPress={(selected) => setPrayer(selected)}
              // searchable
            />
          </View>
        </View>
        <View style={styles.footerStyles}>
          <Button
            buttonStyle={{ backgroundColor: colors.red500 }}
            text="Delete"
            type="primary"
            onPress={() => handleDelete()}
          />
          {/* <Button text="Save changes" onPress={() => handleEdit()} /> */}
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    paddingHorizontal: 15,
  },
  header: {
    marginBottom: 10,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: colors.neutral80,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: "20",
    marginTop: 4,
  },
  footerStyles: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    justifyContent: "flex-end",
  },
});
