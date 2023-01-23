import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import colors from "../theme/colors";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text>homescreen</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.neutral95,
        padding: 15,
        // gap: 10,
    },
});
