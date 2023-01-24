import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import colors from "../theme/colors";
import { TextArea, WideButton } from "../components";
import { useNavigation } from "@react-navigation/native";

export default function ExamenScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.child}>
                <TextArea
                    textStyle={styles.text}
                    text="Whether you're ending your day, or preparing yourself to recieve the sacrament of Penance,
                    you should thoroughly examen your conscience through prayerfully reflecting on your thoughts, words, and deeds."
                />
            </View>
            <View style={styles.child}>
                <WideButton
                    text="Daily Examen"
                    onPress={() => navigation.navigate("Daily Examen")}
                />
            </View>
            <View style={styles.child}>
                <WideButton
                    text="Examen for Anyone"
                    onPress={() => navigation.navigate("Examen for Anyone")}
                />
            </View>
            {/* <View style={styles.child}>
                <WideButton
                    text="Examen for Children"
                    onPress={() => navigation.navigate("Examen for Children")}
                />
            </View>
            <View style={styles.child}>
                <WideButton
                    text="Examen for Young Adults"
                    onPress={() =>
                        navigation.navigate("Examen for Young Adults")
                    }
                />
            </View>
            <View style={styles.child}>
                <WideButton
                    text="Examen for Married"
                    onPress={() => navigation.navigate("Examen for Married")}
                />
            </View> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
        padding: 15,
        flexDirection: "column",
        paddingVertical: 7.5,
    },
    text: {
        // fontSize: 14,
    },
    child: {
        paddingVertical: 7.5,
    },
});
