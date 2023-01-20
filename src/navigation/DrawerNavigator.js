import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen, BibleScreen, ExamenScreen, PrayScreen } from "../screens";
import Icon from "../../assets/icons";
import colors from "../../assets/colors";
import TabNavigator from "./TabNavigator";

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{}}>
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}

            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                }}
                // headerMode="screen"
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "500",
    },
});
