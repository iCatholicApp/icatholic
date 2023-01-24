import React, { Fragment } from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import colors from "../theme/colors";
import TabNavigator from "./TabNavigator";

export default function AppNavigator() {
    return (
        <Fragment>
            <SafeAreaView
                style={{ flex: 0, backgroundColor: colors.neutral95 }}
            />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    <TabNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </Fragment>
    );
}
