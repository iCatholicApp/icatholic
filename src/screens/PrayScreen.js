import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import colors from "../theme/colors";

export default function PrayScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text>PrayScreen</Text>
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
