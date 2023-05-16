import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";

export default function Button(props) {
  const { buttonStyle, text, textStyle, onPress, type } = props;

  return (
    <TouchableOpacity
      style={[
        type === "secondary" ? styles.secondaryContainer : styles.container,
        buttonStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text
        style={[
          textStyle,
          type === "secondary" ? styles.secondaryButtonText : styles.buttonText,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 100,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  secondaryContainer: {
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  buttonText: {
    alignSelf: "center",
    color: colors.neutral100,
    fontSize: 18,
    fontWeight: "700",
  },
  secondaryButtonText: {
    alignSelf: "center",
    // color: colors.neutral700,
    fontSize: 18,
    fontWeight: "700",
  },
});
