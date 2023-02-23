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
              textStyle,
              disabled ? styles.disabledButtonText : styles.buttonText,
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
          color={disabled ? colors.neutral80 : colors.neutral20}
        />
      </View>
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
  containerIcon: {},
  disabledContainer: {
    backgroundColor: colors.neutral90,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 15,
    minHeight: 50,
  },
  disabledButtonText: {
    fontSize: 16,
    color: colors.neutral70,
  },
  buttonText: {
    fontSize: 20,
    color: colors.neutral20,
    fontWeight: "bold",
  },
  bodyStyle: {
    maxWidth: "85%",
  },
});
