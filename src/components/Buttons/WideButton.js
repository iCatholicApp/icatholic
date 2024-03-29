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
      <View style={[bodyStyle, styles.bodyStyle]}>
        {body}
        {text && (
          <Text
            numberOfLines={1}
            style={[
              disabled ? styles.disabledButtonText : styles.buttonText,
              textStyle,
            ]}
          >
            {text}
          </Text>
        )}
      </View>
      <View style={styles.containerIcon}>
        <Icon
          type="ion"
          name="chevron-forward"
          size={24}
          color={disabled ? colors.neutral700 : colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral100,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 15,
    minHeight: 50,
  },
  containerIcon: {},
  disabledContainer: {
    backgroundColor: colors.neutral300,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 15,
    minHeight: 50,
  },
  disabledButtonText: {
    fontSize: 16,
    color: colors.neutral800,
  },
  buttonText: {
    fontSize: 20,
    color: colors.neutral900,
    fontWeight: "bold",
  },
  bodyStyle: {
    maxWidth: "85%",
  },
});
