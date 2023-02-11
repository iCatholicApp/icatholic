import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";
import Icon from "../Icons";

export default function WideButton(props) {
  const { text, body, bodyStyle, buttonStyle, textStyle, onPress } = props;

  return (
    <TouchableOpacity
      style={[buttonStyle, styles.container]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={[bodyStyle, styles.bodyStyle]}>{body}</View>
      <Text style={[textStyle, styles.buttonText]}>{text}</Text>
      <Icon type="ion" name="chevron-forward" size={16} />
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
  },
  buttonText: {
    fontSize: 16,
    // color: colors.neutral30,
    // fontWeight: "700",
  },
  bodyStyle: {},
});
