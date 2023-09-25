import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../theme/colors";

export default function ConfirmEmailScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>ConfirmEmailScreen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    padding: 15,
  },
});
