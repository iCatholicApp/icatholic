import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";
import Icon from "../Icons";

export default function WideButton(props) {
  const { text, body, bodyStyle, buttonStyle, textStyle, onPress, disabled } =
    props;

  return (
    <TouchableOpacity
      style={[
        buttonStyle,
        disabled ? styles.disabledContainer : styles.container,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
    >
      <View style={[bodyStyle, styles.bodyStyle]}>{body}</View>
      <Text
        style={[
          textStyle,
          disabled ? styles.disabledButtonText : styles.buttonText,
        ]}
      >
        {text}
      </Text>
      <Icon
        type="ion"
        name="chevron-forward"
        size={20}
        color={disabled ? colors.neutral80 : colors.neutral20}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 15,
    minHeight: 50,
    opacity: "50%",
  },
  disabledContainer: {
    backgroundColor: colors.neutral90,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 15,
    minHeight: 50,
    opacity: "50%",
  },
  disabledButtonText: {
    fontSize: 16,
    color: colors.neutral70,
  },
  buttonText: {
    fontSize: 16,
    // color: colors.neutral30,
    // fontWeight: "700",
  },
  bodyStyle: {},
});
