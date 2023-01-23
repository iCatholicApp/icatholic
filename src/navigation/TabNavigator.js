import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../components";
import colors from "../theme/colors";
import {
    HomeScreen,
    BibleScreen,
    ExamenScreen,
    PrayScreen,
    ProfileScreen,
} from "../screens";
import ExamenNavigator from "./ExamenNavigator";

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: colors.blue400,
                tabBarInactiveTintColor: colors.neutral50,
                tabBarLabelStyle: styles.label,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="iCatholic"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => {
                        return <Icon type="ion" name="home" color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Bible"
                component={BibleScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon type="fa5" name="bible" color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Prayers"
                component={PrayScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon name="praying-hands" color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Examen"
                component={ExamenNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon type="fa5" name="dove" color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon type="ion" name="person" color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "500",
    },
});
