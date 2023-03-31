import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import Romcal from "romcal";
import { Canada_En } from "@romcal/calendar.canada";
import colors from "../theme/colors";
import { Card } from "../components";

export default function HomeScreen() {
  const { colors } = useTheme();

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
        <View style={styles.header}>
          <Text style={styles.title}>Good {timeString}!</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.subtitle}>Today is...</Text>
          <Text style={styles.date}>
            {currentDateTime.toLocaleDateString("en-CA", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Text style={styles.subtitle}>Or:</Text>
          {churchCalendar?.[0] && (
            <Text style={styles.title} key={churchCalendar[0]?.id}>
              {churchCalendar[0]?.name}
            </Text>
          )}
          {churchCalendar?.[1] && (
            <>
              <Text style={styles.subtitle}>Or:</Text>
              <Text style={styles.title} key={churchCalendar[1]?.id}>
                {churchCalendar[1]?.name}
              </Text>
            </>
          )}
          {churchCalendar?.[2] && (
            <>
              <Text style={styles.subtitle}>Or:</Text>
              <Text style={styles.title} key={churchCalendar[2]?.id}>
                {churchCalendar[2]?.name}
              </Text>
            </>
          )}
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
  header: {
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomColor: colors.neutral95,
    borderBottomWidth: 0.5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.neutral20,
    fontSize: 20,
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "",
    color: colors.neutral20,
    fontSize: 16,
    marginBottom: 10,
  },

  date: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.neutral20,
    fontSize: 20,
    marginBottom: 15,
  },
});
