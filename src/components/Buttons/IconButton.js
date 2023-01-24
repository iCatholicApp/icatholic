import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "../Icons";

export default function IconButton(props) {
    const { size, name, iconStyle, buttonStyle, type, color, onPress } = props;
    return (
        <View style={{ height: size, width: size }}>
            <TouchableOpacity
                style={buttonStyle}
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
            </TouchableOpacity>
        </View>
    );
}
