import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";
import IconButton from "./Buttons/IconButton";

const screenWidth = Dimensions.get("window").width;

export default function Header({ props }) {
    const { navigation, route, options, back } = props;
    const title = getHeaderTitle(options, route.name);

    return (
        <View style={styles.header}>
            <View style={styles.container}>
                {back && (
                    <IconButton
                        type="ion"
                        name="chevron-back"
                        size={26}
                        iconStyle={styles.backButton}
                        onPress={navigation.goBack}
                    />
                )}
                <Text style={styles.title}>{title}</Text>
                <View></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 30,
        borderRadius: 10,
        padding: 15,
        marginTop: 15,
        backgroundColor: colors.white,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        flex: 1,
        textAlign: "center",
        flexDirection: "column",
        fontSize: 20,
        fontWeight: "bold",
        // marginLeft: -26,
    },
    header: {
        backgroundColor: colors.neutral95,
    },
});
