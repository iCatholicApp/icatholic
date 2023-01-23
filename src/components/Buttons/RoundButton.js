import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";

export default function RoundButton(props) {
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
        borderRadius: 100,
        justifyContent: "space-between",
        backgroundColor: colors.blue400,
        padding: 10,
    },
    buttonText: {
        alignSelf: "center",
        color: colors.white,
        fontSize: 14,
    },
});
