import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../Icons";

export default function IconButton(props) {
  const {
    size,
    name,
    iconStyle,
    buttonStyle,
    type,
    color,
    label,
    labelStyles,
    onPress,
  } = props;
  return (
    <View style={{ minHeight: size, minWidth: size }}>
      <TouchableOpacity
        style={[buttonStyle, { flexDirection: "row" }]}
        onPress={onPress}
        activeOpacity={0.6}
      >
        <Icon
          type={type}
          name={name}
          size={size}
          color={color}
          style={iconStyle}
        />
        {label && <Text style={labelStyles}>{label}</Text>}
      </TouchableOpacity>
    </View>
  );
}
