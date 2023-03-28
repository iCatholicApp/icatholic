import React from "react";

import { StyleSheet, ScrollView, Text } from "react-native";
import { Card } from "../../components";
import colors from "../../theme/colors";

export default function PrayerScreen({ route }) {
  return (
    <ScrollView style={styles.container}>
      <Card style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 22,
            marginBottom: 10,
            fontWeight: "bold",
            color: colors.neutral30,
          }}
        >
          {route.params.prayer.label}
        </Text>
        <Text style={{ fontSize: 18, color: colors.neutral40 }}>
          {route.params.prayer.prayer}
        </Text>
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
