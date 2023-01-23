import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import colors from "../theme/colors";
import { Card, Icon, IconButton, TextArea, WideButton } from "../components";
import { useNavigation } from "@react-navigation/native";

export default function ExamenQuestionScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.child}>
                <Card style={styles.card}>
                    <IconButton
                        type="ion"
                        name="chevron-back"
                        size={26}
                        iconStyle={styles.backButton}
                        onPress={() => navigation.navigate("Examen Page")}
                    />
                    <Text style={styles.title}>Examination of Conscience</Text>
                </Card>
            </View>
            <Card style={styles.body}>
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
                <TextArea text="text" />
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
        padding: 15,
        columnGap: 5,
        // paddingVertical: gap,
    },
    card: {
        alignItems: "center",
        flexDirection: "row",
    },
    body: {},
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
    },

    child: {
        paddingVertical: 15,
    },
});
