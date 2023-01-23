import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import colors from "../theme/colors";
import { TextArea, WideButton } from "../components";
import { useNavigation } from "@react-navigation/native";

export default function ExamenScreen() {
    const navigation = useNavigation();
    console.log("navigation", navigation);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.child}>
                <TextArea
                    title="Examination of Conscience"
                    // text="Whether you're ending your day, or preparing yourself to recieve the sacrament of Penance,
                    // you should thoroughly examen your conscience through prayerfully reflecting on your thoughts, words, and deeds."
                />
            </View>
            <View style={styles.child}>
                <WideButton
                    text="Daily Examination of Conscience"
                    onPress={() => navigation.navigate("Examination")}
                />
            </View>
            <View style={styles.child}>
                <WideButton text="Examen for Anyone" />
            </View>
            <View style={styles.child}>
                <WideButton text="Examen for Children" />
            </View>
            <View style={styles.child}>
                <WideButton text="Examen for Young Adults" />
            </View>
            <View style={styles.child}>
                <WideButton text="Examen for Married" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
        flexDirection: "column",
        paddingVertical: 7.5,
    },
    child: {
        paddingVertical: 7.5,
    },
});
