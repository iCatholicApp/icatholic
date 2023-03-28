import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";
import Icon from "../Icons";

export default function ListItem(props) {
  const { text, style, textStyle, onPress, disabled } = props;

  return (
    <TouchableOpacity
      style={[style, disabled ? styles.disabledContainer : styles.container]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
    >
      <View>
        {text && (
          <Text
            numberOfLines={1}
            style={[textStyle, disabled ? styles.disabledtext : styles.text]}
          >
            {text}
          </Text>
        )}
      </View>

      <Icon
        type="ion"
        name="chevron-forward"
        size={16}
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
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.neutral90,
    marginTop: 10,
    paddingTop: 10,
  },
  disabledContainer: {
    backgroundColor: colors.neutral90,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disabledtext: {
    fontSize: 16,
    color: colors.neutral70,
  },
  text: {
    fontSize: 18,
    color: colors.neutral30,
  },
});
