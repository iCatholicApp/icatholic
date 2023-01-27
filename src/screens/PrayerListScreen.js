import React, { useState } from "react";

import { StyleSheet, ScrollView, TextInput } from "react-native";
import { WideButton } from "../components";
import colors from "../theme/colors";
import prayers from "../constants/prayers";
import { useNavigation } from "@react-navigation/native";

export default function PrayerListScreen() {
    const navigation = useNavigation();
    const [searchString, setSearchString] = useState("");

    return (
        <ScrollView style={styles.container}>
            <TextInput
                placeholder="Search"
                value={searchString}
                onChangeText={(text) => setSearchString(text)}
                style={styles.searchInput}
            />

            {prayers
                .filter((prayer) => {
                    if (searchString === "") {
                        return prayers;
                    } else if (
                        prayer.label
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                    ) {
                        return prayers;
                    }
                })
                .map((prayer, i) => (
                    <WideButton
                        key={i}
                        text={prayer.label}
                        buttonStyle={styles.buttonStyle}
                        onPress={() =>
                            navigation.navigate("Prayer", { prayer })
                        }
                    />
                ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
        padding: 15,
    },
    buttonStyle: {
        marginBottom: 15,
    },
    searchInput: {
        width: "100%",
        backgroundColor: colors.white,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
});
