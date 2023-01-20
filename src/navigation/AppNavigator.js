import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import DrawerNavigator from "./DrawerNavigator";

export default function AppNavigator() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <DrawerNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", // color of status bar
    },
});
