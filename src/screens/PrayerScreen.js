import React from "react";

import { StyleSheet, ScrollView, Text } from "react-native";
import { Card } from "../components";
import colors from "../theme/colors";

export default function PrayerScreen({ route }) {
    return (
        <ScrollView style={styles.container}>
            <Card>
                <Text>{route.params.prayer.prayer}</Text>
            </Card>
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
