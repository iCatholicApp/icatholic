import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Header, Icon } from "../components";
import colors from "../theme/colors";
import { HomeScreen, BibleScreen, MassScreen } from "../screens";
import ExamenNavigator from "./ExamenNavigator";
import PrayerNavigator from "./PrayerNavigator";
import MoreNavigator from "./MoreNavigator";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.neutral50,
        tabBarLabelStyle: styles.label,
        header: (props) => <Header props={props} />,
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
        name="Mass"
        component={MassScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon type="fa5" name="church" color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Prayers"
        component={PrayerNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="praying-hands" color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Examen"
        component={ExamenNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon type="fa5" name="dove" color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MoreNav"
        component={MoreNavigator}
        options={{
          title: "More",
          tabBarIcon: ({ color }) => {
            return <Icon type="ion" size={34} name="menu" color={color} />;
          },
          headerShown: false,
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
