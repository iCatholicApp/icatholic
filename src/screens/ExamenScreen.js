import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import colors from "../theme/colors";

export default function ExamenScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text>ExamenScreen</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
        padding: 15,
    },
});
