import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

export default function TextArea(props) {
    const { text, style, textStyle, title, titleStyle } = props;

    return (
        <View style={[style, styles.container]}>
            {title && <Text style={[titleStyle, styles.title]}>{title}</Text>}
            {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        borderRadius: 10,
        padding: 15,
        backgroundColor: colors.white,
    },
    text: {
        alignSelf: "center",
        fontSize: 14,
    },
    title: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});
