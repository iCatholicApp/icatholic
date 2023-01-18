import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
