import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import colors from "../theme/colors";
import { Card } from "../components";
import { getTodaysMassReadings } from "../helper/massReadings";

export default function MassReadings() {
  // const parser = new DOMParser();

  useEffect(() => {
    getTodaysMassReadings().then((response) => {
      // console.log("\n\nRESPONSE\n\n", JSON.stringify(response, null, 2));

      console.log("data\n", JSON.parse(response));
      // console.log("RESPONSEEE", response);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Card>
        <View>hi</View>
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
