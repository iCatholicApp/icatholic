import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, SelectInput } from "../components";
import prayers from "../constants/prayers";
import { frequency, Time } from "../constants/reminders";
import colors from "../theme/colors";

export default function CreateNotificationScreen() {
  const navigation = useNavigation();

  const [freq, setFreq] = useState();
  const [time, setTime] = useState();
  const [prayer, setPrayer] = useState();

  const prayerList = [...prayers, { label: "Examen", value: "examen" }];

  const handleCreate = () => {
    if (
      Object.values(freq).length &&
      Object.values(time).length &&
      Object.values(prayer).length
    ) {
      console.log("created!", Object.values(freq).length);
    } else {
      console.log("not filled out");
    }
  };

  return (
    <View style={styles.container}>
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
              onPress={(selected) => setPrayer(selected)}
              // searchable
            />
          </View>
        </View>
        <View style={styles.footerStyles}>
          <Button
            text="Cancel"
            type="secondary"
            textStyle={{ fontWeight: "bold" }}
            onPress={() => navigation.navigate("Notifications")}
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
    backgroundColor: colors.neutral95,
    padding: 15,
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
