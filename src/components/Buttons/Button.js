import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";

export default function Button(props) {
    const { buttonStyle, text, textStyle, onPress } = props;

    return (
        <TouchableOpacity
            style={[buttonStyle, styles.container]}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <Text style={[textStyle, styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: colors.blue400,
        borderRadius: 10,
        justifyContent: "space-between",
        padding: 10,
    },
    buttonText: {
        alignSelf: "center",
        color: colors.white,
        fontSize: 14,
    },
});
