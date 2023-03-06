import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Romcal from "romcal";
import { Canada_En } from "@romcal/calendar.canada";
import colors from "../theme/colors";
import { Card } from "../components";

export default function HomeScreen() {
  const currentDateTime = new Date();
  const dateTimeStringForChurchCalendar = `${currentDateTime.getFullYear()}-${(
    "0" +
    (currentDateTime.getMonth() + 1)
  ).slice(-2)}-${("0" + currentDateTime.getDate()).slice(-2)}`;

  const currentHour = currentDateTime.getHours();
  const timeString =
    currentHour > 12 ? (currentHour > 18 ? "Evening" : "Afternoon") : "Morning";

  const [churchCalendar, setChurchCalendar] = useState({});
  const romcal = new Romcal({
    localizedCalendar: Canada_En,
    epiphanyOnSunday: true,
  });

  useEffect(() => {
    romcal
      .generateCalendar(2023)
      .then((data) => setChurchCalendar(data[dateTimeStringForChurchCalendar]));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Card>
        <View>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Good {timeString} Friend!
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            Today's Feast
          </Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: colors.neutral98,
              padding: 10,
              borderRadius: 10,
            }}
          >
            {churchCalendar?.[0] && (
              <Text key={churchCalendar[0]?.id}>{churchCalendar[0]?.name}</Text>
            )}
            {churchCalendar?.[1] && (
              <Text key={churchCalendar[1]?.id}>
                Or: {churchCalendar[1]?.name}
              </Text>
            )}
            {churchCalendar?.[2] && (
              <Text key={churchCalendar[2]?.id}>
                Or: {churchCalendar[2]?.name}
              </Text>
            )}
          </View>
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
});
