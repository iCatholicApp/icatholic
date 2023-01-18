import React, { useContext } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "../screens";

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();

    function DetailsScreen() {
        return (
            <ScrollView>
                <Text>detail</Text>
            </ScrollView>
        );
    }

    function Home() {
        return (
            <Stack.Navigator
                // screenOptions={{
                //     headerShown: false,
                // }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="detail" component={DetailsScreen} />
            </Stack.Navigator>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <Home />
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
