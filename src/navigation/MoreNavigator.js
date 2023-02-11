import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateNotificationScreen,
  NotificationScreen,
  MoreScreen,
} from "../screens";
import { Header } from "../components";

export default function MoreNavigator() {
  const PrayerStack = createNativeStackNavigator();

  return (
    <PrayerStack.Navigator
      screenOptions={{
        header: (props) => <Header props={props} />,
      }}
    >
      <PrayerStack.Screen
        name="Options"
        component={MoreScreen}
        options={{ headerShown: false }}
      />
      <PrayerStack.Screen name="Notifications" component={NotificationScreen} />
      <PrayerStack.Screen
        name="Create Notification"
        component={CreateNotificationScreen}
      />
    </PrayerStack.Navigator>
  );
}
