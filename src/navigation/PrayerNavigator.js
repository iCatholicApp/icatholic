import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrayerListScreen, RosaryScreen, PrayerScreen } from "../screens";
import { Header } from "../components";

export default function ExamenNavigator() {
  const PrayerStack = createNativeStackNavigator();

  return (
    <PrayerStack.Navigator
      screenOptions={{
        header: (props) => <Header props={props} />,
      }}
    >
      <PrayerStack.Screen
        name="PrayersList"
        options={{ title: "Prayers" }}
        component={PrayerListScreen}
      />
      <PrayerStack.Screen name="Prayer" component={PrayerScreen} />
      <PrayerStack.Screen
        name="Rosary"
        options={{ title: "Holy Rosary" }}
        component={RosaryScreen}
      />
    </PrayerStack.Navigator>
  );
}
