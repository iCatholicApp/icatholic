import React from "react";

import { StyleSheet, ScrollView, Text } from "react-native";
import { Card } from "../../components";
import colors from "../../theme/colors";

export default function PrayerScreen({ route }) {
  return (
    <ScrollView style={styles.container}>
      <Card style={{ marginBottom: 30 }}>
        <Text style={styles.prayerHeader}>{route.params.prayer.label}</Text>
        <Text style={styles.prayerBody}>{route.params.prayer.prayer}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    padding: 15,
  },
  prayerHeader: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
    color: colors.neutral800,
  },
  prayerBody: {
    fontSize: 18,
    color: colors.neutral700,
  },
});
