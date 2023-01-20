import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, BibleScreen, ExamenScreen, PrayScreen } from "../screens";
import Icon from "../../assets/icons";

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: "#4eb6ef",
                tabBarInactiveTintColor: "#6a7798",
                tabBarLabelStyle: styles.label,
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
                        return (
                            <Icon
                                type="fa5"
                                name="praying-hands"
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Examen"
                component={ExamenScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon type="fa5" name="dove" color={color} />;
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
