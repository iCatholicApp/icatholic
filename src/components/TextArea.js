import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import colors from "../theme/colors";

export default function TextArea(props) {
    const { text, style, textStyle, title, titleStyle } = props;

    return (
        <View style={[style, styles.container]}>
            {title && <Text style={[titleStyle, styles.title]}>{title}</Text>}
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        padding: 15,
        backgroundColor: "white",
    },
    text: {
        alignSelf: "center",
        fontSize: 16,
        // color: colors.neutral20,
    },
});
