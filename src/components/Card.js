import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import colors from "../theme/colors";

export default function Card(props) {
    const { style, children } = props;

    return <View style={[style, styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        padding: 15,
        backgroundColor: "white",
    },
});
